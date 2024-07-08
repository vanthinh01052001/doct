'use client'
import React from "react";
import AppointmentRequest from "./AppointmentRequest";
import Patients from "./Patients";
import Gender from "./Gender";
import TodayAppointment from "./TodayAppointment";

const ContainerOverview = () => {
  return (
    <div className="grid grid-rows-1 2xl:grid-cols-12 gap-[40px] bg-transparent">
      <div className="2xl:col-span-5 flex flex-col gap-4">
        <AppointmentRequest />
      </div>
      <div className={`2xl:col-span-3 flex flex-col gap-[29px]`}>
        <Patients />
        <Gender />
      </div>
      <div className="2xl:col-span-4 flex flex-col gap-[18px]">
        <TodayAppointment />
      </div>
    </div>
  );
};

export default ContainerOverview;
