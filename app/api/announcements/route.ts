import { connectToDatabase } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // Validating incoming request data
  if (!body || !body.title || !body.description) {
    return new NextResponse("Invalid data", { status: 400 });
  }

  try {
    // Establish the database connection
    const db = await connectToDatabase();

    const createdAt = new Date();

    const newAnnouncement = {
      title: body.title,
      description: body.description,
      imageUrl: body.imageUrl,
      time: createdAt,
    };

    // Insert the new announcement document
    const result = await db.collection("announcements").insertOne(newAnnouncement);

    // Respond with the created announcement
    return NextResponse.json({ ...newAnnouncement, _id: result.insertedId });
  } catch (error) {
    console.error("Database operation failed:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
