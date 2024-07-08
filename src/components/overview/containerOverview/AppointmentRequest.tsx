import Link from "next/link";
import React from "react";
import IconArrow from "../../icons/overview/IconArrow";
import { cardAppointment } from "@/constants/overview/general.cardAppointment";
import CardAppointment from "./components/CardAppointment";

const AppointmentRequest = () => {
  return (
    <>
      <div className="bg-transparent flex items-center justify-between">
        <h4 className="font-semibold text-[18px] leading-7 text-black_1B2432 dark:text-white">
          Appointment Request
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
      <div className="py-3 rounded-[10px] bg-white dark:bg-black_282A36">
        {cardAppointment.map((card) => (
          <CardAppointment card={card} key={card.key} />
        ))}
      </div>
    </>
  );
};

export default AppointmentRequest;
