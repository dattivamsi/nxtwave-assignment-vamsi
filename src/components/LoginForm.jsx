import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      mobile_number: "",
      password: "",
    },
  });

  const onsubmit = () => {
    navigate("/cards");
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("addNew", false);
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <form onSubmit={handleSubmit(onsubmit)}>
          <FormInput
            name="mobile_number"
            label="MOBILE NUMBER"
            control={control}
            errors={errors}
            type="Number"
            rules={{
              required: { value: true, message: "Mobile Number is required" },
              maxLength: {
                value: 10,
                message: "Mobile Number cannot exceed 10 characters",
              },
              pattern: {
                value: /^[0-9]+$/i,
                message: "only Numbers are Allowed",
              },
            }}
          />
          <FormInput
            name="password"
            label="Password"
            control={control}
            errors={errors}
            type="Password"
            rules={{
              required: { value: true, message: "Password is required" },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message:
                  "Password must contain at least 8 characters, including one letter, one number, and one special character",
              },
            }}
          />
          <button>submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
