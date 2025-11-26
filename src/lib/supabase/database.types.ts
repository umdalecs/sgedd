// Database types for Supabase
// These types reflect the schema for SGEDD system

export type Rol = "Docente" | "Generador" | "Revisor" | "Administrador";

export type EstadoDocumento =
  | "pendiente"
  | "en_revision"
  | "aprobado"
  | "rechazado"
  | "firmado";

export type TipoDocumento =
  | "Constancia de Servicios Escolares"
  | "Constancia de Recursos Humanos"
  | "Otro";

export interface Database {
  public: {
    Tables: {
      usuarios: {
        Row: {
          id: string;
          email: string;
          nombre: string;
          apellido: string;
          rfc: string;
          puesto: string;
          rol: Rol;
          estatus_plaza: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          nombre: string;
          apellido: string;
          rfc: string;
          puesto: string;
          rol: Rol;
          estatus_plaza?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          nombre?: string;
          apellido?: string;
          rfc?: string;
          puesto?: string;
          rol?: Rol;
          estatus_plaza?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      plantillas_documento: {
        Row: {
          id: string;
          nombre: string;
          tipo: TipoDocumento;
          descripcion: string | null;
          contenido_html: string;
          campos_dinamicos: string[];
          activo: boolean;
          created_at: string;
          updated_at: string;
          created_by: string | null;
        };
        Insert: {
          id?: string;
          nombre: string;
          tipo: TipoDocumento;
          descripcion?: string | null;
          contenido_html: string;
          campos_dinamicos?: string[];
          activo?: boolean;
          created_at?: string;
          updated_at?: string;
          created_by?: string | null;
        };
        Update: {
          id?: string;
          nombre?: string;
          tipo?: TipoDocumento;
          descripcion?: string | null;
          contenido_html?: string;
          campos_dinamicos?: string[];
          activo?: boolean;
          created_at?: string;
          updated_at?: string;
          created_by?: string | null;
        };
      };
      documentos: {
        Row: {
          id: string;
          plantilla_id: string | null;
          nombre: string;
          tipo: TipoDocumento;
          estado: EstadoDocumento;
          contenido_generado: string | null;
          url_pdf: string | null;
          solicitante_id: string;
          generador_id: string | null;
          revisor_id: string | null;
          firma_digital: string | null;
          fecha_firma: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          plantilla_id?: string | null;
          nombre: string;
          tipo: TipoDocumento;
          estado?: EstadoDocumento;
          contenido_generado?: string | null;
          url_pdf?: string | null;
          solicitante_id: string;
          generador_id?: string | null;
          revisor_id?: string | null;
          firma_digital?: string | null;
          fecha_firma?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          plantilla_id?: string | null;
          nombre?: string;
          tipo?: TipoDocumento;
          estado?: EstadoDocumento;
          contenido_generado?: string | null;
          url_pdf?: string | null;
          solicitante_id?: string;
          generador_id?: string | null;
          revisor_id?: string | null;
          firma_digital?: string | null;
          fecha_firma?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      firmas: {
        Row: {
          id: string;
          usuario_id: string;
          firma_base64: string;
          tipo: string;
          activa: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          usuario_id: string;
          firma_base64: string;
          tipo?: string;
          activa?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          usuario_id?: string;
          firma_base64?: string;
          tipo?: string;
          activa?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      periodos: {
        Row: {
          id: string;
          nombre: string;
          fecha_inicio: string;
          fecha_fin: string;
          activo: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          nombre: string;
          fecha_inicio: string;
          fecha_fin: string;
          activo?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          nombre?: string;
          fecha_inicio?: string;
          fecha_fin?: string;
          activo?: boolean;
          created_at?: string;
        };
      };
    };
  };
}

export type Usuario = Database["public"]["Tables"]["usuarios"]["Row"];
export type UsuarioInsert = Database["public"]["Tables"]["usuarios"]["Insert"];
export type UsuarioUpdate = Database["public"]["Tables"]["usuarios"]["Update"];

export type PlantillaDocumento =
  Database["public"]["Tables"]["plantillas_documento"]["Row"];
export type PlantillaDocumentoInsert =
  Database["public"]["Tables"]["plantillas_documento"]["Insert"];
export type PlantillaDocumentoUpdate =
  Database["public"]["Tables"]["plantillas_documento"]["Update"];

export type Documento = Database["public"]["Tables"]["documentos"]["Row"];
export type DocumentoInsert =
  Database["public"]["Tables"]["documentos"]["Insert"];
export type DocumentoUpdate =
  Database["public"]["Tables"]["documentos"]["Update"];

export type Firma = Database["public"]["Tables"]["firmas"]["Row"];
export type FirmaInsert = Database["public"]["Tables"]["firmas"]["Insert"];
export type FirmaUpdate = Database["public"]["Tables"]["firmas"]["Update"];

export type Periodo = Database["public"]["Tables"]["periodos"]["Row"];
export type PeriodoInsert = Database["public"]["Tables"]["periodos"]["Insert"];
export type PeriodoUpdate = Database["public"]["Tables"]["periodos"]["Update"];
