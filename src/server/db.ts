import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const client = createClient({
  url: 'file:./drizzle/db.sqlite',
});

export const db = drizzle(client, {
  casing: 'snake_case',
});
