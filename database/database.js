import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbUrl = process.env.MONGO_DB_URI;
const dbName = process.env.MONGO_DB_NAME;
export async function connectToDatabase() {
  try {
    await mongoose.connect(`${dbUrl}/${dbName}`);
    console.log("Connected to database successfully!");
  } catch (error) {
    console.error("Some error occurred while connecting to database.", error);
    process.exit(1);
  }
}
