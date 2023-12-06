import React from "react";
import Link from "next/link";


type Props = {
  cultivation: string;
  isActive: boolean;
};
const NavLink = ({ cultivation, isActive }: Props) => {
  return (
    <Link
      className={`navlink ${
        isActive &&
        "underline decoration-orange-400 underline-offset-4 font-bold"
      }`}
      href={`/?term=${cultivation}`} 
    >
      {" "}
      {cultivation}
    </Link>
  );
};

export default NavLink;
