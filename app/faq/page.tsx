/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

const Faq: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="pe-5 mx-auto max-w-7xl">
        <h2 className="relative text-4xl font-extrabold tracking-tight sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-16">
          <div>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              What is Tails
            </h5>
            <p>
              Tails is a drag and drop page builder built on top of TailwindCSS.
              You can drop components to create a page that you can export.
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              Can I try it for free?
            </h5>
            <p>
              Absolutely, you can try out Tails for free; however, if you wish
              to access all the components and export the page, you&apos;ll need
              to upgrade your account.
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              Where do I go to upgrade my account?
            </h5>
            <p>
              You can upgrade your account by visiting{" "}
              <a
                href=""
                className="text-indigo-500 underline"
                data-primary="indigo-500"
              >
                The Pro Upgrade Page
              </a>
              . You will also gain access to many other applications and
              sections of the site.{" "}
              <a href="" target="_blank" rel="noopener noreferrer">
                here
              </a>
              .
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              How long will I have access to Tails?
            </h5>
            <p>
              You will have unlimited access to all your pre-built pages;
              however, if you want to be able to download and export your pages,
              you&apos;ll need a pro account.{" "}
              <a href="" target="_blank" rel="noopener noreferrer">
                Paddle
              </a>{" "}
              for processing payments.
            </p>
          </div>
          <div>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              How do I implement into my project?
            </h5>
            <p>
              Implementation in your project is very simple. You can use the
              exported page as a starting point, or you can copy and paste the
              HTML into your own page.
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              What is the license on the pages?
            </h5>
            <p>
              You have unlimited use to the templates used in Tails; however,
              you cannot re-use the templates to sell for others to use.
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              Can I cancel my account if I no longer need it?
            </h5>
            <p>
              Of course, you can feel free to cancel your account at any time,
              and you can feel free to come back and upgrade again whenever
              you&apos;re ready.
            </p>
            <h5 className="mt-10 mb-3 font-semibold text-gray-900">
              What if I need help with my project?
            </h5>
            <p>
              If you need assistance implementing the templates into your
              project, you can contact support or you can visit our{" "}
              <a
                href=""
                className="text-indigo-500 underline"
                data-primary="indigo-500"
              >
                question section
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
