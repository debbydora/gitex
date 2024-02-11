import Navbar from "@/components/Navbar";
import Link from "next/link";

const Aboutpage = () => {
  return (
    <>
      <main className="relative bg-burgerBg object-contain min-h-screen w-full">
        <div className="absolute inset-0 z-0 bg-harmburger-gradient"></div>
        <div className="relative z-10 flex flex-col">
          <Navbar />
          <div className="text-white md:px-24 py-12 px-6  xl:mt-0 xl:w-[80%] md:w-[90%] w-full">
            <h1 className="font-cabinet font-bold md:text-[60px] text-[36px] leading-normal">
              About Wema
            </h1>

            <p className="md:text-[18px] md:leading-[32px] xl:leading-[38px] text-base leading-[35px] ">
              With technology now the main driver of Nigerian banking, a large
              percentage of people, both young and old, are embracing
              institutions that have intelligently harnessed its power.
              Nigeria&apos;s leading innovative and digital financial
              institution, Wema Bank, has become a main attraction for these
              categories of Nigerians due to its provision of accessible,
              seamless, timely and flexible digital services.Resolved to become
              Nigeria&apos;s financial institution of choice, Wema Bank has
              built several digital products and offerings like ALAT, ALAT for
              Business, Sara, Gender Loan Offering, Hackaholics, SME solutions
              and lots more. ALAT by Wema, for instance, is Nigeria&apos;s first
              digital bank that blazed the trail for others in the sector.Its
              Hackaholics, an initiative for tech startups is also a trailblazer
              by organizing trainings for businesses to solve societal
              challenges. The Bank has given out over $300,000 in grants to over
              300,000 participants across different countries in Africa.{" "}
              <a
                href="https://www.hackaholics.wemabank.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.hackaholics.wemabank.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Aboutpage;
