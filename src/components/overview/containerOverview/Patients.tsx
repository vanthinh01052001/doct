import Link from "next/link";
import React from "react";
import IconArrowDown from "../../icons/overview/IconArrowDown";
import CardPatients from "./components/CardPatients";

const Patients = () => {
  return (
    <>
      <div className="bg-transparent flex flex-col items-center justify-center gap-[10px]">
        <div className="flex items-center justify-between w-full">
          <h4 className="font-semibold text-[18px] leading-7 text-black_1B2432 dark:text-white">
            Patients
          </h4>
          <Link
            href={"#"}
            className="flex items-center gap-[10px] py-[7px] px-3 bg-white dark:bg-black_282A36 rounded-[10px]"
          >
            <p className="text-black_8D9198 font-normal text-[14px] leading-[22px] cursor-pointer">
              2020
            </p>
            <span className="dark:text-black_8D9198">
              <IconArrowDown />
            </span>
          </Link>
        </div>
        <CardPatients />
      </div>
    </>
  );
};

export default Patients;
