"use client";


import React from 'react';
import { FocusCards } from '../components/focus-cards';



const Page = () => {
  return (
    <>


      <div className="p-8 mt-20 font-sans">

        <h1 className={`text-center text-[3rem] max-2xl:text-[4rem] max-xl:text-[3rem] max-lg:text-[3rem] max-md:text-[2rem] max-sm:text-[2rem] text-white font-bold mb-12 `}>Organizing <span className="text-[#BB0000]">Team</span></h1>
        {teamsList.map((team) => (
          <div key={team.id} className="mb-[5rem] flex flex-col justify-center items-center " id={team.id}>
            <h2 className={`text-[2rem] max-sm:text-[1.4rem] text-white font-semibold mb-6 `}>{team.name}</h2>
           
            <FocusCards cards={team.members} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;

