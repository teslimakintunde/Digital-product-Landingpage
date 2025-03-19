import React from "react";
import Image from "next/image";

const ChooseSection = () => {
  return (
    <section id="features">
      <div className="container overflow-hidden">
        <div className="flex flex-col-reverse md:items-center lg:flex-row gap-[60px] sm:gap-10">
          <div className="flex-1 ">
            <Image src="/feature-banner.png" width={500} height={500} alt="" />
          </div>

          <div className="lg:max-w-[680px] md:w-full">
            <div className="flex flex-row md:justify-center lg:justify-normal items-center gap-3 mb-3">
              <span className="h-5 w-5 rounded-full bg-[#FFDE56]"></span>
              <span className="sm:text-[1.125rem] text-[1rem] font-medium">
                Why Choose Us
              </span>
            </div>
            <h3 className="h2_style md:max-w-[30ch] max-w-[30ch] lg:max-w-none leading-tight md:text-center lg:text-left">
              Specialist in aviding clients of financial challenges
            </h3>
            <div className="max-w-[448px] mt-[30px] md:max-w-[448px] md:mx-auto lg:max-w-none md:justify-center md:mt-[60px] flex flex-col gap-6">
              <div className="flex flex-row gap-4">
                <span className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full bg-primaryColor2 flex items-center justify-center shrink-0">
                  <Image
                    src="/fa6-solid_jet-fighter.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                </span>
                <div>
                  <h3 className="font-medium">Fast Working Process</h3>
                  <p>
                    At Pixology we specialize in designing, building shipping
                    and scaling beautiful
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <span className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full bg-primaryColor2 flex items-center justify-center shrink-0">
                  <Image
                    src="/fa6-solid_jet-fighter.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                </span>
                <div>
                  <h3 className="font-medium">Fast Working Process</h3>
                  <p>
                    At Pixology we specialize in designing, building shipping
                    and scaling beautiful
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <span className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full bg-primaryColor2 flex items-center justify-center shrink-0">
                  <Image
                    src="/fa6-solid_jet-fighter.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                </span>
                <div>
                  <h3 className="font-medium">Fast Working Process</h3>
                  <p>
                    At Pixology we specialize in designing, building shipping
                    and scaling beautiful
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;
