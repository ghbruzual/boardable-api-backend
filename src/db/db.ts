import { Pool } from "pg";
require('dotenv').config()

export const pool = new Pool({
  user: process.env["PGUSER"],
  host: process.env["PGHOST"],
  database: process.env["PGDATABASE"],
  password: process.env["PGPASSWORD"],
  port: Number(process.env["PGPORT"]),
});

pool.connect((err) => {
  if (err) {
    console.error("Error al conectar con la base de datos:", err.message);
  } else {
    console.log("Conexión exitosa con la base de datos");
  }
});

export const query = (text: string, params?: (string | number | boolean)[]) => {
  return pool.query(text, params);
};
