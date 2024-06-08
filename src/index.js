import express from "express";
import dotenv from "dotenv";
import { factoryRoutes } from "./routes/factory.routes.js";
import { sprocketRoutes } from "./routes/sprocket.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use('/factories', factoryRoutes);
app.use('/sprockets', sprocketRoutes);

app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

