import { TCardTodayAppointment } from "@/types/general.overview";
import Image from "next/image";
interface TCardTodayAppointmentProps {
  card: TCardTodayAppointment;
  isActive: boolean;
  onClick: (key: number) => void;
}
export default function CardTodayAppointment({
  card,
  isActive,
  onClick,
}: TCardTodayAppointmentProps) {
  return (
    <div
      key={card.key}
      className={`flex items-center justify-between py-[9px] px-[20px] rounded-[10px] gap-[114px] ${
        isActive ? "bg-gray_E9F6FE" : "bg-transparent"
      } w-full cursor-pointer`}
      onClick={() => onClick(card.key)}
    >
      <div className="flex items-center justify-center gap-[10px]">
        <Image src={card.img} alt="avtar" height={50} width={50} />
        <div className="flex flex-col gap-1">
          <p className="text-base text-black_49505B dark:text-white font-medium min-w-[140px]">
            {card.title}
          </p>
          <p className="text-sm font-normal text-black_5F666F dark:text-gray_E5E5E5 min-w-[115px]">
            {card.subTitle}
          </p>
        </div>
      </div>
      <span
        className={`text-xs font-medium leading-[18px] ${
          card.time === "Ongoing"
            ? "text-purple_796EFF"
            : "text-black_767C84 dark:text-gray_CCCCCC"
        }`}
      >
        {card.time}
      </span>
    </div>
  );
}
