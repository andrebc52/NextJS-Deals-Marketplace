/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

const Signup: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-full pt-20">
        <div className="flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-6/12 xl:w-7/12">
            <div className="relative flex flex-col items-center justify-center w-full pe-5">
              <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                <div className="relative">
                  <p className="mb-2 font-medium text-gray-700 uppercase">
                    Work smarter
                  </p>
                  <h2 className="relative text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Features to help you work smarter
                  </h2>
                </div>
                <p className="text-2xl text-gray-700">
                  We've created a simple formula to follow in order to gain more
                  out of your business and your application.
                </p>
                <a
                  href="#_"
                  className="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700 ease"
                  data-primary="indigo-600"
                  data-rounded="rounded-lg"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
          <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
            <div className="flex flex-col items-start justify-start w-full h-full p-10 bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
              <h4 className="w-full text-3xl font-bold">Signup</h4>
              <p className="text-lg text-gray-500">
                or, if you have an account you can{" "}
                <a
                  href="#_"
                  className="text-indigo-600 underline"
                  data-primary="indigo-600"
                >
                  sign in
                </a>
              </p>
              <div className="relative w-full mt-10 space-y-8">
                <div className="relative">
                  <label className="font-medium text-gray-900">Name</label>
                  <input
                    type="text"
                    className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50"
                    data-primary="indigo-600"
                    data-rounded="rounded-lg"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="relative">
                  <label className="font-medium text-gray-900">Email</label>
                  <input
                    type="text"
                    className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50"
                    data-primary="indigo-600"
                    data-rounded="rounded-lg"
                    placeholder="Enter Your Email Address"
                  />
                </div>
                <div className="relative">
                  <label className="font-medium text-gray-900">Password</label>
                  <input
                    type="password"
                    className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50"
                    data-primary="indigo-600"
                    data-rounded="rounded-lg"
                    placeholder="Password"
                  />
                </div>
                <div className="relative">
                  <a
                    href="#_"
                    className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700 ease"
                    data-primary="indigo-600"
                    data-rounded="rounded-lg"
                  >
                    Create Account
                  </a>
                  <a
                    href="#_"
                    className="inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease"
                    data-rounded="rounded-lg"
                  >
                    Sign up with Google
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
