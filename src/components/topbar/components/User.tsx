"use client";
import Image from "next/image";
import { IconDropdown, IconHelp, IconNoti } from "../../icons";
import { useState } from "react";
import Notify from "../../topbar/components/Notify";

export default function User({ avatarURL }: { avatarURL: string }) {
  const [isOpenNoti, setIsOpenNoti] = useState(false);
  const handleIConNoti = () => {
    setIsOpenNoti(!isOpenNoti);
  };
  return (
    <div className="flex items-center gap-[7px] lg:gap-[20px] flex-shrink-0 dark:border-black_8D9198">
      <span className="flex-shrink-0">
        <IconHelp />
      </span>
      <span className="flex-shrink-0" onClick={handleIConNoti}>
        <IconNoti />
      </span>
      {isOpenNoti && (
        <>
          <Notify />
        </>
      )}
      <div className="flex items-center flex-shrink-0 gap-[20px]">
        <Image
          src={avatarURL}
          alt="avatar"
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
        <div className="lg:flex flex-col hidden">
          <h4 className="font-semibold dark:text-white">Stephen Conley</h4>
          <span className="text-black_5F666F dark:text-gray_B3B3B3">Cardiologist</span>
        </div>
      </div>
      <span className="flex-shrink-0 dark:text-gray_B3B3B3">
        <IconDropdown />
      </span>
    </div>
  );
}
