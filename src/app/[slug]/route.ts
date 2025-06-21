import { timeStamp } from "console";
import { NextRequest, NextResponse } from "next/server";
import {v4 as uuidv4} from 'uuid';


// añadir un id ascendente para cada respuesta respondida
let datos = [
  {
	  idRespuesta : uuidv4(),
    timestamp: "2024-06-09 21:23:01",
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
},
{
  idRespuesta : uuidv4(),
  timestamp: "2024-09-21 01:23:01",
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

// Función CORS adaptada para NextResponse
function applyCORSHeaders(response: NextResponse) {
  response.headers.set("Access-Control-Allow-Credentials", "true");
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Content-Type, Authorization"
  );
  return response;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  if (slug==="obtenerRespuestas") return NextResponse.json(datos);
  else return NextResponse.json({ message: `False}!` });
}
