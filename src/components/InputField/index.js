"use client";

import { useState } from "react";
// 
// const InputField = ({
//   label,
//   type,
//   options,
//   id,
//   name,
//   value,
//   handleChange,
//   placeholder,
//   boldLabel,
//   register,
//   required,
//   accessor,
//   disabled,
//   max,
//   min,
// }) => {
//   const [isFocused, setFocused] = useState(false);

//   const handleFocus = () => setFocused(true);
//   const handleBlur = (e) => {
//     if (!e.currentTarget.contains(document.activeElement)) {
//       setFocused(false);
//     }
//   };

//   function validateEmail(email) {
//     const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//     return emailPattern.test(email);
//   }

//     const renderInput = () => {

//     return (
//       <input
//         type={type}
//         id={id}
//         name={name}
//         value={value}
//         max={max}
//         min={min}
//         onChange={handleChange}
//         {...(register &&
//           register(name, {
//             disabled: disabled,
//             required: {
//               value: required,
//               message: `${label} is required`,
//             },
//             validate: (fieldValue) => {
//               if (name === "email") {
//                 return (
//                   validateEmail(fieldValue) || "Enter a valid email address"
//                 );
//               }
//             },
//           }))}
//         placeholder={placeholder}
//         className="block w-full   text-black bg-white focus:outline-none text-[12px] "
//       />
//     );
//   };

//     return (
//       <>
//         <p className="font-bold text-sm">
//           {" "}
//           {label && (
//             <label
//               htmlFor={id}
//               className={`block ${
//                 boldLabel ? "text-[14px] font-[600]" : "text-[12px] font-[600]"
//               }  text-[#444448] `}
//             >
//               {label}
//             </label>
//           )}
//         </p>
//         <div
//           onFocus={handleFocus}
//           onBlur={handleBlur}
//           tabIndex="0"
//           className={`mb-3 w-full h-[55px] border-[0.1px] bg-white ${
//             isFocused ? "border-btnBg" : "border-[#c4c1c1]"
//           } rounded-md py-1 px-4`}
//         >
//           {renderInput()}
//         </div>
//       </>
//     );
// };

// export default InputField;

const InputField = ({
  label,
  type,
  options,
  id,
  name,
  value,
  handleChange,
  placeholder,
  boldLabel,
  register,
  required,
  accessor,
  disabled,
  symbol,
  max,
  min,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setFocused] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const handleFocus = () => setFocused(true);
  const handleBlur = (e) => {
    if (!e.currentTarget.contains(document.activeElement)) {
      setFocused(false);
    }
  };

  function validateEmail(email) {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  }

  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <select
            id={id}
            name={name}
            value={value}
            onChange={handleChange}
            {...((register &&
              register(name, {
                required: {
                  value: required,
                  message: `${label} is required`,
                },
              })) ||
              {})}
            className="block w-full py-1 text-secondaryLight bg-white  focus:outline-none"
          >
            <option className="" value={""}>
              Select
            </option>
            {options?.map((option, index) => (
              <option className="" key={option[id]} value={option[id]}>
                {option[accessor]}
              </option>
            ))}
          </select>
        );
      case "radio":
      case "checkbox":
        return options.map((option) => (
          <label key={option.value}>
            <input
              type={type}
              name={name}
              value={option.value}
              onChange={handleChange}
            />
            {option.label}
          </label>
        ));

      default:
        return (
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            max={max}
            min={min}
            onChange={handleChange}
            {...(register &&
              register(name, {
                disabled: disabled,
                required: {
                  value: required,
                  message: `${label} is required`,
                },
                validate: (fieldValue) => {
                  if (name === "email") {
                    return (
                      validateEmail(fieldValue) || "Enter a valid email address"
                    );
                  }
                },
              }))}
            placeholder={placeholder}
            className="block w-full outline-none h-full text-black bg-white focus:outline-none text-[12px] "
          />
        );
    }
  };

      return (
        <>
          <p className="font-bold text-sm">
            {" "}
            {label && (
              <label
                htmlFor={id}
                className={`block ${
                  boldLabel
                    ? "text-[14px] font-[600]"
                    : "text-[12px] font-[600]"
                }  text-[#444448] `}
              >
                {label}
              </label>
            )}
          </p>
          <div
            onFocus={handleFocus}
            onBlur={handleBlur}
            tabIndex="0"
            className={`mb-3 w-full h-[50px] border-[1px] bg-white ${
              isFocused ? "border-[#FF2169]" : "border-[#c4c1c1]"
            } rounded-[14px] outline-none px-4`}
          >
            {renderInput()}
          </div>
        </>
      );
};

export default InputField;
