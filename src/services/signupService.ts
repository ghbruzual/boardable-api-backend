import { Request, Response } from 'express';
import { createUserInDatabase } from '../data/signupData';
import { UserParams } from '../models/signupValidation';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body as UserParams;

    await createUserInDatabase({ username, password });

    return res.redirect('/signup');
  } catch (error) {
    console.error("Error al crear usuario:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};
