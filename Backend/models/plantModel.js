const pool = require("../config/db");

const Plant = {
  getOne: async (id) => {
    const result = await pool.query("SELECT * FROM plants WHERE id = $1", [id]);
    return result.rows[0];
  },
};
module.exports = Plant;
