import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
const file = await Deno.readFile("./manifest.schema.json");
const decoder = new TextDecoder('utf-8');
const json = JSON.parse(decoder.decode(file));
serve((req: Request) => Response.json(json));
