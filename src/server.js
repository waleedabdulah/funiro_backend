import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
const router = express.Router();

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// Test route
router.get("/products", async (req, res) => {
    const { data, error } = await supabase.from("Product").select("*");
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(data);
});

// Mount router at /api
app.use("/api", router);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
