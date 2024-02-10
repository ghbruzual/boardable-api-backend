import { NextFunction, Request, Response } from "express";
import { query } from "../db/db";

export const validateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username } = req.body;

    const existingUser = await query("SELECT * FROM users WHERE username = $1", [username]);

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: "El usuario ya existe" });
    }

    return next();
  } catch (error) {
    console.error("Error al validar usuario:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};
