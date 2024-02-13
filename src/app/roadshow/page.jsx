import Navbar from "@/components/Navbar";

const RoadShow = () => {
  return (
    <main className="relative bg-burgerBg  object-contain min-h-screen w-full">
      <div className="absolute inset-0 z-0 bg-harmburger-gradient"></div>
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <div className="text-white md:px-24 py-12 px-6 xl:w-[80%] md:w-[86%] w-full">
          <h1 className="font-cabinet font-bold md:text-[60px] text-[36px] leading-normal">
            GITEX Road Show
          </h1>

          <p className="text-[18px] md:leading-[32px] xl:leading-[38px] text-base leading-[35px]">
            GITEX AFRICA is on a mission to discover the best tech startups!
            Gitex Africa 2024 will showcase the best-in-class startups at the
            2nd edition and it has been designed to meet the tech stars,
            founders, investors, and startup ecosystems from Kenya, Ethiopia,
            Rwanda, Morocco, Nigeria, South Africa, Egypt, and more.The GITEX
            Nigeria roadshow is scheduled to take place across Lagos, Kaduna.
          </p>
        </div>
      </div>
    </main>
  );
}

export default RoadShow 

