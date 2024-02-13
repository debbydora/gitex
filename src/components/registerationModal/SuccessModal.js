import React from "react";
import Image from "next/image";
import iconX from "../../../public/icons/iconcancel.svg";
import success from "../../../public/icons/tick-circle.svg";
import rightArr from "../../../public/icons/rightArr.svg";

const SuccessModal = ({
  title,
  urlMap,
  setShowSuccess,
}) => {
  return (
    <div className=" w-full flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="inline-block align-bottom p-8 bg-white rounded-[50px] text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full w-full">
        <div className="flex justify-end">
          {" "}
          <button
            onClick={() => setShowSuccess(false)}
            className="font-semibold"
          >
            <Image
              src={iconX}
              alt="cancel"
            />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="w-[100px]">
            <Image
              src={success}
              alt="success"
              priority
            />
          </div>
          <p className="text-lg">
            Registration successful!
          </p>
          <div className="flex justify-center mt-6 -mb-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={urlMap[title?.city]}
            >
              <button
                onClick={() => setShowSuccess(false)}
                className="bg-btnBg md:text-base text-sm  py-4 md:px-12 px-10 rounded-[20px] text-white flex items-center gap-2"
              >
                Proceed to GITEX Africa
                <Image
                  src={rightArr}
                  alt="proceed"
                  priority
                  width={15}
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
