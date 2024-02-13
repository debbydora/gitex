"use client";
import Image from "next/image";
import iconX from "../../../public/icons/iconcancel.svg";
import InputField from "@/components/InputField";

const RegisterModal = ({
  title,
  setShowModal1,
  register,
  errors,
  loading,
  handleSubmit,
  submitForm,
}) => {
  return (
    <div className=" w-full flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="inline-block align-bottom p-8 bg-white rounded-[50px] text-left overflow-hidden shadow-xl transform transition-all sm:mt-0 sm:mb-8 md:mt-0 sm:align-middle sm:max-w-lg sm:w-full w-full">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-cabinet font-bold text-3xl">
              {title?.city}
            </p>
            <p className="text-sm">{title?.date}</p>
          </div>
          <button
            onClick={() => setShowModal1(false)}
            className="font-semibold"
          >
            <Image
              src={iconX}
              alt="cancel"
            />
          </button>
        </div>
        <hr className=" border-t-[0.1px]  my-1 mt-4 border-black" />
        <div className="my-[1rem]">
          <InputField
            label="Name"
            id="name"
            name="name"
            type="text"
            required={true}
            register={register}
          />

          <p className=" mt-[1rem] mb-[0.2rem] text-[12px] text-red-500 ">
            {errors.name?.message}
          </p>
        </div>
        <div className="my-[1rem]">
          <InputField
            label="Startup Name"
            id="startupName"
            name="startupName"
            type="text"
            required={true}
            register={register}
          />

          <p className=" mt-[1rem] mb-[0.2rem] text-[12px] text-red-500 ">
            {errors.startupName?.message}
          </p>
        </div>
        <div className="my-[1rem]">
          <InputField
            label="Email Address"
            id="email"
            name="email"
            type="email"
            required={true}
            register={register}
          />

          <p className=" mt-[1rem] mb-[0.2rem] text-[12px] text-red-500 ">
            {errors.email?.message}
          </p>
        </div>
        <div className="my-[1rem]">
          <InputField
            label="Phone Number"
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            required={true}
            register={register}
          />

          <p className=" mt-[1rem] mb-[0.2rem] text-[12px] text-red-500 ">
            {errors.phoneNumber?.message}
          </p>
        </div>
        <div className="flex justify-center mt-6 -mb-4">
          <button
            onClick={handleSubmit(submitForm)}
            className="bg-btnBg py-4 px-16 rounded-[22px] text-white"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
