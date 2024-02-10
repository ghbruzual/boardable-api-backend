import { query } from '../db/db';
import { UserParams } from '../models/signupValidation';

export const createUserInDatabase = async (userData: UserParams): Promise<void> => {
  const { username, password } = userData;
  console.log("recibido el request")

  try {
    await query("INSERT INTO users (username, password) VALUES ($1, $2)", [username, password]);
  } catch (error) {
    throw new Error(`Error al crear usuario: ${error}`);
  }
};