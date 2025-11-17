# SGEDD - Sistema Gestor del Estimulo al Desempeño Docente

Este proyecto utiliza las siguientes tecnologías

- NEXTjs (app router)
- TailwindCSS v4
- ShadcnUi + Lucide React
- PostgreSQL
- Next Auth?
- Adobe Acrobat sign up?

## Software necesario para ejecutar el proyecto

- [Bun](https://bun.sh/)
- [Docker](https://www.docker.com/)

## Cómo ejecutar el proyecto

1. Instala las dependencias de node e inicia el servidor de desarrollo

```bash
bun install
# o
npm install
```

2. Inicia Supabase:

```bash
bunx supabase start
```

3. Copia el archivo `.env.example` a `.env` y rellena con los valores de tu entorno de desarrollo

4. Inicia el servidor de desarrollo de NEXTjs

```bash
bun dev
# o
npm run dev
```

## Documentación útil

- [NEXT](https://nextjs.org/docs/app)
- [Supabase CLI](https://supabase.com/docs/guides/local-development/cli/getting-started?queryGroups=platform&platform=windows)
- [Supabase](https://supabase.com/docs)
- [ShadcnUI](https://ui.shadcn.com/docs/components)
