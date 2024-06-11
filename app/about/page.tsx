/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from "react";
import Image from "next/image";

const About: React.FC = () => {
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
      <div className="box-border mx-auto border-solid pe-5 max-w-7xl">
        <div className="flex flex-col items-center leading-7 text-gray-900 border-0 border-gray-200 lg:flex-row">
          <div className="box-border flex flex-col justify-center w-full h-full p-8 text-gray-900 border-solid lg:w-1/2 md:p-16 lg:p-0 lg:pl-0 lg:pr-20">
            <h2 className="relative text-4xl font-extrabold tracking-tight sm:text-5xl">
              About Us
            </h2>
            <p className="mt-2 text-xl text-left border-0 border-gray-200 sm:text-2xl">
              Welcome to Zipsite Solutions Inc., your premier partner for
              innovative technology services and solutions.
            </p>
            <div className="grid gap-4 mt-8 leading-7 border-0 border-gray-200 sm:mt-10 sm:gap-6 lg:mt-12 lg:gap-8">
              <div className="box-border flex items-start text-gray-900 border-solid">
                <div className="flex items-center justify-center w-12 h-12 leading-7 bg-indigo-600 border-0 border-gray-200 rounded-full">
                  <p className="box-border m-0 text-xl text-white border-solid">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                  </p>
                </div>
                <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
                  <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-black border-solid sm:text-xl md:text-2xl">
                    Our Mission
                  </h3>
                  <p className="box-border mt-2 text-base leading-normal text-gray-900 border-solid">
                    At Zipsite Solutions Inc., our mission is to empower
                    businesses and individuals through cutting-edge technology.
                    We strive to deliver reliable, scalable, and customized
                    solutions that drive growth, efficiency, and success for our
                    clients.
                  </p>
                </div>
              </div>
              <div className="box-border flex items-start text-gray-900 border-solid">
                <div className="flex items-center justify-center w-12 h-12 leading-7 bg-indigo-600 border-0 border-gray-200 rounded-full">
                  <p className="box-border m-0 text-xl text-white border-solid">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                  </p>
                </div>
                <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
                  <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-black border-solid sm:text-xl md:text-2xl">
                    Who We Are
                  </h3>
                  <p className="box-border mt-2 text-base leading-normal text-gray-900 border-solid">
                    Zipsite Solutions Inc. is a team of passionate
                    technologists, designers, and strategists dedicated to
                    solving complex challenges with simplicity and elegance.
                    With years of experience in the industry, our experts bring
                    a wealth of knowledge and expertise to every project.
                  </p>
                </div>
              </div>
              <div className="box-border flex items-start text-gray-900 border-solid">
                <div className="flex items-center justify-center w-12 h-12 leading-7 bg-indigo-600 border-0 border-gray-200 rounded-full">
                  <p className="box-border m-0 text-xl text-white border-solid">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                  </p>
                </div>
                <div className="flex-1 ml-6 leading-7 border-0 border-gray-200">
                  <h3 className="box-border m-0 text-lg font-semibold leading-tight tracking-tight text-black border-solid sm:text-xl md:text-2xl">
                    What We Do
                  </h3>
                  <p className="box-border mt-2 text-base leading-normal text-gray-900 border-solid">
                    We offer a comprehensive suite of technology services
                    tailored to meet the unique needs of businesses across
                    various industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full overflow-hidden leading-7 text-gray-900 border-0 border-gray-200 lg:w-1/2">
            <Image
              src="/images/webdev.jpg"
              alt=""
              width={600}
              height={850}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
