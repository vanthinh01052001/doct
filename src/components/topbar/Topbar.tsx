import React from "react";
import avatar from "../../../public/avatar.svg";
import Search from "./components/Search";
import User from "./components/User";
import IconMenu from "../icons/topbar/IconMenu";

const Topbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <div className="bg-gray_F9F9F9 dark:bg-black_242731 px-[21px] lg:px-[30px] py-[20px] gap-[31px] lg:gap-0 lg:py-[15px] flex items-center justify-between lg:justify-between w-full">
      <span className="block lg:hidden cursor-pointer" onClick={toggleSidebar}><IconMenu /></span>
      <div className="flex items-center justify-center">
        <Search />
      </div>
      <User avatarURL={avatar}  />
    </div>
  );
};

export default Topbar;
    