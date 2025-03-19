import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="bg-[#F7F8FF] sm:-mt-0">
      <div className="container overflow-hidden">
        <div className="max-w-[784px] mx-auto text-center mb-[30px] sm:mb-[40px] lg:mb-[60px]">
          <div className="flex flex-row items-center gap-3 mb-2 justify-center">
            <span className="h-5 w-5 rounded-full bg-[#FFDE56]"></span>
            <span className="sm:text-[1.125rem] text-[1rem] font-medium">
              Our Services
            </span>
          </div>
          <h2 className="leading-tight">
            Managing you business with our best service
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5">
          {/* <!-- FIRST SERVICE --> */}
          <div className="sm:max-w-[299px] text-center sm:text-left bg-white rounded-md shadow-md py-[20px] pl-[20px] pr-[20px] lg:py-[40px] lg:pr-[10px] lg:pl-[20px]">
            <div className="flex flex-col items-center sm:items-start">
              <span className="w-[60px] h-[60px] rounded-sm bg-primaryColor bg-opacity-15 flex items-center justify-center">
                <img src="/service-icon-2.png" alt="" />
              </span>
              <h3 className="mt-[1rem]">Product Management</h3>
            </div>
          </div>
          {/* <!-- SECOND SERVICE --> */}
          <div className="sm:max-w-[299px] text-center sm:text-left bg-white rounded-md shadow-md py-[20px] pl-[20px] pr-[20px] lg:py-[40px] lg:pr-[10px] lg:pl-[20px]">
            <div className="flex flex-col items-center sm:items-start">
              <span className="w-[60px] h-[60px] rounded-sm bg-primaryColor bg-opacity-15 flex items-center justify-center">
                <img src="/service-icon-2.png" alt="" />
              </span>
              <h3 className="mt-[1rem]">Product Management</h3>
            </div>
          </div>
          {/* <!-- THIRD SERVICE --> */}
          <div className="sm:max-w-[299px] text-center sm:text-left bg-white rounded-md shadow-md py-[20px] pl-[20px] pr-[20px] lg:py-[40px] lg:pr-[10px] lg:pl-[20px]">
            <div className="flex flex-col items-center sm:items-start">
              <span className="w-[60px] h-[60px] rounded-sm bg-primaryColor bg-opacity-15 flex items-center justify-center">
                <img src="/service-icon-2.png" alt="" />
              </span>
              <h3 className="mt-[1rem]">Product Management</h3>
            </div>
          </div>
          {/* <!-- FOURTH SERVICE --> */}
          <div className="sm:max-w-[299px] text-center sm:text-left bg-white rounded-md shadow-md py-[20px] pl-[20px] pr-[20px] lg:py-[40px] lg:pr-[10px] lg:pl-[20px]">
            <div className="flex flex-col items-center sm:items-start">
              <span className="w-[60px] h-[60px] rounded-sm bg-primaryColor bg-opacity-15 flex items-center justify-center">
                <img src="/service-icon-2.png" alt="" />
              </span>
              <h3 className="mt-[1rem]">Product Management</h3>
            </div>
          </div>
          {/* <!-- FIVETH SERVICE --> */}
          <div className="sm:max-w-[299px] text-center sm:text-left bg-white rounded-md shadow-md py-[20px] pl-[20px] pr-[20px] lg:py-[40px] lg:pr-[10px] lg:pl-[20px]">
            <div className="flex flex-col items-center sm:items-start">
              <span className="w-[60px] h-[60px] rounded-sm bg-primaryColor bg-opacity-15 flex items-center justify-center">
                <img src="/service-icon-2.png" alt="" />
              </span>
              <h3 className="mt-[1rem]">Product Management</h3>
            </div>
          </div>
          {/* <!-- SIXTH SERVICE --> */}
          <div className="sm:max-w-[299px] text-center sm:text-left bg-white rounded-md shadow-md py-[20px] pl-[20px] pr-[20px] lg:py-[40px] lg:pr-[10px] lg:pl-[20px]">
            <div className="flex flex-col items-center sm:items-start">
              <span className="w-[60px] h-[60px] rounded-sm bg-primaryColor bg-opacity-15 flex items-center justify-center">
                <img src="/service-icon-2.png" alt="" />
              </span>
              <h3 className="mt-[1rem]">Product Management</h3>
            </div>
          </div>
          {/* <!-- SEVENTH SERVICE --> */}
          <div className="sm:max-w-[299px] text-center sm:text-left bg-white rounded-md shadow-md py-[20px] pl-[20px] pr-[20px] lg:py-[40px] lg:pr-[10px] lg:pl-[20px]">
            <div className="flex flex-col items-center sm:items-start">
              <span className="w-[60px] h-[60px] rounded-sm bg-primaryColor bg-opacity-15 flex items-center justify-center">
                <img src="/service-icon-2.png" alt="" />
              </span>
              <h3 className="mt-[1rem]">Product Management</h3>
            </div>
          </div>
          {/* <!-- EIGHT SERVICE --> */}
          <div className="sm:max-w-[299px] text-center sm:text-left bg-white rounded-md shadow-md py-[20px] pl-[20px] pr-[20px] lg:py-[40px] lg:pr-[10px] lg:pl-[20px]">
            <div className="flex flex-col items-center sm:items-start">
              <span className="w-[60px] h-[60px] rounded-sm bg-primaryColor bg-opacity-15 flex items-center justify-center">
                <img src="/service-icon-2.png" alt="" />
              </span>
              <h3 className="mt-[1rem]">Product Management</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
