import React, { useState } from "react";
import image1 from "../assets/Group_3.png";
import image2 from "../assets/Icon.png";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";
// import { toast } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Alert } from "antd";
import { useNavigate } from "react-router-dom";

const CreateCard = () => {
  const history = useNavigate();  // Initialize useNavigate for redirecting

  // Initialize form handling with react-hook-form
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      link: "",
      icon_url: "",
      tag_name: "",
      category: "",
      description: "",
    },
  });

  // Function to show an informational toast message
  const infoMessage = (message) => {
    toast.success(message, {
      // position: toast.POSITION.TOP_CENTER,
      toastId: "info1",
      className: "info",
    });
  };


  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
    toast.success("Item Details Sumbiteed Successfully");
    reset({});
    history("/cards")
  
    const response = fetch(
      "https://media-content.ccbp.in/website/react-assignment/add_resource.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (response.ok) {
      reset({});
    toast.success("success");
    history("/cards")
    }
  };

  // Handle click to navigate back to "/cards"
  const handleClick = () => {
    history("/cards");
  };

  return (
    <div className="create-card">
      
      <div className="create-card-container">
        <div className="user_arrow" onClick={handleClick}>
          <div className="card-title-container">
            <img src={image2} />
          </div>
          <p>Users</p>
        </div>
        <div className="form_fontainer">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              name="title"
              label="Title"
              control={control}
              errors={errors}
              rules={{
                required: { value: true, message: "Title is required" },
              }}
            />
            <FormInput
              name="link"
              label="link"
              control={control}
              errors={errors}
              rules={{
                required: { value: true, message: "Link is required" },
              }}
            />
            <FormInput
              name="icon_url"
              label="icon url"
              control={control}
              errors={errors}
              rules={{
                required: { value: true, message: "Icon URL is required" },
              }}
            />
            <FormInput
              name="category"
              label="category"
              control={control}
              errors={errors}
              rules={{
                required: { value: true, message: "Category is required" },
              }}
            />
            <div className="card-input-container">
              <label htmlFor="tag_name" className="card-title">
                <sup className="required super">* </sup>
                TAG NAME
              </label>
              <select
                className="card-input"
                {...register("tag_name", { required: true })}
              >
                <option value=""></option>
                <option value="request">Request</option>
                <option value="user">User</option>
              </select>
              {errors.tag_name && (
                <p className="required">Tag Name is Required</p>
              )}
            </div>
            <div className="card-input-container">
              <label className="card-title">
                <sup className="required super">* </sup>
                DESCRIPTION
              </label>
              <textarea
                className="card-input"
                {...register("description", {
                  required: true,
                  maxLength: 500,
                })}
              />
              {errors.description && (
                <p className="required">Description is required</p>
              )}
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="create-card-img">
        <img src={image1} className="card_img" />
      </div>
    </div>
  );
};

export default CreateCard;
