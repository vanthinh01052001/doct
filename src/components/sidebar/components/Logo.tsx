import Link from "next/link";
import IconLogo from "../../icons/sidebar/IconLogo";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1">
      <IconLogo />
      <h1 className="text-black_242731 dark:text-white font-extrabold text-[15px]">
        Doct.
      </h1>
    </Link>
  );
}
