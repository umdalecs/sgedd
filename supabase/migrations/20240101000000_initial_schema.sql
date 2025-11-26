-- SGEDD Database Schema
-- Sistema Gestor del Estímulo al Desempeño Docente

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum types
CREATE TYPE rol_usuario AS ENUM ('Docente', 'Generador', 'Revisor', 'Administrador');
CREATE TYPE estado_documento AS ENUM ('pendiente', 'en_revision', 'aprobado', 'rechazado', 'firmado');
CREATE TYPE tipo_documento AS ENUM ('Constancia de Servicios Escolares', 'Constancia de Recursos Humanos', 'Otro');

-- Create usuarios table
CREATE TABLE IF NOT EXISTS usuarios (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    nombre TEXT NOT NULL,
    apellido TEXT NOT NULL,
    rfc TEXT NOT NULL,
    puesto TEXT NOT NULL,
    rol rol_usuario NOT NULL,
    estatus_plaza TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create plantillas_documento table
CREATE TABLE IF NOT EXISTS plantillas_documento (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre TEXT NOT NULL,
    tipo tipo_documento NOT NULL,
    descripcion TEXT,
    contenido_html TEXT NOT NULL,
    campos_dinamicos TEXT[] DEFAULT '{}',
    activo BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    created_by UUID REFERENCES usuarios(id) ON DELETE SET NULL
);

-- Create documentos table
CREATE TABLE IF NOT EXISTS documentos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    plantilla_id UUID REFERENCES plantillas_documento(id) ON DELETE SET NULL,
    nombre TEXT NOT NULL,
    tipo tipo_documento NOT NULL,
    estado estado_documento DEFAULT 'pendiente',
    contenido_generado TEXT,
    url_pdf TEXT,
    solicitante_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
    generador_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
    revisor_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
    firma_digital TEXT,
    fecha_firma TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create firmas table
CREATE TABLE IF NOT EXISTS firmas (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
    firma_base64 TEXT NOT NULL,
    tipo TEXT DEFAULT 'digital',
    activa BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create periodos table
CREATE TABLE IF NOT EXISTS periodos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre TEXT NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    activo BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create notificaciones table
CREATE TABLE IF NOT EXISTS notificaciones (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
    tipo TEXT NOT NULL,
    mensaje TEXT NOT NULL,
    leida BOOLEAN DEFAULT FALSE,
    documento_id UUID REFERENCES documentos(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_usuarios_rol ON usuarios(rol);
CREATE INDEX IF NOT EXISTS idx_usuarios_email ON usuarios(email);
CREATE INDEX IF NOT EXISTS idx_documentos_solicitante ON documentos(solicitante_id);
CREATE INDEX IF NOT EXISTS idx_documentos_estado ON documentos(estado);
CREATE INDEX IF NOT EXISTS idx_documentos_generador ON documentos(generador_id);
CREATE INDEX IF NOT EXISTS idx_documentos_revisor ON documentos(revisor_id);
CREATE INDEX IF NOT EXISTS idx_firmas_usuario ON firmas(usuario_id);
CREATE INDEX IF NOT EXISTS idx_notificaciones_usuario ON notificaciones(usuario_id);
CREATE INDEX IF NOT EXISTS idx_plantillas_tipo ON plantillas_documento(tipo);

-- Enable Row Level Security
ALTER TABLE usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE plantillas_documento ENABLE ROW LEVEL SECURITY;
ALTER TABLE documentos ENABLE ROW LEVEL SECURITY;
ALTER TABLE firmas ENABLE ROW LEVEL SECURITY;
ALTER TABLE periodos ENABLE ROW LEVEL SECURITY;
ALTER TABLE notificaciones ENABLE ROW LEVEL SECURITY;

-- Create policies for usuarios
CREATE POLICY "Users can view their own profile" ON usuarios
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON usuarios
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Enable insert for authenticated users" ON usuarios
    FOR INSERT WITH CHECK (auth.uid() = id);

-- Allow admins and generadores to view all users
CREATE POLICY "Admins and generators can view all users" ON usuarios
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM usuarios WHERE id = auth.uid() AND rol IN ('Administrador', 'Generador', 'Revisor')
        )
    );

-- Create policies for plantillas_documento
CREATE POLICY "Anyone can view active templates" ON plantillas_documento
    FOR SELECT USING (activo = TRUE);

CREATE POLICY "Generators and admins can manage templates" ON plantillas_documento
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM usuarios WHERE id = auth.uid() AND rol IN ('Administrador', 'Generador')
        )
    );

-- Create policies for documentos
CREATE POLICY "Users can view their own documents" ON documentos
    FOR SELECT USING (
        solicitante_id = auth.uid() OR 
        generador_id = auth.uid() OR 
        revisor_id = auth.uid()
    );

CREATE POLICY "Generators can create documents" ON documentos
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM usuarios WHERE id = auth.uid() AND rol IN ('Administrador', 'Generador')
        )
    );

CREATE POLICY "Generators and reviewers can update documents" ON documentos
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM usuarios WHERE id = auth.uid() AND rol IN ('Administrador', 'Generador', 'Revisor')
        )
    );

CREATE POLICY "Reviewers can view pending documents" ON documentos
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM usuarios WHERE id = auth.uid() AND rol IN ('Administrador', 'Revisor')
        ) AND estado IN ('pendiente', 'en_revision', 'aprobado')
    );

-- Create policies for firmas
CREATE POLICY "Users can manage their own signatures" ON firmas
    FOR ALL USING (usuario_id = auth.uid());

-- Create policies for periodos
CREATE POLICY "Anyone can view periods" ON periodos
    FOR SELECT USING (TRUE);

CREATE POLICY "Admins can manage periods" ON periodos
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM usuarios WHERE id = auth.uid() AND rol = 'Administrador'
        )
    );

-- Create policies for notificaciones
CREATE POLICY "Users can view their own notifications" ON notificaciones
    FOR SELECT USING (usuario_id = auth.uid());

CREATE POLICY "Users can update their own notifications" ON notificaciones
    FOR UPDATE USING (usuario_id = auth.uid());

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_usuarios_updated_at
    BEFORE UPDATE ON usuarios
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_plantillas_updated_at
    BEFORE UPDATE ON plantillas_documento
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_documentos_updated_at
    BEFORE UPDATE ON documentos
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_firmas_updated_at
    BEFORE UPDATE ON firmas
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Insert some default templates
INSERT INTO plantillas_documento (nombre, tipo, descripcion, contenido_html, campos_dinamicos) VALUES
(
    'Constancia de Servicios Escolares Básica',
    'Constancia de Servicios Escolares',
    'Plantilla básica para constancias de servicios escolares',
    '<div style="font-family: Arial, sans-serif; padding: 40px;">
        <h1 style="text-align: center;">CONSTANCIA DE SERVICIOS ESCOLARES</h1>
        <p style="margin-top: 40px;">
            A quien corresponda:
        </p>
        <p style="margin-top: 20px; text-align: justify;">
            Por medio de la presente, se hace constar que el/la C. <strong>{{nombre_completo}}</strong>,
            con RFC <strong>{{rfc}}</strong>, ha prestado sus servicios como docente en esta institución
            durante el periodo comprendido del <strong>{{fecha_inicio}}</strong> al <strong>{{fecha_fin}}</strong>.
        </p>
        <p style="margin-top: 20px;">
            Se extiende la presente constancia para los fines legales que al interesado convengan.
        </p>
        <p style="margin-top: 40px;">
            Atentamente,
        </p>
        <div style="margin-top: 60px; text-align: center;">
            <p>_______________________________</p>
            <p>{{nombre_firmante}}</p>
            <p>{{cargo_firmante}}</p>
        </div>
    </div>',
    ARRAY['nombre_completo', 'rfc', 'fecha_inicio', 'fecha_fin', 'nombre_firmante', 'cargo_firmante']
),
(
    'Constancia de Recursos Humanos',
    'Constancia de Recursos Humanos',
    'Plantilla para constancias de recursos humanos',
    '<div style="font-family: Arial, sans-serif; padding: 40px;">
        <h1 style="text-align: center;">CONSTANCIA DE RECURSOS HUMANOS</h1>
        <p style="margin-top: 40px;">
            A quien corresponda:
        </p>
        <p style="margin-top: 20px; text-align: justify;">
            El Departamento de Recursos Humanos hace constar que el/la C. <strong>{{nombre_completo}}</strong>,
            con RFC <strong>{{rfc}}</strong>, labora actualmente en esta institución con el puesto de
            <strong>{{puesto}}</strong>, con un estatus de plaza: <strong>{{estatus_plaza}}</strong>.
        </p>
        <p style="margin-top: 20px; text-align: justify;">
            Antigüedad: <strong>{{antiguedad}}</strong>
        </p>
        <p style="margin-top: 20px;">
            Se extiende la presente para los fines que al interesado convengan.
        </p>
        <div style="margin-top: 60px; text-align: center;">
            <p>_______________________________</p>
            <p>{{nombre_firmante}}</p>
            <p>{{cargo_firmante}}</p>
        </div>
    </div>',
    ARRAY['nombre_completo', 'rfc', 'puesto', 'estatus_plaza', 'antiguedad', 'nombre_firmante', 'cargo_firmante']
);
