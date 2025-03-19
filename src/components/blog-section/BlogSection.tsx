import React from "react";

const BlogSection = () => {
  return (
    <section id="blog" className="bg-[#F3F4FB] mt-[100px]">
      <div className="container overflow-hidden">
        <div className="max-w-[784px] mx-auto text-center mb-[30px] sm:mb-[40px] lg:mb-[60px]">
          <div className="flex flex-row items-center gap-3 justify-center">
            <span className="h-5 w-5 rounded-full bg-[#FFDE56]"></span>
            <span className="sm:text-[1.125rem] text-[1rem] font-medium">
              Our Services
            </span>
          </div>
          <h3 className="leading-tight h2_style">Popular Blog Post</h3>
        </div>

        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="max-w-[644px]">
            <div className="max-h-[363px] rounded-md overflow-hidden">
              <img
                src="/blog-1.jpg"
                alt=""
                className="transform hover:scale-[1.2] trainsition ease duration-500"
              />
            </div>
            <div className="max-w-[513px] mt-[30px]">
              <div className="flex flex-row gap-3 items-center">
                <span className="text-primaryColor text-[1rem] sm:text-[1.125rem]">
                  DEVELOPMENT
                </span>
                <div className="flex flex-row gap-1 items-center">
                  <img src="/watch_later_24px.svg" alt="" />
                  <span>jULY 23, 2023</span>
                </div>
              </div>
              <div>
                <h3 className="h2_style text-primaryColor leading-tight pb-[30px]">
                  Godaddy User Flow Solution...
                </h3>
                <p>
                  At Pixology we specialize in designing, shipping and scaling
                  beautiful. At Pixology we specialize in designing, shipping
                  and scaling beautiful
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {/* <!-- First  --> */}
            <div className="max-w-[590px] flex flex-col sm:flex-row gap-7">
              <div className="sm:max-w-[202px] max-h-[162px] rounded-md overflow-hidden lg:shrink-0">
                <img
                  src="/blog-2.jpg"
                  alt=""
                  className="w-full hover:scale-[1.2] trainsition ease duration-500"
                />
              </div>
              <div className="flex flex-col gap-3 items-start">
                <div className="flex flex-row items-center gap-4 flex-wrap">
                  <span className="text-primaryColor text-[1rem] sm:text-[1.125rem]">
                    DEVELOPMENT
                  </span>
                  <div className="flex flex-row gap-1 items-center">
                    <img
                      src="/watch_later_24px.svg"
                      alt=""
                      className="hover:scale-[1.2] trainsition ease duration-500"
                    />
                    <span>jULY 23, 2023</span>
                  </div>
                </div>
                <h3 className="font-medium max-w-[20ch]">
                  Godaddy User Flow Solution For Every Individual
                </h3>
              </div>
            </div>
            {/* <!-- SECOND --> */}
            <div className="max-w-[590px] flex flex-col sm:flex-row gap-7">
              <div className="sm:max-w-[202px] max-h-[162px] rounded-md overflow-hidden lg:shrink-0">
                <img
                  src="/blog-2.jpg"
                  alt=""
                  className="w-full hover:scale-[1.2] trainsition ease duration-500"
                />
              </div>
              <div className="flex flex-col gap-3 items-start">
                <div className="flex flex-row items-center gap-4 flex-wrap">
                  <span className="text-primaryColor text-[1rem] sm:text-[1.125rem]">
                    DEVELOPMENT
                  </span>
                  <div className="flex flex-row gap-1 items-center">
                    <img
                      src="/watch_later_24px.svg"
                      alt=""
                      className="hover:scale-[1.2] trainsition ease duration-500"
                    />
                    <span>jULY 23, 2023</span>
                  </div>
                </div>
                <h3 className="font-medium max-w-[20ch]">
                  Godaddy User Flow Solution For Every Individual
                </h3>
              </div>
            </div>
            {/* <!-- THIRD  --> */}
            <div className="max-w-[590px] flex flex-col sm:flex-row gap-7">
              <div className="sm:max-w-[202px] max-h-[162px] rounded-md overflow-hidden lg:shrink-0">
                <img
                  src="/blog-2.jpg"
                  alt=""
                  className="w-full hover:scale-[1.2] trainsition ease duration-500"
                />
              </div>
              <div className="flex flex-col gap-3 items-start">
                <div className="flex flex-row items-center gap-4 flex-wrap">
                  <span className="text-primaryColor text-[1rem] sm:text-[1.125rem]">
                    DEVELOPMENT
                  </span>

                  <div className="flex flex-row gap-1 items-center">
                    <img
                      src="/watch_later_24px.svg"
                      alt=""
                      className="hover:scale-[1.2] trainsition ease duration-500"
                    />
                    <span>jULY 23, 2023</span>
                  </div>
                </div>
                <h3 className="font-medium max-w-[20ch]">
                  Godaddy User Flow Solution For Every Individual
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
