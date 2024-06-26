/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect } from "react";

const Signin: React.FC = () => {
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
    <section className="w-full py-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:flex-row">
          <div className="w-full space-y-5 md:w-3/5 md:pr-16">
            <p
              className="font-medium text-gray-700 uppercase"
              data-primary="indigo-500"
            >
              Building Businesses
            </p>
            <h2 className="relative text-4xl font-extrabold tracking-tight sm:text-5xl">
              Changing The Way People Do Business.
            </h2>
            <p className="text-xl text-gray-600 md:pr-16">
              Learn how to engage with your visitors and teach them about your
              mission. We're revolutionizing the way customers and businesses
              interact.
            </p>
          </div>
          <div className="w-full mt-16 md:mt-0 md:w-2/5">
            <div
              className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7"
              data-rounded="rounded-lg"
              data-rounded-max="rounded-full"
            >
              <h3 className="mb-6 text-2xl font-medium text-center">
                Sign in to your Account
              </h3>
              <input
                type="text"
                name="email"
                id="email"
                className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-indigo-500 focus:outline-none"
                data-rounded="rounded-lg"
                data-primary="indigo-500"
                placeholder="Email address"
              />
              <input
                type="password"
                name="password"
                id="password"
                className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-indigo-500 focus:outline-none"
                data-rounded="rounded-lg"
                data-primary="indigo-500"
                placeholder="Password"
              />
              <div className="block">
                <button
                  className="w-full px-3 py-4 font-medium text-white bg-indigo-600 rounded-lg"
                  data-primary="indigo-600"
                  data-rounded="rounded-lg"
                >
                  Log Me In
                </button>
              </div>
              <p className="w-full mt-4 text-sm text-center text-gray-500">
                Don't have an account?{" "}
                <a href="#_" className="text-indigo-500 underline">
                  Sign up here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
