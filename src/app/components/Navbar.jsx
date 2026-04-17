"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiHomeAlt2 } from "react-icons/bi";
import { GoClock } from "react-icons/go";
import { MdQueryStats } from "react-icons/md";

const Navbar = () => {
    const path = usePathname();
  const links = (
    <>
      <li>
        <Link href="/" className={path === "/" ? "bg-[#244D3F] text-white" : ""}>
          {" "}
          <BiHomeAlt2 />
          Home
        </Link>
      </li>
      <li>
        <Link href="/timeline" className={path === "/timeline" ? "bg-[#244D3F] text-white" : ""}>
          {" "}
          <GoClock />
          Timeline
        </Link>
      </li>
      <li>
        <Link href="/stats" className={path === "/stats" ? "bg-[#244D3F] text-white" : ""}>
          <MdQueryStats />
          Stats
        </Link>
      </li>
    </>
  );

  

  return (
    <div className="shadow-sm bg-white">
      <div className="navbar w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-black lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <p className="text-xl font-semibold text-black">
            Kin<span className="text-[#244D3F]">Keeper</span>
          </p>
        </div>
        <div className="navbar-end hidden text-black lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
