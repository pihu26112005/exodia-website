import { connectToDatabase } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Ensure database connection
    await connectToDatabase();

    return NextResponse.json({ message: "Database connection is successful!" });
  } catch (error) {
    console.error("Error connecting to database:", error);
    return new NextResponse("Database connection failed", { status: 500 });
  }
}
