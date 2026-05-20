const pool = require("../config/db");

const Plant = {
  getOne: async (id) => {
    const result = await pool.query("SELECT * FROM plants WHERE id = $1", [id]);
    return result.rows[0];
  },

  getAll: async () => {
    const result = await pool.query("SELECT * FROM plants ORDER BY id DESC");
    return result.rows;
  },

  // CREATE a plant (For modal)
  create: async (name, species, image_url, last_watered, purchase_date) => {
    console.log("--- SYSTEM CHECK: TRIGGERING CREATE MODEL ---");
    const result = await pool.query(
      "INSERT INTO plants (name, species, image_url, last_watered, purchase_date) VALUES ($1, $2, $3, $4, $5) RETURNING id",
      [name, species, image_url, last_watered, purchase_date],
    );
    return result.rows[0].id; // Return the new ID so we can redirect to it
  },
};
module.exports = Plant;
