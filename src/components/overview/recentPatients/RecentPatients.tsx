import Link from "next/link";
import React from "react";
import IconArrow from "../../icons/overview/IconArrow";
import Image from "next/image";
import { cardRecentPatients } from "@/constants/overview/general.cardRecentPatients";

const RecentPatients = () => {
  return (
    <div className="flex flex-col gap-[10px] min-h-[420px]">
      <div className="bg-transparent flex items-center justify-between">
        <h4 className="font-semibold text-[18px] leading-7 text-black_1B2432 dark:text-white">
          Recent Patients
        </h4>
        <Link href={"#"} className="flex items-center gap-1">
          <p className="text-blue_4FBAFA font-medium text-[14px] leading-3 cursor-pointer">
            View All
          </p>
          <span>
            <IconArrow />
          </span>
        </Link>
      </div>
      <div className="flex felx-col relative">
        <div className="absolute top-0 w-full overflow-x-auto flex flex-col gap-[10px]">
          <div className="py-4 px-6 bg-gray_ECEFF1 dark:bg-black_1B2432 rounded-lg min-w-[1130px]">
            <ul className="flex items-center justify-between font-medium text-base text-black_49505B dark:text-white">
              <li className="w-1/6">Patient Name</li>
              <li className="w-1/6 text-center">Visit Id</li>
              <li className="w-1/6">Date</li>
              <li className="w-1/6">Gender</li>
              <li className="w-1/6">Diseases</li>
              <li className="w-1/6">Status</li>
              <li className="w-1/12"></li>
            </ul>
          </div>
          {cardRecentPatients.map((card) => (
            <div
              key={card.key}
              className="py-4 px-6 bg-white dark:bg-black_282A36 rounded-lg min-w-[1130px]"
            >
              <ul className="flex items-center justify-between font-normal text-base text-black_5F666F dark:text-gray_E5E5E5">
                <li className="w-1/6">
                  <div className="flex items-center gap-3">
                    <Image src={card.img} alt="avatar" height={36} width={36} />
                    <p>{card.title}</p>
                  </div>
                </li>
                <li className=" w-1/6 text-center">{card.visitId}</li>
                <li className="w-1/6">{card.date}</li>
                <li className="w-1/6">{card.gender}</li>
                <li className="w-1/6">{card.diseases}</li>
                <li className="w-1/6">{card.status}</li>
                <li className="w-1/12">{card.actionIcon}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPatients;
