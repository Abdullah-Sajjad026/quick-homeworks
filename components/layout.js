import React from "react";
import Link from "next/link";

const Layout = ({children}) => {
  return (
    <>
      <header>
        <div className="container mx-auto py-4 bg-white flex flex-col xs:flex-row content-between items-center ">
          <span className="text-2xl text-blue-800 font-bold">
            Quick Homeworks
          </span>
          {/* <nav className="navbar xs:ml-auto">
            <ul className="nav-list list-none flex gap-x-4">
              <li className="nav-item">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a>Home</a>
                </Link>
              </li>
            </ul>
          </nav> */}
        </div>
      </header>
      <main className="main">{children}</main>
      <footer className="bg-gray-200">
        <div className="container py-4 ">
          Copyright © {new Date().getFullYear()} | Quick Homeworks
        </div>
      </footer>
    </>
  );
};

export default Layout;
