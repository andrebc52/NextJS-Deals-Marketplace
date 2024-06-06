import React from "react";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-3">
      <div className="w-full mx-auto text-left bg-white">
        <h1 className="mb-1 text-3xl font-bold leading-none max-w-5xl mx-auto tracking-normal text-gray-800 sm:text-3xl md:text-3xl lg:text-3xl md:tracking-tight">
          Welcome To Link Directory
        </h1>
        <p className="px-0 mb-3 text-lg text-gray-600 md:text-xl">
          Boost your search engine rankings with top-tier back-links by
          enlisting your website in the Business Directory.
        </p>
      </div>

      {/* Today's */}
      <div className="w-full">
        <div className="overflow-hidden component_block">
          <section className="py-0 sm:py-0 px-0">
            <div className="max-w-7xl mx-auto">
              <h3 className="font-semibold text-2xl lg:text-2xl xl:text-2xl mt-5">
                Top Trending Links Today
              </h3>
              <div className="w-full h-px bg-gradient-to-r my-3 from-gray-600 via-gray-400 to-white mx-auto"></div>
            </div>
          </section>
        </div>
      </div>
      <div className="w-full mx-auto mt-0">
        <LinkItem
          title="Discover items that resell on the aftermarket for a profit"
          category="Finance"
          reviews="100 Reviews"
          rating={4}
        />
        <LinkItem
          title="Know your worth and earn for being you"
          category="Lifestyle"
          reviews="100 Reviews"
          rating={4}
        />
        <LinkItem
          title="Create beautiful product marketing demos that convert"
          category="Finance"
          reviews="100 Reviews"
          rating={4}
        />
        <LinkItem
          title="Converts data into intelligent extension of your information"
          category="AI"
          reviews="100 Reviews"
          rating={4}
        />
      </div>

      {/* Yesterday's */}
      <div className="w-full">
        <div className="overflow-hidden component_block">
          <section className="py-0 sm:py-0 px-0">
            <div className="max-w-7xl mx-auto">
              <h3 className="font-semibold text-2xl lg:text-2xl xl:text-2xl mt-5">
                Yesterday&apos;s Trending Links
              </h3>
              <div className="w-full h-px bg-gradient-to-r my-3 from-gray-600 via-gray-400 to-white mx-auto"></div>
            </div>
          </section>
        </div>
      </div>
      <div className="w-full mx-auto mt-0">
        <LinkItem
          title="Discover items that resell on the aftermarket for a profit"
          category="Finance"
          reviews="100 Reviews"
          rating={4}
        />
        <LinkItem
          title="Know your worth and earn for being you"
          category="Lifestyle"
          reviews="100 Reviews"
          rating={4}
        />
        <LinkItem
          title="Create beautiful product marketing demos that convert"
          category="Sales"
          reviews="100 Reviews"
          rating={4}
        />
        <LinkItem
          title="Converts data into intelligent extension of your information"
          category="AI"
          reviews="100 Reviews"
          rating={4}
        />
      </div>
    </div>
  );
};

interface LinkItemProps {
  title: string;
  category: string;
  reviews: string;
  rating: number;
}

const LinkItem: React.FC<LinkItemProps> = ({
  title,
  category,
  reviews,
  rating,
}) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <svg
      key={i}
      className={`w-4 h-4 ${i < rating ? "text-yellow-300" : "text-gray-300"}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
    </svg>
  ));

  return (
    <div className="itemLink relative">
      <div className="relative z-10 flex items-center w-full h-full py-3 rounded-lg">
        <div className="flex-shrink-0 mr-4">
          <Image
            className="w-16 h-16 rounded-full"
            src="/images/community-icon-1.png"
            alt="icon"
            width={64}
            height={64}
          />
        </div>
        <div className="flex-1 min-w-0">
          <a href="#_" className="focus:outline-none">
            <p className="text-xl text-gray-900">{title}</p>
            <div className="flex">
              <div className="dRating mt-1 mr-1">
                <div className="flex items-center">{stars}</div>
              </div>
              <p className="text-sm font-medium leading-none px-2 py-1 mt-0.5 inline-block">
                {reviews}
              </p>
              <p className="bg-indigo-100 text-indigo-800 text-xs font-semibold leading-none rounded-full px-2 py-1 mt-0.5 inline-block">
                {category}
              </p>
            </div>
          </a>
        </div>
        <div className="flex-1 flex-grow-0 pr-2 text-gray-200">
          <div className="relative flex items-center justify-end space-x-3">
            <a href="#_" className="text-gray-500 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="#_" className="text-gray-500 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
