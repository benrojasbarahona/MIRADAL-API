import { NextRequest, NextResponse } from "next/server";
import { obtenerRespuestasDeEncuesta } from "@/lib/db/encuesta";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const pathSegments = url.pathname.split("/");
    const id = pathSegments[pathSegments.length - 1];

    const data = await obtenerRespuestasDeEncuesta(id);
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
