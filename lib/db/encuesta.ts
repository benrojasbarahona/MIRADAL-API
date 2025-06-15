import { supabase } from "../supabaseClient";

interface Respuesta {
  item: string;
  respuesta: string;
}

export interface EncuestaInput {
  id_respuesta: string;
  timestamp: string;
  respuestas: Respuesta[];
}

export async function insertarEncuesta(data: EncuestaInput) {
  const { id_respuesta, respuestas } = data;

  const { error: errorInsertEncuesta } = await supabase
    .from("Encuestas")
    .insert([{ id: id_respuesta }]);

  if (errorInsertEncuesta) throw errorInsertEncuesta;

  const respuestasToInsert = respuestas.map((r) => ({
    encuesta_id: id_respuesta,
    item: r.item,
    respuesta: r.respuesta,
  }));

  const { error: errorInsertRespuestas } = await supabase
    .from("Respuestas")
    .insert(respuestasToInsert);

  if (errorInsertRespuestas) throw errorInsertRespuestas;

  console.log("Insertado correctamente");
  return { success: true };
}

export async function obtenerTodasLasEncuestas() {
  const { data, error } = await supabase
    .from("Encuestas")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  console.log(data);
  return data;
}

export async function obtenerRespuestasDeEncuesta(id_encuesta: string) {
  const { data, error } = await supabase
    .from("Respuestas")
    .select("item, respuesta")
    .eq("encuesta_id", id_encuesta);
  if (error) throw error;
  console.log(data);
  return data;
}
