import express from "express";
import { UserParams } from "../models/signupValidation";
import { createUser } from '../services/signupService';

const users: UserParams[] = [];

const router = express.Router();


router.post('/', (req, res) =>{
  createUser(req,res)
  const { username, password } = req.body as UserParams; 

  if (users.some(user => user.username === username)) {
    return res.status(400).json({ error: 'El nombre de usuario ya está en uso.' });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: 'La contraseña debe tener al menos 6 caracteres.' });
  }
  
  const newUser: UserParams = { username, password };
  users.push(newUser);

  return res.status(201).json({ message: 'Usuario creado exitosamente.' });
});


export default router;