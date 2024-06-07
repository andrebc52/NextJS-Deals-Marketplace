/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";

const blogPosts = [
  {
    title: "Simple Time Management",
    description:
      "Managing your time can make the difference between getting ahead in life or staying exactly where you are.",
    date: "May 18, 2021",
    author: "Scott Reedman",
    href: "#_",
    category: "Business",
    imgSrc:
      "https://cdn.vnoc.com/templates/tailwind/community/images/clock.jpg",
  },
  {
    title: "The Fruits Life",
    description:
      "Take a moment and enjoy the many fruits of life. Relaxation and a healthy diet can go a long way.",
    date: "May 15, 2021",
    author: "Jake Caldwell",
    href: "#_",
    category: "Nutrition",
    imgSrc:
      "https://cdn.vnoc.com/templates/tailwind/community/images/lemons.jpg",
  },
  {
    title: "Creating a Future Worth Living",
    description:
      "Learn the attributes you need to gain in order to build a future and create a life that you are truly happy with.",
    date: "April 17, 2021",
    author: "Mary Jane",
    href: "#_",
    category: "Lifestyle",
    imgSrc:
      "https://cdn.vnoc.com/templates/tailwind/community/images/fruit.jpg",
  },
  {
    title: "The Healthier Version of Yourself",
    description:
      "If you want to excel in life and become a better version of yourself, you'll need to upgrade your life.",
    date: "April 10, 2021",
    author: "Fred Jones",
    href: "#_",
    category: "Health",
    imgSrc:
      "https://cdn.vnoc.com/templates/tailwind/community/images/workout.jpg",
  },
  {
    title: "Enjoy the Meals of the Kings",
    description:
      "Take the time to enjoy the life that you've created. It's totally fine to live like kings and eat like royalty.",
    date: "April 6, 2021",
    author: "Mike Roberts",
    href: "#_",
    category: "Food",
    imgSrc: "https://cdn.vnoc.com/templates/tailwind/community/images/food.jpg",
  },
  {
    title: "Writing for Success",
    description:
      "Writing about your plans for success is extremely helpful for yourself and it will allow you to share your story.",
    date: "May 25, 2021",
    author: "Tom Johnson",
    href: "#_",
    category: "Motivation",
    imgSrc:
      "https://cdn.vnoc.com/templates/tailwind/community/images/books.jpg",
  },
];

// Select a featured blog post
const featuredPost = blogPosts[0];

const Blog: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="w-full px-0 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
        <div className="flex flex-col items-center sm:px-5 md:flex-row">
          <div className="w-full md:w-1/2">
            <a href={featuredPost.href} className="block">
              <img
                className="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96"
                src={featuredPost.imgSrc}
                alt={featuredPost.title}
              />
            </a>
          </div>
          <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
            <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
              <div
                className={`bg-${featuredPost.category.toLowerCase()}-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block`}
              >
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
                <a href={featuredPost.href}>{featuredPost.title}</a>
              </h1>
              <p className="pt-2 text-sm font-medium">
                by{" "}
                <a href="#_" className="mr-1 underline">
                  {featuredPost.author}
                </a>{" "}
                · <span className="mx-1">{featuredPost.date}</span> ·{" "}
                <span className="mx-1 text-gray-600">5 min. read</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"
            >
              <a href={post.href} className="block">
                <img
                  className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
                  src={post.imgSrc}
                  alt={post.title}
                />
              </a>
              <div
                className={`bg-${post.category.toLowerCase()}-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block`}
              >
                <span>{post.category}</span>
              </div>
              <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
                <a href={post.href}>{post.title}</a>
              </h2>
              <p className="text-sm text-gray-500">{post.description}</p>
              <p className="pt-2 text-xs font-medium">
                <a href="#_" className="mr-1 underline">
                  {post.author}
                </a>{" "}
                · <span className="mx-1">{post.date}</span> ·{" "}
                <span className="mx-1 text-gray-600">5 min. read</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
