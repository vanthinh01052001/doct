import { IconSearch } from "../../icons";
export default function Search({}) {
  return (
    <div className="lg:px-[10px] lg:py-2 bg-transparent flex items-center gap-[6px] lg:gap-[7px] flex-[1_0_144px] lg:flex-[1_0_279px] lg:h-[38px]">
      <IconSearch />
      <input
        type="text"
        placeholder="Search Appointment, Patient or etc"
        className="bg-transparent text-xs lg:text-sm font-normal outline-none w-full text-black_242731 dark:text-white placeholder:text-gray_A4A7AD dark:placeholder:text-gray_FAFBFC"
      />
    </div>
  );
}
