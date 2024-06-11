/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from "react";
import Image from "next/image";

const Contact: React.FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".divSidebar");
    elements.forEach((element) => {
      (element as HTMLElement).style.display = "none";
    });
    const subHeaderElements = document.querySelectorAll(".subHeader");
    subHeaderElements.forEach((element) => {
      (element as HTMLElement).style.display = "none";
    });
  }, []);
  return (
    <section className="relative leading-7 text-gray-900 bg-white border-solid">
      <div className="box-border mx-auto my-10 border-solid pe-5 max-w-7xl">
        <div className="flex flex-col items-center1 leading-7 text-gray-900 border-0 border-gray-200 lg:flex-row">
          <div className="box-border flex flex-col justify-center w-full h-full p-8 text-gray-900 border-solid lg:w-1/2 md:p-16 lg:p-0 lg:pl-0 lg:pr-20">
            <h2 className="relative text-4xl font-extrabold tracking-tight sm:text-5xl">
              Contact Us
            </h2>
            <p className="mt-2 text-xl text-left border-0 border-gray-200 sm:text-2xl">
              Need to ask us a question?
            </p>
            <p className="max-w-screen-md mx-auto mt-4 text-left text-gray-500 md:text-lg md:mt-6">
              If you have any questions, inquiries, or would like to discuss how
              we can help your business thrive, please don't hesitate to reach
              out to us using the contact information below.
            </p>
            <div className="w-full h-full overflow-hidden leading-7 text-gray-900 border-0 border-gray-200 mt-6">
              <img
                src="https://cdn.vnoc.com/templates/tailwind/community/images/contactus.jpg"
                className="object-cover w-full h-full"
                alt="Contact Us"
              />
            </div>
          </div>
          <div className="w-full h-full overflow-hidden leading-7 text-gray-900 border-0 border-gray-200 lg:w-1/2">
            <form className="grid max-w-3xl gap-4 mx-auto sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
                >
                  First name
                </label>
                <input
                  name="first-name"
                  className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-indigo-300"
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
                >
                  Last name
                </label>
                <input
                  name="last-name"
                  className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-indigo-300"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
                >
                  Company
                </label>
                <input
                  name="company"
                  className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-indigo-300"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
                >
                  Email
                </label>
                <input
                  name="email"
                  className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-indigo-300"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-indigo-300"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  className="w-full h-64 px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-indigo-300"
                ></textarea>
              </div>
              <div className="flex items-center justify-between sm:col-span-2">
                <button className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-600 rounded-md outline-none hover:bg-indigo-500 active:bg-indigo-700 ring-blue-300 md:text-base">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
