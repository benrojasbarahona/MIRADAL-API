import { NextRequest, NextResponse } from "next/server";
import { insertarEncuesta, obtenerTodasLasEncuestas } from "@/lib/db/encuesta";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await insertarEncuesta(body);
    return NextResponse.json({ message: "Insertado correctamente", result });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
