import supabase from "../config/db.js";

export const getProducts = async (req, res) => {
  const { data, error } = await supabase.from("Product").select("*");
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.json(data);
};
