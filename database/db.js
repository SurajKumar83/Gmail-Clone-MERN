import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const Connection = () => {
  const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@gmail-clone.niysynt.mongodb.net/?retryWrites=true&w=majority`;
  try {
    mongoose.connect(DB_URL, { useNewUrlParser: true });
    console.log("Connected Successfully");
  } catch (error) {
    console.error("Error While connecting with database ", error.message);
  }
};
export default Connection;
