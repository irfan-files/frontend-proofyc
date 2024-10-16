import React from "react";
import "./MainContent.css";

const handleLogin = () => {
  // Redirect user to the backend to initiate Google OAuth2 flow
  window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth`;
};
const MainContent = () => {
  return (
    <section class="flex overflow-hidden flex-col justify-center items-center px-20 py-52 bg-slate-200 max-md:px-5 max-md:py-24 gradient-bg-animate min-h-fit">
      <div class="flex flex-col items-center max-w-full w-[828px]">
        <h1 class="flex flex-wrap gap-3 items-center text-7xl font-medium tracking-tighter leading-snug text-center text-black max-md:flex-nowrap max-md:justify-center max-md:text-4xl">
          <span>Bring your</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4d42fd9c44ab0180932971da963a6e6d144e61b89e13806bb74d81a59b57564?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
            class="object-contain shrink-0 aspect-square w-[125px] max-md:w-[80px]"
            alt="Decorative icon"
          />
        </h1>

        <h2 class="flex flex-wrap gap-3 justify-center items-center text-7xl font-medium tracking-tighter leading-snug text-center text-black whitespace-nowrap max-md:max-w-full max-md:text-4xl">
          <span class="self-stretch my-auto max-md:text-4xl">to</span>
          <span class="gap-2.5 self-stretch px-3 py-0 my-auto text-black bg-lime-400 rounded-3xl min-w-[240px] max-md:text-4xl">
            onchain
          </span>
          <span class="self-stretch my-auto max-md:text-4xl">economy</span>
        </h2>
        <div class="flex flex-col items-center self-stretch mt-8 w-full max-md:max-w-full">
          <h3 class="self-stretch text-4xl text-center uppercase text-zinc-800 max-md:max-w-full">
            Build With
          </h3>
          <div className="flex flex-wrap gap-6 items-center px-6 py-5 mt-5 bg-blue-600 rounded-3xl max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1e1f448d6fa72d2b71784b91b3c858a7b1125bd967973f3ea83e9d0abb79e48?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
              className="object-contain shrink-0 self-stretch my-auto aspect-[3.76] w-[188px] transform transition-transform duration-500 hover:scale-110 hover:rotate-3"
              alt="Partner logo 2"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/317c8a1448bfcc0b6e924339c9f52c8268c6459c5b15afdcf963c33c900e60a1?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
              className="object-contain self-stretch my-auto aspect-[3.98] min-w-[240px] w-[259px] transform transition-transform duration-500 hover:scale-110 hover:rotate-3"
              alt="Partner logo 1"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9019c425f0374f0d988cf0f697b7d0ab97d685118c513b5c91ea3208c39e2cd7?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
              className="object-contain self-stretch my-auto aspect-[4.72] min-w-[240px] w-[283px] transform transition-transform duration-500 hover:scale-110 hover:rotate-3"
              alt="Partner logo 3"
            />
          </div>

          <a
            onClick={handleLogin}
            class="flex gap-1 justify-center items-start px-8 py-4 mt-5 text-lg font-bold tracking-normal leading-tight whitespace-nowrap rounded-lg bg-neutral-100 text-neutral-800 max-md:px-5"
            role="button"
          >
            Explore
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e5e9c5c0620248e555b8eddbcb9ba6639a5c9e465c2a04d1da4a12eeb2f3ea0?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
              class="object-contain shrink-0 w-6 aspect-square"
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
