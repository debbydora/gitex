import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import leftimg from "../../../public/image/leftimg.png";
import middleimg from "../../../public/image/middleimg.png";
import rightimg from "../../../public/image/rightimg.png";
import tinyimg from "../../../public/image/tinyImg.png";
import info1icon from "../../../public/icons/info1.svg";
import info2icon from "../../../public/icons/info2.svg";
import info3icon from "../../../public/icons/info3.svg";
import info4icon from "../../../public/icons/info4.svg";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {" "}
      <main className="font-satoshi flex flex-col relative">
        <section
          aria-label="hero"
          className="relative bg-heroBg bg-contain md:min-h-[800px] min-h-[660px]"
        >
          <div className="absolute inset-0 bg-hero-gradient"></div>
          <div className="flex flex-col justify-center items-center h-full text-white relative z-10">
            <Navbar />
            <div className="flex flex-col justify-center items-center md:mt-30 mt-28 text-center">
              <h1 className="font-cabinet font-bold md:text-[96px] text-[48px] leading-[56px] md:leading-[110px] lg:w-[60%] ">
                WEMA Bank X GITEX Africa
              </h1>
              <p className="xl:lg:w-[45%] lg:w-[75%] text-base md:text-[24px] mt-6 w-[90%] leading-[30px] md:leading-[40px]">
                Pitch your idea to win an all-expenses paid trip to the largest
                tech and startup event in Africa – GITEX AFRICA 2024, Marrakech,
                Morocco
              </p>
            </div>

            <div className="w-full grid lg:mt-20 mt-16 place-items-center font-700 text-white">
              <div className="relative">
                <button className="relative z-[5] bg-btnBg py-5 px-20 rounded-[22px] ">
                  Save your spot
                </button>
                <div className="absolute w-full h-full rounded-[22px] border-[1px] border-white top-[8px] left-[8px] z-[1]"></div>
              </div>
            </div>
          </div>
        </section>
        <section aria-label="info section" className="md:px-24 py-12 px-6 ">
          <div className="flex justify-center">
            <p className="text-center md:text-[24px] xl:lg:w-[60%] lg:w-[95%]">
              Are you ready to catapult your startup onto the global stage?
              Gitex and Wema Bank invites you on an adventure to unlock an
              extraordinary opportunity that could transform your
              entrepreneurial journey!
            </p>
          </div>
          <div className="flex justify-between gap-10 md:gap-8 lg:gap-0 items-start mt-20 w-full">
            <div className="w-1/3">
              <Image
                src={leftimg}
                alt="people"
                className="w-[41px]  md:w-[90px] lg:w-[121px]"
                priority
              />
            </div>
            <div className="w-2/3">
              <Image src={middleimg} alt="people" className="w-full" />
            </div>
            <div className="w-1/3 flex justify-end relative">
              <div className="flex absolute -bottom-10 -left-6 md:-bottom-20 md:-left-2  xl:lg:-bottom-52  lg:-bottom-24 lg:!left-12 ">
                <Image
                  src={tinyimg}
                  alt="people"
                  className=" w-[30px] md:w-[54px]"
                  priority
                />
              </div>
              <Image
                src={rightimg}
                alt="people"
                className="w-[35px]  md:w-[90px] lg:w-[121px]"
                priority
              />
            </div>
          </div>
          <div className="mt-20 w-full ">
            <h1 className="text-center font-bold font-cabinet md:text-[64px] text-[36px] leading-[48px]">
              What awaits your startup
            </h1>
            <div className="mt-20 w-full flex flex-col  gap-20 xl:px-[10rem] ">
              <div className="flex md:flex-row flex-col gap-y-20 justify-between gap-x-6">
                <div className="flex flex-col gap-3">
                  <div className="flex md:justify-start justify-center items-center">
                    <Image src={info1icon} alt="info icon" />
                  </div>

                  <div className="flex flex-col md:text-start text-center">
                    <h1 className="font-bold md:text-2xl leading-[48px]">
                      Global Pitch Competition
                    </h1>
                    <p className="lg:w-[350px] md:text-[22px]">
                      Compete against the best and brightest startups from
                      diverse industries. Showcase your unique value proposition
                      to a panel of seasoned investors and industry experts for
                      a chance to secure funding and partnerships.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex md:justify-start justify-center items-center">
                    <Image src={info2icon} alt="info icon" />
                  </div>

                  <div className="flex flex-col md:text-start text-center">
                    <h1 className="font-bold md:text-2xl leading-[48px]">
                      Networking Opportunities
                    </h1>
                    <p className="lg:w-[350px] md:text-[22px]">
                      Forge meaningful connections with global ecosystem
                      players, potential partners, mentors, and investors.
                      Expand your network and gain insights from leaders shaping
                      the future of technology and entrepreneurship.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-y-20 justify-between gap-x-6">
                <div className="flex flex-col gap-3">
                  <div className="flex md:justify-start justify-center items-center">
                    {" "}
                    <Image src={info3icon} alt="info icon" />
                  </div>

                  <div className="flex flex-col md:text-start text-center">
                    <h1 className="font-bold md:text-2xl leading-[48px]">
                      Exposure and Visibility
                    </h1>
                    <p className="lg:w-[350px] md:text-[22px]">
                      Gain unparalleled exposure for your startup on aglobal
                      scale. Showcase your product or service to a diverse
                      audience of investors, media, and industry influencers,
                      amplifying your brand&apos;s visibility and reach.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex md:justify-start justify-center items-center">
                    {" "}
                    <Image src={info4icon} alt="info icon" />
                  </div>

                  <div className="flex flex-col  md:text-start text-center">
                    <h1 className="font-bold md:text-2xl leading-[48px]">
                      Access to Resources
                    </h1>
                    <p className="lg:w-[350px] md:text-[22px]">
                      Benefit from exclusive workshops, mentorship sessions, and
                      resources designed to support your startup&apos;s growth
                      journey. Tap into the knowledge and expertise of seasoned
                      professionals to overcome challenges and accelerate your
                      success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-20 w-full flex flex-col bg-[#DEF4FF] rounded-[41px] px-[27px] py-12  ">
            <h1 className="font-cabinet md:text-[64px] text-[36px] leading-[40px] text-center">
              Save your spot
            </h1>
            <div className="text-[24px] leading-[40px] flex justify-center mt-5">
              <p className="xl:w-[36%} lg:w-[60%] md:w-[90%] text-center md:mt-2">
                Don&apos;t miss this exciting opportunity to propel your startup
                to new heights.
              </p>
            </div>
            <div className="lg:mt-20 mt-14 flex lg:flex-row gap-y-8  items-center flex-col lg:justify-center gap-x-8 text-[#000]">
              <div>
                <div className="bg-btnBorder p-[2px] w-[240px]  rounded-[20px]">
                  <button className="w-full py-6 px-16 rounded-[20px] text-[#0E0531] text-center md:text-2xl bg-[#DEF4FF]">
                    Lagos
                  </button>
                </div>
                <p className="text-center md:[24px] leading-[40px]">
                  27th February 2024
                </p>
              </div>
              <div>
                <div className="bg-btnBorder p-[2px] w-[240px] rounded-[20px]">
                  <button className="w-full py-6 px-16 rounded-[20px] text-[#0E0531] text-center md:text-2xl bg-[#DEF4FF]">
                    Abuja
                  </button>
                </div>
                <p className="text-center  md:[24px] leading-[40px]">
                  26th February 2024
                </p>
              </div>
              <div>
                <div className="bg-btnBorder p-[2px] w-[240px] rounded-[20px]">
                  <button className="w-full py-6 px-16 rounded-[20px] text-[#0E0531] text-center md:text-2xl bg-[#DEF4FF]">
                    Kaduna
                  </button>
                </div>
                <p className="text-center md:[24px] leading-[40px]">
                  29th February 2024
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
