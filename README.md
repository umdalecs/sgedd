# SGEDD - Sistema Gestor del Estimulo al Desempeño Docente

Este proyecto está desarrollado utilizando el siguiente set de tecnologías:

- NEXTjs (app router)
- TailwindCSS v4
- ShadcnUi
- Prisma
- PostgreSQL
- Next Auth?
- Adobe Acrobat sign up?

## Software necesario para ejecutar el proyecto

- [Bun]()
- (Opcional) [Docker]()

## Cómo ejecutar el proyecto

1. Primero copia el archivo `.env.example` a `.env` y rellena con los valores de tu entorno de desarrollo

2. Iniciar el contenedor de la base de datos si no tienes una instancia local de postgresql:

```bash
docker compose -f docker/docker-compose.yml up -d
```

3. Instala las dependencias de node e inicia el servidor de desarrollo:

```bash
bun install
bun dev
```
