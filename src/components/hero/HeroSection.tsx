import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="Home" className="relative sm:-mt-10 mb-[80px]">
      <div className="container">
        <div className="hero_wrapper flex flex-col items-center pt-[60px] lg:flex-row lg:pt-[3vh]  gap-20">
          <div className="hero_left md:w-[700px] lg:w-[650px] sm:text-center lg:text-left">
            <h1 className="">Building Digital Product, Brand and Experience</h1>
            <p className="pt-[1rem] pb-[2rem] w-full sm:max-w-[45ch] sm:mx-auto lg:mx-0">
              At Pixology we specialize in designing, shipping and scaling
              beautiful, usable products with blazing- fast efficiency
            </p>
            <div className="">
              <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mb-6 sm:justify-center lg:justify-start">
                <button className="bg-primaryColor px-6 py-3 text-white rounded-sm">
                  How it Works
                </button>
                <button className="bg-white shadow-md px-6 py-3 flex flex-row justify-center items-center gap-3">
                  <span>
                    <Image
                      src="/play_arrow_24px.svg"
                      alt=""
                      width={32}
                      height={32}
                    />
                  </span>
                  Behind the scenes
                </button>
              </div>
              <div className="flex gap-5 justify-center lg:justify-start">
                <span className="flex flex-row justify-center items-center gap-1">
                  <Image
                    src="/ic_round-facebook.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                  <span className="text-xs sm:text-[1rem]">FACEBOOK</span>
                </span>
                <span className="flex flex-row justify-center items-center gap-1">
                  <Image
                    src="/ri_youtube-line.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                  <span className="text-xs sm:text-[1rem]">YOUTUBE</span>
                </span>
                <span className="flex flex-row justify-center items-center gap-1">
                  <Image src="/mdi_twitter.svg" alt="" width={32} height={32} />
                  <span className="text-xs sm:text-[1rem]">TWITTER</span>
                </span>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px]">
            <Image src="/hero-banner.png" alt="" className="" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
