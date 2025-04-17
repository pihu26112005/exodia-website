"use client";

import { useState } from "react";
import Image from "next/image";
import { TbMessage2Star } from "react-icons/tb";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "./ui/dialog"; // Update path based on your project

type Announcement = {
    _id: string;
    title: string;
    description: string;
    imageUrl?: string;
    time: string;
};

export default function AnnouncementDialog() {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false); // ⏳ Loader state

    const fetchAnnouncements = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/announcements", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            const reversedData = data.reverse();
            setAnnouncements(reversedData);
        } catch (error) {
            console.error("Failed to fetch announcements", error);
        } finally {
            setLoading(false);
        }
    };

    const handleOpenChange = (isOpen: boolean) => {
        setOpen(isOpen);
        if (isOpen) fetchAnnouncements();
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <div className="fixed top-24 max-sm:top-20 right-4 text-2xl sm:text-3xl font-bold text-black hover:text-[#BB0000] transition-colors cursor-pointer bg-white p-2 rounded-full">
                    <TbMessage2Star />
                </div>
            </DialogTrigger>

            <DialogContent className="h-[80%] w-[60%] max-sm:w-[90%] overflow-y-auto p-4">
                <div className="text-4xl max-sm:text-xs font-semibold mb-4 text-black text-center">Latest <span className="text-[#BB0000]">Anouncements</span></div>

                <div className="space-y-4">
                    {loading ? (
                        <div className="flex justify-center items-center h-40">
                            <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <>
                            {announcements.map((announcement) => {
                                const date = new Date(announcement.time);
                                const formattedDate = date.toLocaleString("en-GB", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    hour12: true,
                                });

                                return (
                                    <div
                                        key={announcement._id}
                                        className="flex flex-col sm:flex-row bg-gray-100 rounded-lg shadow-md overflow-hidden p-4 hover:shadow-lg transition duration-300 items-center"
                                    >
                                        {announcement.imageUrl && (
                                            <div className="w-full sm:w-1/3 flex justify-center items-center mb-4 sm:mb-0">
                                                <Image
                                                    src={announcement.imageUrl}
                                                    alt={announcement.title}
                                                    width={150}
                                                    height={150}
                                                    className="object-cover rounded-md"
                                                />
                                            </div>
                                        )}

                                        <div
                                            className={`w-full ${announcement.imageUrl ? "sm:w-2/3 sm:ml-4" : "sm:w-full"
                                                } text-center sm:text-left`}
                                        >
                                            <h3 className="text-[#BB0000] text-lg font-bold">{announcement.title}</h3>
                                            <p className="text-black mt-2 text-sm">{announcement.description}</p>
                                            <p className="text-xs text-gray-500 mt-2">{formattedDate}</p>
                                        </div>
                                    </div>
                                );
                            })}

                            {announcements.length === 0 && (
                                <p className="text-center text-gray-500">No announcements available.</p>
                            )}
                        </>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
