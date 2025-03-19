import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#28272D] py-[2rem] sm:py-[2.5rem] md:py-[3rem] lg:py-[100px] mt-[40px] ">
      <div className="container grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 text-white">
        {/* FIRST COLUMN */}
        <div>
          <span className="text-white text-[32px] font-medium">
            About Pixology
          </span>
          <p className="text-white text-opacity-70 mt-[20px] mb-[60px]">
            A new way to make payments easy, reliable, and 100% secure.
            Claritatem itamconse quat. Exerci tationulla
          </p>
          <div className="flex flex-row gap-3">
            {[
              "ic_round-facebook",
              "mdi_twitter",
              "healthicons_g",
              "mdi_linkedin",
            ].map((icon) => (
              <span
                key={icon}
                className="w-[32px] h-[32px] rounded-full bg-white bg-opacity-15 flex items-center justify-center"
              >
                <Image src={`/${icon}.svg`} alt={icon} width={24} height={24} />
              </span>
            ))}
          </div>
        </div>

        {/* SECOND COLUMN */}
        <div className="lg:pl-5">
          <h4 className="mb-[27px] pt-[15px]">Useful Links</h4>
          <div className="flex flex-col text-white text-opacity-70 gap-3">
            {[
              "Contact Us",
              "How it Works",
              "Create",
              "Explore",
              "Terms & Services",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-white transition ease duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* THIRD COLUMN */}
        <div>
          <h4 className="mb-[27px] pt-[15px]">Community</h4>
          <div className="flex flex-col text-white text-opacity-70 gap-3">
            {[
              "Help Center",
              "Partners",
              "Suggestions",
              "Blog",
              "Newsletters",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-white transition ease duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* INSTAGRAM POSTS */}
        <div>
          <h4 className="mb-[27px] pt-[15px]">Instagram Post</h4>
          <div className="max-w-[290px] grid grid-cols-3 gap-7">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="max-w-[77px] max-h-[63px] rounded-md overflow-hidden"
                >
                  <Image
                    src="/insta-post-1.jpg"
                    alt="Instagram Post"
                    width={77}
                    height={63}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
