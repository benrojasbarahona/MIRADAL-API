import { NextResponse } from "next/server";
import {v4 as uuidv4} from 'uuid';
let datos = [
  { id: uuidv4(), usuario: "Martín" },
];
export async function GET(request:Request) {
return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
}
