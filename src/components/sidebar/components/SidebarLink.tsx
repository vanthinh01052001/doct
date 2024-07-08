import { TSidebarLink } from "@/types/general.overview";
import Link from "next/link";

interface TSidebarLinkProps {
  link: TSidebarLink;
  isActive: boolean;
}
export default function SidebarLink({ link, isActive }: TSidebarLinkProps) {
  return (
    <Link
      href={link.path}
      key={link.key}
      className={`px-[17px] py-[13px] flex items-center gap-c10 font-semibold text-base text-black_5F666F rounded-[10px] ${
        isActive
          ? "bg-black_0C0B1A dark:bg-white text-white dark:text-black_282A36"
          : "hover:text-black"
      }`}
    >
      <span>{link.icon}</span>
      <span>{link.title}</span>
    </Link>
  );
}
