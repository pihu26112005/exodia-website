import React from "react";

const events = [
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

const Page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 mt-20">
      <div className="text-3xl font-bold text-center">Day-1  <span className="text-[#BB0000]"> Schedule</span></div>
      <div className="text-xl font-bold mb-8 mt-2 text-center"> <span className="text-[#BB0000]"> [ </span> 18 April 2025 <span className="text-[#BB0000]"> ] </span></div>
      <div className="space-y-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-red-50 shadow-md border-l-4 border-[#BB0000] p-4 rounded-md hover:shadow-lg transition-all"
          >
            <div className="text-sm text-gray-500 font-medium">Event {event.time}</div>
            <h2 className="text-xl font-semibold text-[#BB0000]">{event.title}</h2>
            <p className="text-black"> <span className="text-[#bb0000a4]"> Venue - </span> {event.venue}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
