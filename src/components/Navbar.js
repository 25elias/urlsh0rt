import { useState } from "react";
import logo from "../images/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header max-width py-5">
        <div className="py-2 flex items-center justify-between">
          <article className="flex items-center">
            <img src={logo} alt="" />

            <nav className="hidden md:block md:ml-5">
              <ul className="flex items-start justify-start">
                <li>
                  <button className="text-slate-400">Features</button>
                </li>
                <li className="my-5 md:my-0 md:mx-5">
                  <button className="text-slate-400">Pricing</button>
                </li>
                <li>
                  <button className="text-slate-400">Resources</button>
                </li>
              </ul>
            </nav>
          </article>
          {isOpen && (
            <div className="absolute left-5 right-5 top-20 rounded bg-slate-900 text-slate-200 text-center py-7 md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-slate-700 md:text-left md:py-0 md:flex md:items-center">
              <nav className="md:hidden">
                <ul className="md:flex md:items-start md:justify-start">
                  <li>
                    <button className="md:text-slate-400">Features</button>
                  </li>
                  <li className="my-5 md:my-0 md:mx-5">
                    <button className="md:text-slate-400">Pricing</button>
                  </li>
                  <li>
                    <button className="md:text-slate-400">Resources</button>
                  </li>
                </ul>
              </nav>
              <ul className="md:flex md:items-center md:ml-5">
                <li className="my-5 md:my-0 md:mr-5 md:text-slate-400  ">
                  <button>Login</button>
                </li>
                <li>
                  <button className="btn-cta rounded-full">Sign Up</button>
                </li>
              </ul>
            </div>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="uppercase text-sm tracking-wide md:hidden"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>
    </>
  );
}
