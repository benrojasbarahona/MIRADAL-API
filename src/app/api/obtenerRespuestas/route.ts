import { NextRequest, NextResponse } from "next/server";
import { insertarEncuesta, obtenerRespuestasYEncuestas, obtenerTodasLasEncuestas } from "@/lib/db/encuesta";

export async function GET() {
    try {
        const encuestas = await obtenerRespuestasYEncuestas();
        return NextResponse.json(encuestas);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}