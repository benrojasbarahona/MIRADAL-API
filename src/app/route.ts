import { NextResponse } from "next/server";
import {v4 as uuidv4} from 'uuid';
let datos = [
  {
    id:uuidv4(),
    respuestas:{
      item:["si","no","perro"]
    }
  }
]
export async function GET() {
  return NextResponse.json( datos );
}

export async function POST() {

    const nuevoUsuario = { id: uuidv4(), respuestas:{item:["no","ne","na"]} };
    datos.push(nuevoUsuario);
    return NextResponse.json(nuevoUsuario);
}
