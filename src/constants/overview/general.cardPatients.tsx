import { TCardPatients } from "@/types/general.overview";
import avatarBlue from "/public/icons/overview/icon-avatarBlue.svg";
import avatarOrange from "/public/icons/overview/icon-avatarOrange.svg";

export const cardPatients: TCardPatients[] = [
  {
    key: 1,
    icon: avatarBlue,
    amount: "24.4k",
    title: "New Patient",
    bgColor: "bg-blue_23A9F9",
    trending: "15%",
  },
  {
    key: 2,
    icon: avatarOrange,
    amount: "166.3k",
    title: "Old Pateint",
    bgColor: "bg-orange_FFA900",
    trending: "15%",
  },
];
