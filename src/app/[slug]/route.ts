import { timeStamp } from "console";
import { NextRequest, NextResponse } from "next/server";
import {v4 as uuidv4} from 'uuid';
import { obtenerRespuestasDeEncuesta, obtenerTodasLasEncuestas } from "../../../lib/db/encuesta";


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



export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const data = await obtenerTodasLasEncuestas();
  const items = data;
  if (slug==="obtenerRespuestas") return NextResponse.json( await(items));
  else return NextResponse.json({ message: `False}!` });
}
