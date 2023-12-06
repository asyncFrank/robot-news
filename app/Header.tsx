import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";

const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-6 w-6 text-blue-500" />
        <Link href={"/"} prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            <span className="underline decoration-6 decoration-orange-400">
              News
            </span>{" "}
            Home Page
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          {/* dark mode */}
         <DarkModeButton/>
        </div>
      </div>
      {/* navigation links */}
      <NavLinks />
      
      {/* <SearchBox/>   */}
    </header> 
  );
};

export default Header;
