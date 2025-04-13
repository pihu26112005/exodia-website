import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

const Announcement = mongoose.models.Announcement || mongoose.model("Announcement", announcementSchema);

export { Announcement };
