/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";

const blogPosts = [
  {
    title: "How to Boost Your SEO with Quality Backlinks",
    description:
      "Learn the strategies to improve your search engine rankings through effective backlinking.",
    date: "June 1, 2024",
    author: "Jane Doe",
    href: "/blog/how-to-boost-seo",
  },
  {
    title: "The Importance of Social Media Marketing",
    description:
      "Discover why social media marketing is crucial for your business growth.",
    date: "May 25, 2024",
    author: "John Smith",
    href: "/blog/social-media-marketing",
  },
  // Add more blog posts here
];

const Blog: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="w-full px-0 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
        <div className="flex flex-col items-center sm:px-5 md:flex-row">
          <div className="w-full md:w-1/2">
            <a href="#_" className="block">
              <img
                className="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96"
                src="https://cdn.vnoc.com/templates/tailwind/community/images/cupcakes.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
            <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
              <div className="bg-pink-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                <svg
                  className="w-3.5 h-3.5 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span>Featured</span>
              </div>
              <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                <a href="#_">Eating For Productivity</a>
              </h1>
              <p className="pt-2 text-sm font-medium">
                by{" "}
                <a href="#_" className="mr-1 underline">
                  John Doe
                </a>{" "}
                · <span className="mx-1">April 23rd, 2021</span> ·{" "}
                <span className="mx-1 text-gray-600">5 min. read</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
          <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
            <a href="#_" className="block">
              <img
                className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
                src="https://cdn.vnoc.com/templates/tailwind/community/images/fruit.jpg"
                alt=""
              />
            </a>
            <div className="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
              <span>Lifestyle</span>
            </div>
            <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
              <a href="#_">Creating a Future Worth Living</a>
            </h2>
            <p className="text-sm text-gray-500">
              Learn the attributes you need to gain in order to build a future
              and create a life that you are truly happy with.
            </p>
            <p className="pt-2 text-xs font-medium">
              <a href="#_" className="mr-1 underline">
                Mary Jane
              </a>{" "}
              · <span className="mx-1">April 17, 2021</span> ·{" "}
              <span className="mx-1 text-gray-600">3 min. read</span>
            </p>
          </div>

          <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
            <a href="#_" className="block">
              <img
                className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
                src="https://cdn.vnoc.com/templates/tailwind/community/images/workout.jpg"
                alt=""
              />
            </a>
            <div className="bg-pink-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
              <span>Health</span>
            </div>
            <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
              The Healther Version of Yourself
            </h2>
            <p className="text-sm text-gray-500">
              If you want to excel in life and become a better version of
              yourself, you&apos;ll need to upgrade your life.
            </p>
            <p className="pt-2 text-xs font-medium">
              <a href="#_" className="mr-1 underline">
                Fred Jones
              </a>{" "}
              · <span className="mx-1">April 10, 2021</span> ·{" "}
              <span className="mx-1 text-gray-600">3 min. read</span>
            </p>
          </div>

          <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
            <a href="#_" className="block">
              <img
                className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
                src="https://cdn.vnoc.com/templates/tailwind/community/images/food.jpg"
                alt=""
              />
            </a>
            <div className="bg-red-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
              <span>Food</span>
            </div>
            <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
              Enjoy the Meals of the Kings
            </h2>
            <p className="text-sm text-gray-500">
              Take the time to enjoy the life that you&apos;ve created.
              It&apos;s totally fine to live like kings and eat like royalty.
            </p>
            <p className="pt-2 text-xs font-medium">
              <a href="#_" className="mr-1 underline">
                Mike Roberts
              </a>{" "}
              · <span className="mx-1">April 6, 2021</span> ·{" "}
              <span className="mx-1 text-gray-600">3 min. read</span>
            </p>
          </div>

          <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
            <a href="#_" className="block">
              <img
                className="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56"
                src="https://cdn.vnoc.com/templates/tailwind/community/images/books.jpg"
                alt=""
              />
            </a>
            <div className="bg-blue-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
              <span>Motivation</span>
            </div>
            <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
              Writing for Success
            </h2>
            <p className="text-sm text-gray-500">
              Writing about your plans for success is extremely helpful for
              yourself and it will allow you to share your story.
            </p>
            <p className="pt-2 text-xs font-medium">
              <a href="#_" className="mr-1 underline">
                Tom Johnson
              </a>{" "}
              · <span className="mx-1">May 25, 2021</span> ·{" "}
              <span className="mx-1 text-gray-600">3 min. read</span>
            </p>
          </div>

          <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
            <a href="#_" className="block">
              <img
                className="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56"
                src="https://cdn.vnoc.com/templates/tailwind/community/images/clock.jpg"
                alt=""
              />
            </a>
            <div className="bg-gray-800 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
              <span>Business</span>
            </div>
            <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
              Simple Time Management
            </h2>
            <p className="text-sm text-gray-500">
              Managing your time can make the difference between getting ahead
              in life or staying exactly where you are.
            </p>
            <p className="pt-2 text-xs font-medium">
              <a href="#_" className="mr-1 underline">
                Scott Reedman
              </a>{" "}
              · <span className="mx-1">May 18, 2021</span> ·{" "}
              <span className="mx-1 text-gray-600">3 min. read</span>
            </p>
          </div>

          <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
            <a href="#_" className="block">
              <img
                className="object-cover w-full mb-2 overflow-hidden rounded-lg max-h-56"
                src="https://cdn.vnoc.com/templates/tailwind/community/images/lemons.jpg"
                alt=""
              />
            </a>
            <div className="bg-yellow-400 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
              <span>Nutrition</span>
            </div>
            <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
              The Fruits Life
            </h2>
            <p className="text-sm text-gray-500">
              Take a moment and enjoy to enjoy the many fruits of life.
              Relaxation and a healthy diet can go a long way.
            </p>
            <p className="pt-2 text-xs font-medium">
              <a href="#_" className="mr-1 underline">
                Jake Caldwell
              </a>{" "}
              · <span className="mx-1">May 15, 2021</span> ·{" "}
              <span className="mx-1 text-gray-600">3 min. read</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
