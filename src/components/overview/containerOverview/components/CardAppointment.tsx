import { TCardAppointment } from "@/types/general.overview";
import Image from "next/image";
interface TCardAppointmentProps {
  card: TCardAppointment;
}
export default function CardAppointment({ card }: TCardAppointmentProps) {
  return (
    <>
      <div className="py-[10px] px-[20px] flex items-center justify-between flex-col md:flex-row gap-[10px] md:gap-[97px]">
        <div className="flex items-center gap-[20px]">
          <Image
            src={card.img}
            alt="avatar"
            width={54}
            height={54}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col gap-1">
            <p className="text-base text-black_49505B dark:text-white font-medium">
              {card.title}
            </p>
            <p className="text-sm font-normal text-black_5F666F dark:text-gray_CCCCCC">
              {card.time}
            </p>
          </div>
        </div>
        <button
          className={`py-[6px] px-[14px] rounded-[5px] bg-${card.bgColor} text-${card.textColorBtn} font-medium text-xs outline-none w-full h-full mb-4 md:mb-0 md:h-[30px] md:w-[82px]`}
        >
          {card.textBtn}
        </button>
      </div>
    </>
  );
}
