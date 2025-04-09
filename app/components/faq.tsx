import localFont from "next/font/local";
import React, { useState, useEffect } from "react";

// Define types for props
type QuestionItem = {
  id: number;
  question: string;
  answer: string;
};

type FAQProps = {
  data: QuestionItem[];
};

type SearchbarProps = {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type QuestionProps = {
  question: string;
  answer: string;
};

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<QuestionItem[]>(data);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const results = data.filter((item) =>
      item.question.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, data]);

  return (
    <div className="container mx-auto p-8 text-center mb-20" id="faq">
      <h2 className={`text-4xl  max-sm:text-2xl text-white mb-10 `}>
        How can we help you?
      </h2>
      <Searchbar onSearchChange={handleSearchChange} />
      <section className="faq mt-6">
        {searchResults.map((item) => (
          <Question key={item.id} question={item.question} answer={item.answer} />
        ))}
      </section>
    </div>
  );
};

const Searchbar: React.FC<SearchbarProps> = ({ onSearchChange }) => {
  return (
    <form className="flex items-center w-full md:w-1/2 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <svg
          className="w-6 h-6 text-black"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M10 20a10 10 0 1110-10 10 10 0 01-10 10zm0-18a8 8 0 108 8 8 8 0 00-8-8zm10.707 19.293l-3.387-3.387A9.94 9.94 0 0018 16.83l3.387 3.387a1 1 0 11-1.414 1.414z" />
        </svg>
      </div>
      <input
        className={`flex-grow py-3 px-4 text-center  text-black placeholder-white focus:outline-none bg-white`}
        type="text"
        placeholder="Describe your issue"
        onChange={onSearchChange}
      />
    </form>
  );
};

const Question: React.FC<QuestionProps> = ({ question, answer }) => {
  const [isActive, setActive] = useState<boolean>(false);

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className="w-full md:w-1/2 mx-auto border-b border-white py-6">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleActive}>
        <h3 className={`text-lg font-medium text-white `}>{question}</h3>
        <button className="focus:outline-none">
          <svg
            className={`w-5 h-5 text-white transition-transform ${
              isActive ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 16.585l5.707-5.707a1 1 0 00-1.414-1.414L12 13.757l-4.293-4.293a1 1 0 00-1.414 1.414L12 16.585z" />
          </svg>
        </button>
      </div>
      {isActive && <p className={`text-sm text-white mt-2 `}>{answer}</p>}
    </div>
  );
};

// Example Data
const data: QuestionItem[] = [
    {
      id: 1,
      question: "What is Exodia?",
      answer: "Exodia is the annual cultural fest of IIT Mandi, and the biggest cultural fest in the Himalayas. It spans three days filled with music, dance, competitions, workshops, and performances by renowned artists.",
    },
    {
      id: 2,
      question: "When and where is Exodia 2025 happening?",
      answer: "Exodia 2025 will be held from 18th to 20th April at IIT Mandi’s Kamand Campus, surrounded by the stunning Himalayan scenery.",
    },
    {
      id: 3,
      question: "Who can attend Exodia?",
      answer: "Exodia is open to students from all colleges, local residents, and anyone interested in experiencing the cultural magic of the Himalayas. Entry details will be available on the registration page.",
    },
    {
      id: 4,
      question: "How do I register for events and competitions?",
      answer: "Event and competition registration will be available online through the official Exodia website. Each event page will have its own registration form and guidelines.",
    },
    {
      id: 7,
      question: "What kind of events can I expect?",
      answer: "Exodia hosts a variety of events — music and dance shows, fashion shows, coding and robotics competitions, literary events, gaming tournaments, and much more.",
    },
    {
      id: 8,
      question: "How can I reach IIT Mandi?",
      answer: "IIT Mandi is well connected by road. The nearest major town is Mandi, Himachal Pradesh. From Mandi, cabs and buses are available to reach the Kamand Campus.",
    },
    {
        id: 9,
        question: "What is the registration fee and what does it include?",
        answer: "The registration fee is ₹2449 per participant (non-refundable). It covers ProNite passes, mess food, accommodation, campus transport, and unlimited participation in all events.",
      },
      {
        id: 10,
        question: "Is there any security deposit?",
        answer: "Yes, a refundable security deposit of ₹1000 is to be paid upon arrival. It will be fully refunded after the fest concludes, provided guidelines are followed.",
      },
  ];
  

// export default function App() {
//   return <FAQ data={questions} />;
// }


export default FAQ;