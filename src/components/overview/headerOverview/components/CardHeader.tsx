import { cardOverview } from "@/constants/overview/general.cardHeader";
export default function CardHeader({}) {
  return (
    <>
      {cardOverview.map((card) => (
        <div
          key={card.key}
          className={`p-[30px] rounded-[10px] flex gap-[20px] ${card.bgColor}`}
        >
          <div className="rounded-full w-[58px] h-[58px] p-[15px] bg-white_018 flex items-center justify-center">
            <p className="text-white">{card.icon}</p>
          </div>
          <div className="flex justify-center flex-col">
            <h1 className="font-bold text-[24px] leading-9 text-white">
              {card.amount}
            </h1>
            <span className="font-semibold text-[14px] leading-[22px] text-gray_E5E5E5">
              {card.title}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}
