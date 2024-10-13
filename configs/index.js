// import { drizzle } from 'drizzle-orm/xata-http';
// import { getXataClient } from './xata'; // Generated client
// const xata = getXataClient();
// const db = drizzle(xata);


import { neon } from "@neondatabase/serverless";
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "./schema"

const sql = neon(import.meta.env.VITE_DRIZZLE_DATABASE_URL);
export const db = drizzle(sql,{schema})

