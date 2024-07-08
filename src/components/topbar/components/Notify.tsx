import { cardNotify } from "@/constants/topbar/general.cardNotify";
import React from "react";
import Image from "next/image";

const Notify = () => {
  return (
    <div className="flex flex-col gap-[20px] absolute top-[70px] lg:top-[58px] right-0 lg:right-[236px] bg-white dark:bg-black_242731 shadow-noti min-w-full lg:min-w-[525px] px-10 py-[30px] rounded-[7px] z-50">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-lg text-black_323A46 dark:text-white">
          Notifications
        </h4>
        <span className="font-normal text-base text-blue_23A9F9">
          Mark all as read
        </span>
      </div>
      <div className="border-[0.5px] bg-gray_CCCCCC dark:bg-black_323A46 border-solid"></div>
      <div className="flex flex-col gap-[20px]">
        {cardNotify.map((card) => (
          <div
            key={card.key}
            className="flex items-center justify-between gap-1"
          >
            <div className="flex gap-5">
              <Image src={card.img} alt="avatar" width={40} height={40} />
              <div className="flex flex-col gap-1">
                <span className="text-base font-medium text-black_49505B dark:text-white">
                  {card.title}
                </span>
                <p className="text-sm font-normal text-black_5F666F dark:text-gray_CCCCCC">
                  {card.subTitle}
                </p>
              </div>
            </div>
            <span className="text-sm font-normal text-black_5F666F dark:text-black_8D9198">
              {card.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notify;
