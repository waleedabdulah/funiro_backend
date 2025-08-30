import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const router = express.Router();
import productRoutes from './routes/productRoutes.js'
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
