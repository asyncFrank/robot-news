"use client";
import { usePathname } from "next/navigation";
import { cultivations } from "../constants";
import NavLink from "./NavLink";
const NavLinks = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };
  
  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm pb-10 max-w-6xl mx-auto border-b">
      {cultivations.map((cultivation) => (
        <NavLink
          key={cultivation}
          cultivation={cultivation}
          isActive={isActive(cultivation)}

        ></NavLink>
      ))}
    </nav>
  );
};

export default NavLinks;
