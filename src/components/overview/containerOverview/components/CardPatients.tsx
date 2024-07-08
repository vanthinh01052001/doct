import Image from "next/image";
import React from "react";
import IconTrending from "../../../icons/overview/IconTrending";
import { cardPatients } from "@/constants/overview/general.cardPatients";

const CardPatients = () => {
  return (
    <>
      <div className="py-[35px] px-[20px] flex flex-col gap-9 rounded-[10px] bg-white dark:bg-black_282A36 w-full">
        {cardPatients.map((card) => (
          <div
            key={card.key}
            className="flex items-center justify-between gap-[26px] w-full"
          >
            <div
              className={`flex items-center justify-center ${card.bgColor} w-12 h-12 bg-opacity-10 rounded-3xl object-cover`}
            >
              <Image src={card.icon} alt="avatar" width={24} height={24} />
            </div>
            <div className="flex justify-center flex-col">
              <h3 className="font-semibold text-[22px] leading-[33px] text-black_1B2432 dark:text-white">
                {card.amount}
              </h3>
              <span className="font-normal 2xl:text-sm lg:text-[10px] leading-[22px] text-black_5F666F dark:text-gray_E5E5E5">
                {card.title}
              </span>
            </div>
            <div className="flex items-center justify-center gap-1 ml-auto self-start">
              <IconTrending />
              <span className="text-purple_796EFF font-medium text-sm leading-[21px]">
                {card.trending}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardPatients;
