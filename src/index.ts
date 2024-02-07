import { app } from "./app";

const port = 5500;

app.listen(port, () => {
  console.log(`Web server running in http://localhost:${port}`);
});