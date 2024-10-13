import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="flex flex-col gap-16 items-center px-0 py-12 bg-gray-900">
      <div class="flex flex-wrap justify-between items-center px-8 max-w-full w-[1280px] max-md:px-5">
        <div class="flex flex-col items-start self-stretch my-auto w-40">
          <Link to="/">
            <img
              src="https://i.postimg.cc/3R2bSY2N/logo-creatorhub.png"
              alt="Creator Beam"
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <nav class="flex flex-wrap flex-1 shrink gap-8 justify-center items-center self-stretch my-auto basis-0 min-h-[80px] min-w-[240px] max-md:max-w-full">
          <a
            href="#"
            class="flex gap-2 items-center self-stretch my-auto text-base font-semibold text-gray-200 whitespace-nowrap"
          >
            Home
          </a>
          <a
            href="#"
            class="flex gap-2 items-center self-stretch my-auto text-base font-semibold text-gray-200 whitespace-nowrap"
          >
            Agency
          </a>
          <a
            href="#"
            class="flex gap-2 items-center self-stretch my-auto text-base font-semibold text-gray-200 whitespace-nowrap"
          >
            Creator
          </a>
          <a
            href="#"
            class="flex gap-2 items-center self-stretch my-auto text-base font-semibold text-gray-200 whitespace-nowrap"
          >
            Company
          </a>
          <a
            href="#"
            class="flex gap-2 items-center self-stretch my-auto text-base font-semibold text-gray-200 whitespace-nowrap"
          >
            Support
          </a>
        </nav>
        <div class="flex flex-col self-stretch my-auto min-w-[240px] w-[360px]">
          <h2 class="text-sm font-medium leading-none text-white">
            Stay up to date
          </h2>
          <form class="flex gap-4 items-start mt-4 w-full text-base">
            <div class="flex flex-col flex-1 shrink text-gray-500 basis-9">
              <label for="emailInput" class="sr-only">
                Enter your email
              </label>
              <input
                type="email"
                id="emailInput"
                placeholder="Enter your email"
                aria-label="Enter your email"
                class="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 w-full bg-white rounded-lg border-gray-300 shadow-sm"
              />
            </div>
            <button
              type="submit"
              class="overflow-hidden gap-2 self-stretch px-5 py-2.5 font-semibold text-white whitespace-nowrap rounded-lg border border-violet-500 border-solid shadow-sm bg-blue-950"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div class="flex flex-col px-8 mt-16 max-w-full text-base w-[1280px] max-md:px-5 max-md:mt-10">
        <div class="flex flex-wrap gap-8 pt-8 w-full border-t border-t-slate-600 max-md:max-w-full">
          <p class="flex-1 shrink my-auto text-gray-300 basis-0 max-md:max-w-full">
            © 2024 Creator Beam
          </p>
          <nav class="flex gap-4 items-start h-full text-gray-500 whitespace-nowrap">
            <a href="#">
              <Link to="/terms-of-service">Terms of Service</Link>
            </a>
            <a href="#">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </a>
            <a href="#">Cookies</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
