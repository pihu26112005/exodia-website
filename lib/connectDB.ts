import { MongoClient } from "mongodb";

const uri = process.env.DATABASE_URL as string;
const client = new MongoClient(uri);

let isConnected = false;

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log("Using existing database connection");
    return client.db(); // Return the database instance
  }

  try {
    await client.connect();
    isConnected = true;
    console.log("Connected to MongoDB successfully");
    return client.db(); // Return the database instance
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to database");
  }
};
