# MIRADAL-API

MIRADAL-API es el núcleo del sistema de información del proyecto MIRADAL, una iniciativa de conciencia ambiental desarrollada en el contexto universitario del Campus Miraflores de la Universidad Austral de Chile. Esta API se encarga de gestionar la comunicación entre los distintos componentes del sistema, facilitando la captura, almacenamiento y visualización de datos sobre la percepción del humedal del campus.

## Contexto

El Campus Miraflores posee un humedal de alto valor ecológico, el cual presenta señales de deterioro ambiental, tales como:

- Mala calidad del agua
- Malos olores
- Basura y escombros

Como parte de la comunidad universitaria, se ha constatado esta situación, lo que motivó el desarrollo de una solución tecnológica que permita concientizar y recopilar información sobre el estado del humedal.

## Propósito del Proyecto

El propósito de MIRADAL es capturar la percepción del estado del humedal a través de encuestas simples dirigidas a estudiantes, profesores y funcionarios que transitan por el sector. Esta información permitirá construir una línea base de su estado a lo largo del año, facilitando acciones de mejora o protección informadas.

## Objetivos

### Objetivo General

Recopilar datos de percepción del estado del humedal desde la propia comunidad Miraflorina durante el año.

### Objetivos Específicos

1. Definir una encuesta de percepción del estado del humedal.
2. Desarrollar una aplicación web para desplegar la encuesta.
3. Desarrollar un dashboard para visualizar los datos capturados.
4. Validar las aplicaciones de captura de datos y dashboard con usuarios reales.

## Rol de MIRADAL-API

MIRADAL-API es responsable de:

- Exponer endpoints para recibir datos desde la aplicación de captura.
- Exponer endpoints para entregar datos al sistema de visualización.
- Validar y procesar los datos entrantes en formatos estandarizados (JSON).
- Conectarse con una base de datos para almacenar las respuestas.
- Mantener una estructura de datos clara, robusta y documentada.
- Asegurar la escalabilidad y mantenibilidad del sistema.

## Equipo de Desarrollo

- Benjamín Rojas Barahona  
  benrojasbarahona@gmail.com

- Sebastián Domínguez  
  sebastian.dominguez@alumnos.uach.cl

- Jared Montecinos  
  jaredmontecinos2005@gmail.com



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/route.ts`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## API Routes

This directory contains example API routes for the headless API app.

For more details, see [route.js file convention](https://nextjs.org/docs/app/api-reference/file-conventions/route).
