import IconAppointment from "@/components/icons/overview/IconAppointment";
import IconClinic from "@/components/icons/overview/IconClinic";
import IconPatient from "@/components/icons/overview/IconPatient";
import IconVideo from "@/components/icons/overview/IconVideo";
import { TCardOverview } from "@/types/general.overview";
import React from "react";

export const cardOverview: TCardOverview[] = [
  {
    key: 1,
    amount: "24.4k",
    title: "Appointments",
    icon: <IconAppointment />,
    bgColor: "bg-purple_796EFF",
  },
  {
    key: 2,
    amount: "166.3k",
    title: "Total Patient",
    icon: <IconPatient />,
    bgColor: "bg-red_FF5263",
  },
  {
    key: 3,
    amount: "53.5k",
    title: "Clinic Consulting",
    icon: <IconClinic />,
    bgColor: "bg-orange_FFA900",
  },
  {
    key: 4,
    amount: "28.0k",
    title: "Video Consulting",
    icon: <IconVideo />,
    bgColor: "bg-blue_23A9F9",
  },
];
