import React from "react";

const ProjectSection = () => {
  return (
    <section className="mb-[30px] sm:mb-[40px] md:mb-[60px] lg:mb-[80px]">
      <div id="portfolio">
        <div className="container">
          <div className="max-w-[1090px] mx-auto text-center mb-[30px] sm:mb-[40px] lg:mb-[60px]">
            <div className="flex flex-row items-center gap-3 justify-center mb-3">
              <span className="h-5 w-5 rounded-full bg-[#FFDE56]"></span>
              <span className="sm:text-[1.125rem] text-[1rem] font-medium">
                Projects
              </span>
            </div>
            <h2 className="leading-tight">Pixology Complete Projects</h2>
            <div className="mt-[40px] lg:mt-[80px] flex flex-row sm:gap-6 gap-4 justify-center flex-wrap">
              <span className="md:px-[40px] md:py-[20px] px-[20px] py-[10px] bg-white sm:text-[1.125rem] text-[1rem] shadow-md rounded-md">
                Website
              </span>

              <span className="md:px-[40px] md:py-[20px] px-[20px] py-[10px] bg-white sm:text-[1.125rem] text-[1rem] shadow-md rounded-md">
                Website
              </span>
              <span className="md:px-[40px] md:py-[20px] px-[20px] py-[10px] bg-white sm:text-[1.125rem] text-[1rem] shadow-md rounded-md">
                Website
              </span>
              <span className="md:px-[40px] md:py-[20px] px-[20px] py-[10px] bg-white sm:text-[1.125rem] text-[1rem] shadow-md rounded-md">
                Website
              </span>
              <span className="md:px-[40px] md:py-[20px] px-[20px] py-[10px] bg-white sm:text-[1.125rem] text-[1rem] shadow-md rounded-md">
                Website
              </span>
            </div>
          </div>
          {/* <!-- PROJECTS PICTURES --> */}
          <div>
            <div className="grid lg:grid-cols-[repeat(auto-fill,minmax(auto,1fr))] gap-4">
              <div className="max-w-[853px] max-h-[429px] sm:col-[1/7] sm:row-[1/3] lg:row-[1/3] lg:col-[1/4] rounded-md overflow-hidden">
                <img
                  src="/project-1.jpg"
                  alt=""
                  className="rounded-md h-full transform hover:scale-[1.2] trainsition ease duration-500"
                />
              </div>
              <div className="max-w-[416px] max-h-[429px] sm:col-[1/4] sm:row-[3/4] lg:row-[1/3] lg:col-[4/6] rounded-md overflow-hidden">
                <img
                  src="/project-2.jpg"
                  alt=""
                  className="rounded-md transform hover:scale-[1.2] trainsition ease duration-500"
                />
              </div>
              <div className="max-w-[416px] max-h-[429px] sm:col-[4/7] sm:row-[3/4] lg:row-[3/6] lg:col-[1/2] rounded-md overflow-hidden">
                <img
                  src="/project-3.jpg"
                  alt=""
                  className="rounded-md h-full transform hover:scale-[1.2] trainsition ease duration-500"
                />
              </div>
              <div className="max-w-[416px] max-h-[429px] sm:col-[1/4] sm:row-[5/6] lg:row-[3/6] lg:col-[3/4] rounded-md overflow-hidden">
                <img
                  src="/project-4.jpg"
                  alt=""
                  className="rounded-md h-full transform hover:scale-[1.2] trainsition ease duration-500"
                />
              </div>
              <div className="max-w-[416px] max-h-[429px] sm:col-[4/7] sm:row-[5/6] lg:row-[3/6] lg:col-[4/6] rounded-md overflow-hidden">
                <img
                  src="/project-5.jpg"
                  alt=""
                  className="rounded-md h-full transform hover:scale-[1.2] trainsition ease duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
