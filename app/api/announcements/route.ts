import { connectToDatabase } from "@/lib/connectDB";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if(!body || !body.title || !body.description)
    return new NextResponse("Invalid data", { status: 400 });

  try {
    const db = await connectToDatabase();

    const createdAt = new Date();

    const newAnnouncement = { title: body.title, description: body.description, imageUrl: body.imageUrl, time: createdAt };

    const result = await db.collection("announcements").insertOne(newAnnouncement);

    return NextResponse.json({ ...newAnnouncement, _id: result.insertedId });
  }
  catch (error) {
    console.error("[ANNOUNCEMENTS_POST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET() {
  try {
    const db = await connectToDatabase();

    const announcements = await db.collection("announcements").find().toArray();

    return NextResponse.json(announcements);
  }
  catch(error) {
    console.error("[ANNOUNCEMENTS_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}