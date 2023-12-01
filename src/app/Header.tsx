import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";

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
          {/* <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-2 dark:bg-slate-800">
            subscribenow
          </button> */}
        </div>
      </div>
      {/* navigation links */}
      <NavLinks />
      {/* serach box */}
      {/* <SearchBox/>   */}
    </header>
  );
};

export default Header;
