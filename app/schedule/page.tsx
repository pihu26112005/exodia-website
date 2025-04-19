import React from "react";

// Define the type for each event
interface EventItem {
  time: string;
  title: string;
  venue: string;
}

// Sample events for Day 1
const day1Events: EventItem[] = [
  { time: "1", title: "OPENING CEREMONY", venue: "Village Square" },
  { time: "2", title: "NUKKAD NATAK", venue: "South Volleyball Court" },
  { time: "3", title: "ONE TO VECNA: FACE PAINTING", venue: "South Campus Cricket Ground" },
  { time: "4", title: "Dancing Dwarf: Solo Dance", venue: "A18-1A" },
  { time: "5", title: "VERSE OF THE VIGIL: 24 HOUR POETRY", venue: "A11-1B" },
  { time: "6", title: "SPIN A YARN: LORE OF THE LEGEND", venue: "A11-1B" },
  { time: "7", title: "THEATRE OF DREAMS: STAGE PLAY", venue: "Auditorium" },
  { time: "8", title: "BATTLE OF BANDS: BAND COMPETITION", venue: "Main Stage" },
  { time: "9", title: "CITE AND RECITE: SLAM POETRY", venue: "A11-1B" },
  { time: "10", title: "GOT AND HOTD QUIZ", venue: "A11-1A" },
];

// Sample events for Day 2 (from image)
const day2Events: EventItem[] = [
  { time: "1", title: "MR & MS EXODIA", venue: "Main Stage" },
  { time: "2", title: "SONIC SYNC: GROUP DANCE", venue: "Main Stage" },
  { time: "3", title: "BATTLE OF BANDS (REMAINING TEAMS)", venue: "Main Stage" },
  { time: "4", title: "THEATRE OF DREAMS: STAGE PLAY (REMAINING TEAMS)", venue: "Auditorium" },
  { time: "5", title: "DUAL MIRAGE: DUET DANCE", venue: "Auditorium" },
  { time: "6", title: "MUNSC", venue: "A18-2A" },
  { time: "7", title: "WORKSHOP", venue: "A18-1A" },
  { time: "8", title: "FABLED FREQUENCIES: PAIR ON STAGE", venue: "A13-1A" },
  { time: "9", title: "TARANGINI: SOLO SINGING", venue: "A13-1A" },
  { time: "10", title: "IMPROMPTU CANVAS: WATERCOLOUR PAINTING", venue: "A11-1A" },
  { time: "11", title: "A TALE ALONE: MONO ACT", venue: "A11-1A" },
  { time: "12", title: "VERSE OF THE VIGIL: 24 HOUR POETRY", venue: "A11-1B" },
  { time: "13", title: "TALES OF TRIUMPH: CREATIVE WRITING", venue: "A11-1B" },
  { time: "14", title: "JIGYASA: GENERAL QUIZ", venue: "Hall A" },
  { time: "15", title: "BAZM-E-SUKHAN: MUSHAIRA", venue: "Hall B" },
  { time: "16", title: "Kavya Sandhya", venue: "Auditorium" },
];

// Component for each day's event list
const EventBlock: React.FC<{ day: string; date: string; events: EventItem[] }> = ({ day, date, events }) => (
  <>
    <div className="text-3xl font-bold text-center mt-20">
      {day} <span className="text-[#BB0000]">Schedule</span>
    </div>
    <div className="text-xl font-bold mb-8 mt-2 text-center">
      <span className="text-[#BB0000]">[</span> {date} <span className="text-[#BB0000]">]</span>
    </div>
    <div className="space-y-6">
      {events.map((event, index) => (
        <div
          key={index}
          className="bg-red-50 shadow-md border-l-4 border-[#BB0000] p-4 rounded-md hover:shadow-lg transition-all"
        >
          <div className="text-sm text-gray-500 font-medium">Event {event.time}</div>
          <h2 className="text-xl font-semibold text-[#BB0000]">{event.title}</h2>
          <p className="text-black">
            <span className="text-[#bb0000a4]">Venue - </span> {event.venue}
          </p>
        </div>
      ))}
    </div>
  </>
);

// Main page component
const Page: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <EventBlock day="Day-1" date="18 April 2025" events={day1Events} />
      <EventBlock day="Day-2" date="19 April 2025" events={day2Events} />
    </div>
  );
};

export default Page;
