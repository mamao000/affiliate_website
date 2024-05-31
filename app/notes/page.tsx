import { superbaseClient } from "../lib/superbaseClient";

export default async function Notes() {
  const supabase = superbaseClient();
  const { data: notes } = await supabase.from("notes").select();

  return <pre>{JSON.stringify(notes, null, 2)}</pre>;
}
