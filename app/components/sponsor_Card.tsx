import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./3d-card";

type SpomsorsCardProps = {
  name: string;
  image: string;
  link?: string;
};

const Sponsors_Card = ({ name, image, link = "#" }: SpomsorsCardProps) => {
  return (
    <>
      {/* <motion.div
        className="bg-[#0A0A0A] rounded-2xl border border-[#BB0000]/30 group hover:border-[#BB0000] transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      > */}
        <CardContainer className="inter-var rounded-2xl max-sm:p-0">
          <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-[#BB0000]/30 border border-[#BB0000]/30 hover:border-[#BB0000] w-[20rem] h-auto rounded-2xl p-6">
            {/* Image with Overlay */}
            <div className="relative h-60 overflow-hidden rounded-2xl">
              <Image
                src={image}
                height={1000}
                width={1000}
                className="h-60 max-sm:h-40 w-full object-cover rounded-2xl group-hover/card:shadow-xl"
                alt={name}
              />
              {/* Red Hover Overlay */}
              <div className="absolute inset-0 bg-[#BB0000]/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>

            {/* Sponsor Name */}
            <CardItem
              translateZ="50"
              className={`text-xl text-center flex justify-center items-center font-bold text-neutral-600 dark:text-white group-hover:text-[#BB0000] transition-all duration-300 `}
            >
              {name}
            </CardItem>

            {/* Learn More Link */}
            <div className="text-center mt-4">
              <Link href={link} className="text-[#BB0000] hover:underline">
                Learn more →
              </Link>
            </div>
          </CardBody>
        </CardContainer>
      {/* </motion.div> */}
    </>
  );
};

export default Sponsors_Card;
