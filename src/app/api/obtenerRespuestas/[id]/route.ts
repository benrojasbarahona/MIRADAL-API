import { NextRequest, NextResponse } from "next/server";
import { obtenerRespuestasDeEncuesta, obtenerTodasLasEncuestas } from "@/lib/db/encuesta";

export async function GET(req: NextRequest,
  {params}:{params: Promise <{id:string}>}
) {
  try {

    let  {id} = await params;

    id=id.toLowerCase();
    if (id === "all") {
      return getALL(req);
    }
    const data = await obtenerRespuestasDeEncuesta(id);
    return NextResponse.json({data}, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

async function getALL(req:NextRequest){
  
  const encuestas = await obtenerTodasLasEncuestas();
  const idList = encuestas.map((encuesta) => encuesta.id);
  const respuestas = idList.map(async (id) => {
    const data = await obtenerRespuestasDeEncuesta(id);
    return {id, data};
  });
  return NextResponse.json({respuestas}, { status: 200 });




}

