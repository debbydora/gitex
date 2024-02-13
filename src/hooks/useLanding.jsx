"use client";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const useLanding = () => {
  const targetRef = useRef(null);
  const [showModal1, setShowModal1] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState({
    city: "",
    date: "",
  });
  const { register, handleSubmit, formState, setValue } = useForm({
    defaultValues: {
      name: "",
      startupName: "",
      email: "",
      phoneNumber: "",
    },
  });

  const clearForm = () => {
    setValue("name", "");
    setValue("startupName", "");
    setValue("email", "");
    setValue("phoneNumber", "");
    setShowModal1(false);
    setShowSuccess(true);
  };

  const { errors } = formState;

  const urlMap = {
    Lagos:
      " https://innovate.expandnorthstar.com/en/users/sign_up?participate_modal=true&redirect_to=%2Fen%2Fchallenges%2Froadshow-nigeria-lagos24%2Fteams%3Fparticipate_when_signed_in%3Dfalse",
    Abuja:
      "https://innovate.expandnorthstar.com/en/users/sign_up?participate_modal=true&redirect_to=%2Fen%2Fchallenges%2Froadshow-nigeria-abuja24%2Fteams%3Fparticipate_when_signed_in%3Dfalse",
    Kaduna:
      "https://innovate.expandnorthstar.com/en/users/sign_up?participate_modal=true&redirect_to=%2Fen%2Fchallenges%2Froadshow-nigeria-kaduna24%2Fteams%3Fparticipate_when_signed_in%3Dfalse",
  };

  const submitForm = (data) => {
    const payload = {
      Name: data.name,
      StartupName: data.startupName,
      Email: data.email,
      PhoneNumber: data.phoneNumber,
    };
    setLoading(true);
    fetch("https://sheetdb.io/api/v1/ii8zr522mz59g", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data?.created) {
          clearForm();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    handleSubmit,
    register,
    targetRef,
    setShowModal1,
    showModal1,
    showSuccess,
    setShowSuccess,
    loading,
    title,
    setTitle,
    errors,
    urlMap,
    submitForm,
  };
};

export default useLanding;
