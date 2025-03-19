import Image from "next/image";

const NewsletterSection = () => {
  return (
    <div
      className="flex items-center py-[50px] lg:py-[100px] overflow-hidden"
      style={{
        backgroundImage: "url('/newsleterBg.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "auto",
      }}
    >
      <div className="container ">
        <div className="flex flex-col gap-8 lg:gap-3 lg:flex-row items-center justify-between">
          <div className="max-w-[600px]">
            <div>
              <div className="flex flex-row items-center gap-3 mb-3">
                <span className="h-5 w-5 rounded-full bg-[#FFDE56]"></span>
                <span className="sm:text-[1.125rem] text-[1rem] font-medium text-white">
                  Our Services
                </span>
              </div>
              <h3 className="h2_style text-white leading-tight">
                Subscribe to our newsletter to get the latest updates and deals
              </h3>
            </div>
            <div className="max-w-[456px] bg-white bg-opacity-15 relative rounded-md mt-[40px] sm:mt-[60px]">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full p-4 pr-[160px] rounded-md bg-transparent text-white font-medium focus:outline-none focus:border-[#FFDD60] focus:ring-4"
              />
              <button className="group bg-[#FFDD60] px-5 py-[10px] rounded-md flex flex-row gap-1 items-center font-medium absolute right-[5px] top-[5px]">
                Subscribe
                <span>
                  <Image
                    src="/arrow_downward_24px.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                    className="group-hover:translate-x-1 transition ease duration-200"
                  />
                </span>
              </button>
            </div>
          </div>
          <div>
            <Image
              src="/newsletter-banner.png"
              alt="Newsletter Banner"
              width={500} // Set appropriate width
              height={300} // Set appropriate height
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
