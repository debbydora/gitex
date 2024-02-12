import Link from "next/link";
import wemaLogo from "../../../public/icons/wema-icon.svg";
import gitexLogo from "../../../public/icons/GITEX-GLOBAL.svg";
import fb from "../../../public/icons/facebook.svg"
import x from "../../../public/icons/X.svg";
import insta from "../../../public/icons/instagram.svg";
import linkedin from "../../../public/icons/linkedin.svg";
import googleStore from "../../../public/image/Google.png"
import appStore from "../../../public/image/AppStore.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="w-full bg-footerBg flex flex-col text-white md:px-24 py-8 font-satoshi pl-[23px]"
      aria-label="footer"
    >
      <div className="grid md:grid-cols-3 md:gap-20 lg:gap-16 xl:gap-40 gap-y-12 w-full mt-8 md:mt-0">
        <div className="flex flex-col  w-full ">
          <div className="flex items-center md:gap-2 gap-10">
            <Image src={wemaLogo} alt="wema-logo" priority />

            <Image src={gitexLogo} alt="gitex-logo" priority />
          </div>
          <p className="md:mt-10 mt-12 md:text-lg text-[20px]">
            +234 812 345 6789{" "}
          </p>
          <div
            aria-label="socials"
            className="flex items-center md:gap-4 gap-6 mt-3"
          >
            <a
              href="https://www.facebook.com/wemabankplc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={fb} alt="facebook" priority />
            </a>
            <a
              href="https://twitter.com/wemabank"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={x} alt="twitter" priority />
            </a>
            <a
              href="https://www.instagram.com/wemabank/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={insta} alt="instagram" priority />
            </a>
            <a
              href="https://www.linkedin.com/company/wemabankplc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={linkedin} alt="linkedin" priority />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 text-lg  w-full">
          <h1 className="font-bold ">Learn More</h1>
          <a
            href="https://wemabank.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WEMA bank
          </a>
          <a href="https://alat.ng/" target="_blank" rel="noopener noreferrer">
            ALAT
          </a>
          <a
            href="https://hackaholics.wemabank.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hackaholics
          </a>
        </div>
        <div className="flex flex-col md:gap-y-5 gap-y-3 text-lg w-full ">
          <h1 className="font-bold ">Address</h1>
          <p className="xl:w-[85%] lg:w-full md:w-full w-[301px]">
            Wema Tower 54 Marina Lagos, Lagos, 100221 Nigeria
          </p>
          <div>
            <p className="font-bold text-[20px] leading-[27px]">
              Download ALAT
            </p>
            <div className="flex md:flex-row flex-col mt-3 gap-3">
              <a
                href="https://apps.apple.com/ng/app/alat/id1222853161"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={appStore} alt="download on app store" priority />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.wemabank.alat.prod&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={googleStore}
                  alt="download on play store"
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center text-xs md:mt-10 mt-12 gap-y-2 md:gap-y-0">
        <div className="flex gap-3">
          <Link href="/#">Terms & Agreement </Link>
          <Link href="/#">Privacy Policy</Link>
        </div>
        <div className="xl:pr-10 md:pl-10  pr-0">
          <p>Copyright 2024. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
