import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

//  RUTA DE PRUEBA (IMPORTANTE)
app.get("/", (req, res) => {
  res.json({ message: "API appTienda funcionando correctamente " });
});

// Rutas
app.use("/api", authRoutes);
app.use("/api", clientesRoutes);

export default app;