import Navbar from "@/components/Navbar";

const Prizes = () => {
  return (
    <main className="relative bg-burgerBg  bg-contain min-h-screen w-full p-10">
      <div className="absolute inset-0 z-0 bg-harmburger-gradient"></div>
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <div className="text-white md:px-24 py-12 px-6 xl:mt-0 xl:w-[80%] md:w-[95%] w-full">
          <h1 className="font-cabinet font-bold md:text-[60px] text-[28px]  leading-normal">
            Prizes - What awaits your startup
          </h1>

          <ul className="pl-4 list-disc gap-2.5 mt-3 flex flex-col md:w-[70%] w-full md:text-[18px] md:leading[40px] text-base leading-[35px]">
            <li>
              Return flight for 1 person from their country of residence to
              Marrakech for GITEX Africa 2024 in Morocco.
            </li>
            <li>
              Accommodation for 1 person for a maximum of 4 nights between for
              respective event (29th May - 31st May 2024 in Marrakech).
            </li>
            <li>
              {" "}
              A 2sqm fully built and branded startup pod to exhibit at GITEX
              Africa 2024 from 29th May - 31st May 2024.
            </li>
            <li>
              {" "}
              Guaranteed to enter the Supernova Challenge 2024 Semi-Finals at
              GITEX Africa 2024 (cash prizes up to $100,000)
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Prizes;

