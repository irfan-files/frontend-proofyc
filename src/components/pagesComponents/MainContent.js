import React from "react";
import "./MainContent.css";

const handleLogin = () => {
  // Redirect user to the backend to initiate Google OAuth2 flow
  window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth`;
};
const MainContent = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-64 text-7xl max-md:px-5 max-md:py-24 max-md:text-4xl gradient-bg-animate">
      <div className="flex flex-col items-center w-full max-w-[1051px] max-md:max-w-full max-md:text-4xl">
        <h1 className="flex flex-wrap gap-3 items-start font-medium tracking-tighter leading-snug text-center text-black max-md:max-w-full max-md:text-4xl">
          <span>Bring your</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cac4af95591bf97737f0dd6cb037b8e936c2eafa48a6de1196b09d26278da36?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
            alt=""
            className="object-contain shrink-0 aspect-square w-[125px]"
          />
        </h1>
        <div className="flex flex-wrap gap-3 justify-center items-center font-medium tracking-tighter leading-snug text-center text-black whitespace-nowrap max-md:max-w-full max-md:text-4xl">
          <span className="self-stretch my-auto max-md:text-4xl">to</span>
          <span className="gap-2.5 self-stretch px-3 py-0 my-auto text-black bg-lime-400 rounded-3xl min-w-[240px] max-md:text-4xl">
            onchain
          </span>
          <span className="self-stretch my-auto max-md:text-4xl">economy</span>
        </div>
        <h2 className="mt-8 text-4xl uppercase text-zinc-800">Build With</h2>
        <div className="flex justify-center flex-wrap gap-6 items-center px-6 py-5 mt-3 text-4xl text-white whitespace-nowrap bg-blue-600 rounded-3xl max-md:px-1 ">
          <img
            loading="lazy"
            src="https://i.postimg.cc/9MH7phWL/Vector.png"
            alt="Partner logo"
            className="object-contain self-stretch my-auto aspect-[3.98] min-w-[240px] w-[240px] "
          />
          <img
            loading="lazy"
            src="https://i.postimg.cc/XJKy1zq4/rec2-1.png"
            alt="Partner logo"
            className="object-contain self-stretch my-auto aspect-[3.98] min-w-[240px] w-[259px] "
          />
          <div className="flex gap-1.5 self-stretch my-auto font-bold  ">
            <img
              loading="lazy"
              src="https://i.postimg.cc/0NwSDQq6/Group-1321314603.png"
              alt="YouTube logo"
              className="object-contain self-stretch my-auto aspect-[3.98] min-w-[240px] w-[259px] "
            />
          </div>
        </div>
        <button onClick={handleLogin}>
          <a className="flex gap-1 justify-center items-start px-8 py-4 mt-8 ml-5 text-lg font-bold tracking-normal leading-tight whitespace-nowrap bg-lime-400 rounded-lg text-neutral-800 max-md:px-5">
            Explore
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e5e9c5c0620248e555b8eddbcb9ba6639a5c9e465c2a04d1da4a12eeb2f3ea0?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
              alt=""
              className="object-contain shrink-0 w-6 aspect-square"
            />
          </a>
        </button>
      </div>
    </section>
  );
};

export default MainContent;
