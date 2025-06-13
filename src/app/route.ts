import { NextResponse } from "next/server";
import {v4 as uuidv4} from 'uuid';
let datos = [
  {
	  idRespuesta : uuidv4(),
    respuestas : [
    {item: "conoce-nombre-humedal", respuesta:"si"},
    {item: "nombre-humedal", respuesta:"miraflores"},
    {item: "percibe-aves", respuesta:"si"},
    {item: "percibe-peces", respuesta:"no"},
    {item: "percibe-ganado", respuesta:"no"},
    {item: "percibe-ranas", respuesta:"si"},
    {item: "percibe-insectos", respuesta:"no"},
    {item: "percibe-desechos", respuesta:"no"},
    {item: "percibe-agua-turbia", respuesta:"no"},
    {item: "huele", respuesta:2}
    ]
}

]
export async function GET() {
  return NextResponse.json( datos );
}


