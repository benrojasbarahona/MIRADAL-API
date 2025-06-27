import { NextRequest, NextResponse } from "next/server";
import { insertarEncuesta, obtenerTodasLasEncuestas } from "@/lib/db/encuesta";

export async function GET() {
    try {
        const encuestas = await obtenerTodasLasEncuestas();
        return NextResponse.json(encuestas);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}