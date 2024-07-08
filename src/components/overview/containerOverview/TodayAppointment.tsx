"use client";
import { cardTodayAppointment } from "@/constants/overview/general.cardTodayAppointment";
import React, { useState } from "react";
import WeekPicker from "@/components/overview/containerOverview/components/WeekPicker";
import CardTodayAppointment from "./components/CardTodayAppointment";

const TodayAppointment = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleCardClick = (key: any) => {
    setActiveCard((prev) => (prev === key ? null : key));
  };

  return (
    <>
      <div className="bg-transparent">
        <h4 className="font-semibold text-[18px] leading-7 text-black_1B2432 dark:text-white">
          Today Appointments
        </h4>
      </div>
      <div
        className={`
        pt-[13px] gap-[5px] rounded-[10px] flex flex-col bg-white dark:bg-black_282A36
        `}
      >
        {cardTodayAppointment.map((card) => (
          <CardTodayAppointment
            key={card.key}
            card={card}
            isActive={activeCard === card.key}
            onClick={() => handleCardClick(card.key)}
          />
        ))}
        <div className="py-[10px] px-[20px] bg-transparent border-t border-gray_E5E5E5 dark:border-black_323A46 border-solid">
          <WeekPicker selectedDate={selectedDate} onChange={handleDateChange} />
        </div>
        <div className="rounded-[10px] bg-black_242731 dark:bg-purple_554DB3">
          <div className="py-[20px] px-[40px] flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold text-lg text-white">Next Week</h4>
              <span className="font-normal text-sm text-gray_E5E5E5">
                Upcoming Schdules-2
              </span>
            </div>
            <button className="font-semibold text-sm text-white dark:text-black_242731 bg-purple_796EFF dark:bg-white py-[6px] px-[15px] rounded-[5px]">
              Open
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayAppointment;
