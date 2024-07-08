"use client";
import React from "react";
import { sidebarLinks } from "@/constants/sidebar/general.sidebarLinks";
import { usePathname } from "next/navigation";
import SidebarLink from "./components/SidebarLink";
import Logo from "./components/Logo";
import ThemeToggle from "./components/ThemeToggle";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-white dark:bg-black_282A36 px-[14px] py-[26px] min-h-screen">
      <div className="flex items-center justify-between mb-[45px]">
        <Logo />
        <ThemeToggle />
      </div>
      {sidebarLinks.map((link) => (
        <SidebarLink
          isActive={pathname === link.path}
          key={link.key}
          link={link}
        />
      ))}
    </div>
  );
};

export default Sidebar;
