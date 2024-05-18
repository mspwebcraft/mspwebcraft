"use client";
import NewsLatterBox from "./NewsLatterBox";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { convertCamelCase } from "@/lib";
import { useState } from "react";
export interface ContactRequest {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  message: string;
}
const Contact = () => {
  const [loading, setloading] = useState(false);
  const handleContactSubmit = async (data: ContactRequest) => {
    setloading(true);
    const sendReq = await axios.post("/api/contact", data);
    if (sendReq.data?.status == 200) {
      toast.success("Contact request sent sucessfully");
    }
    setloading(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const showError = (feild: string) => {
    return (
      <p className="text-md mt-1 text-red-500">
        {errors[feild] && errors[feild].type === "pattern" && (
          <p>{errors[feild].message as string}</p>
        )}
        {errors[feild] && errors[feild].type === "required" && (
          <p>
            {errors[feild].message
              ? (errors[feild].message as string)
              : "This field is required"}
          </p>
        )}
      </p>
    );
  };
  const renderInput = ({ field, validation }) => {
    return (
      <div className="w-full px-4 md:w-1/2">
        <div className="mb-8">
          <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
            Your {convertCamelCase(field)}
          </label>
          <input
            type="text"
            {...register(field, validation)}
            placeholder={`Enter your ${convertCamelCase(field)}`}
            className={`${
              errors[field]
                ? "border-red-500 focus:border-red-500"
                : "border-stroke focus:border-primary"
            } input-error`}
          />
          {showError(field)}
        </div>
      </div>
    );
  };
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form
                onSubmit={handleSubmit(handleContactSubmit)}
                id="contactForm"
              >
                <div className="-mx-4 flex flex-wrap">
                  {renderInput({
                    field: "firstName",
                    validation: {
                      maxLength: 10,
                      required: "First Name is required",
                      pattern: {
                        value: /^[a-zA-Z\s]+$/,
                        message:
                          "Please enter a valid first name (only letters and spaces allowed)",
                      },
                    },
                  })}
                  {renderInput({
                    field: "lastName",
                    validation: {
                      maxLength: 10,
                      pattern: {
                        value: /^[a-zA-Z\s]+$/,
                        message:
                          "Please enter a valid first name (only letters and spaces allowed)",
                      },
                    },
                  })}
                  {renderInput({
                    field: "mobile",
                    validation: {
                      maxLength: 14,
                      required: "Mobile no is required",
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Please enter a valid Mobile No",
                      },
                    },
                  })}
                  {renderInput({
                    field: "email",
                    validation: {
                      maxLength: 30,
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email",
                      },
                    },
                  })}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        {...register("message", {
                          required: true,
                        })}
                        placeholder="Enter your Message"
                        className={`${
                          errors.message
                            ? "border-red-500 focus:border-red-500"
                            : "border-stroke focus:border-primary"
                        } input-error`}
                      ></textarea>
                      {showError("message")}
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button disabled={loading} className="primary-btn">
                      {loading ? "Submiting...." : "Submit Ticket"} 
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
