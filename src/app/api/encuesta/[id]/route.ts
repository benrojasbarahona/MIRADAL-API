import { NextRequest, NextResponse } from "next/server";
import { obtenerRespuestasDeEncuesta } from "@/lib/db/encuesta";
import type { NextApiRequest } from "next";

export async function GET(
  _req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const id = context.params.id;
    const data = await obtenerRespuestasDeEncuesta(id);
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
