import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

let datos = [
  {
    id: uuidv4(),
    respuestas: {
      item: ["si", "no", "perro"]
    }
  },
  {
    id: uuidv4(),
    respuestas: {
      item: [
        "conoce-nombre-humedal:si",
        "nombre-humedal:miraflores",
        "percibe-aves:si",
        "percibe-peces:no",
        "percibe-ganado:no",
        "percibe-ranas:si",
        "percibe-insectos:no",
        "percibe-desechos:no",
        "percibe-agua-turbia:no",
        "huele:2"
      ]
    }
  }
];

export async function GET() {
  return NextResponse.json(datos);
}

export async function POST() {
  const nuevoUsuario = {
    id: uuidv4(),
    respuestas: {
      item: ["no", "ne", "na"]
    }
  };
  datos.push(nuevoUsuario);
  return NextResponse.json(nuevoUsuario);
}
