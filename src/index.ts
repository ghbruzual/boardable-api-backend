import express from "express";
import router from "./Routers/signupRoute";
import cors from "cors";


const port = process.env["PORT"] || 5500;

export const app = express();

app.use('/signup', router);

const corsOptions = {
  origin: 'http://127.0.0.1:5173', // process.env["CLIENT_ORIGIN"]
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});