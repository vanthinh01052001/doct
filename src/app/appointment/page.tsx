import IconArrowLeft from "@/components/icons/appointment/IconArrowLeft";
import IconArrowRight from "@/components/icons/appointment/IconArrowRight";
import IconDay from "@/components/icons/appointment/IconDay";
import IconList from "@/components/icons/appointment/IconList";
import IconWeek from "@/components/icons/appointment/IconWeek";
import React from "react";

const AppointmentPage = () => {
  return (
    <div className="flex flex-col gap-[23px]">
      <div className="flex justify-between w-full">
        <p className="font-bold text-[22px] leading-10 text-black_1B2432">
          Appointments
        </p>
        <div className="flex gap-[20px]">
          <button className="px-[13px] py-6 rounded-[5px] bg-purple_796EFF w-[176px] font-semibold text-sm leading-[22px] text-white_fff">
            Clinic Consulting
          </button>
          <button className="px-[13px] py-6 rounded-[5px] bg-gray_F9F9F9 w-[176px] font-semibold text-sm leading-[22px] text-black_000 border-[1px] border-purple_796EFF border-solid">
            Video Consulting
          </button>
        </div>
      </div>
      <div className="text-sm leading-[16.94px] flex gap-1 text-black_323A46">
        <span className="font-semibold">Showing: </span>
        <p className="font-medium">
          All Consultations of All Healthcare Providers at Medisylhet
        </p>
      </div>
      <div className="flex gap-[10px]">
        <div className="px-[10px] py-[15px] rounded-[5px] text-white_fff bg-purple_796EFF w-[100px] cursor-pointer">
          <div className="flex gap-[5px] items-center justify-center">
            <IconList />
            <p className="font-semibold text-sm">List</p>
          </div>
        </div>
        <div className="px-[10px] py-[15px] rounded-[5px] text-black_5F666F bg-purple_F2F1FF w-[100px] cursor-pointer">
          <div className="flex gap-[5px] items-center justify-center">
            <IconWeek />
            <p className="font-normal text-sm">Week</p>
          </div>
        </div>
        <div className="px-[10px] py-[15px] rounded-[5px] text-black_5F666F bg-purple_F2F1FF w-[100px] cursor-pointer">
          <div className="flex gap-[5px] items-center justify-center">
            <IconDay />
            <p className="font-normal text-sm">Day</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center justify-center">
          <p className="font-medium text-base text-black_1B2432">
            Feb 19, 2021
          </p>
          <span className="px-[2px] py-[2px] bg-purple_F2F1FF flex items-center justify-center text-black_5F666F cursor-pointer">
            <IconArrowLeft />
          </span>
          <span className="px-[2px] py-[2px] bg-purple_F2F1FF flex items-center justify-center text-black_5F666F cursor-pointer">
            <IconArrowRight />
          </span>
        </div>
        <div className="px-[11px] py-[18px] border-[1px] border-gray_F1F1F1">
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
