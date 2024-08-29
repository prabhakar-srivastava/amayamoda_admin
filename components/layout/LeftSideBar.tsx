"use client"

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/constants";

const LeftSideBar = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen left-0 top-0 sticky p-10 flex flex-col gap-16 bg-gray-700 shadow-xl max-lg:hidden">
      {/* <Image src="/logo.png" alt="logo" width={150} height={70} /> */}
      <h1 className="text-heading2-bold text-blue-1 font-mono underline underline-offset-2">Amayamoda</h1>

      <div className="flex flex-col gap-12">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 items-center text-body-medium text-center px-3 py-1.5 ${
              pathname === link.url ? "text-white-1 bg-blue-800  rounded-md transition-all duration-300" : "text-gray-400"
            }`}
          >
            {link.icon} <p>{link.label}</p>
          </Link>
        ))}
      </div>

      <div className="flex gap-4 text-body-medium items-center">
        <UserButton />
        <p>Edit Profile</p>
      </div>
    </div>
  );
};

export default LeftSideBar;
