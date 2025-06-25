import { NextRequest, NextResponse } from "next/server";
import { obtenerRespuestasDeEncuesta } from "@/lib/db/encuesta";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string }}
) {
  try {
    const data = await obtenerRespuestasDeEncuesta(params.id);
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
