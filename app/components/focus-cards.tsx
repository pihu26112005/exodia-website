"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
  }: {
    card: Card;
    index: number;
  }) => {
    return (
      <div>
        <div
          className={cn(
            "rounded-3xl border-2 border-[#BB0000] relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-36 w-36 md:h-80 md:w-72 transition-all duration-300 ease-out"
          )}
        >
          <Image
            src={card.photo}
            alt="Card Image"
            fill
            className="object-cover absolute inset-0"
          />
        </div>

        {card.name && (
          <div className="text-center mt-4">
            <h3 className="text-lg md:text-xl font-semibold">{card.name}</h3>
          </div>
        )}
      </div>
    );
  }
);

Card.displayName = "Card";

type Card = {
  photo: string;
  name?: string; // Added name property
};

export function FocusCards({ cards }: { cards: Card[] }) {
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-10 max-sm:gap-4 h-auto flex-wrap w-full">
        {cards.map((card, index) => (
          <div className="flex flex-col justify-center items-center" key={index}>
            <Card card={card} index={index} />
          </div>
        ))}
      </div>
    </>
  );
}