import dotenv from "dotenv";
import { connectToDatabase } from "./database/database.js";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});

const PORT = process.env.PORT || 3000;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log("App listening on port", PORT);
    });
  })
  .catch((err) => console.log("Some error occurred in connectToDatabase", err));
