import mongoose from 'mongoose';

const AnnouncementSchema = new mongoose.Schema({
    title: { type: String, required: true }, 
    description: { type: String, required: true },
    imageUrl: { type: String, required: false },
    time: { type: Date, required: true },
}, { timestamps: true });

const Announcement = mongoose.models.Announcement || mongoose.model('Announcement', AnnouncementSchema);

export { Announcement };