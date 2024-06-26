import React from "react";
import Image from "next/image";

const Sidebar: React.FC = () => {
  const topSearches = [
    "Enables users to create AI Avatar",
    "Transforming photography forever using AI",
    "Gamified marketplace for digital assets",
    "Set up your domains & mailboxes within minutes",
    "Park & sell your domains to get funds for your personal & business goals.",
    "Capture your ideas & craft texts with AI's touch",
    "The simple calendar and booking solution",
  ];

  const discussions = [
    "Best practices for creating AI Avatars",
    "Innovations in AI-powered photography",
    "Future of digital asset marketplaces",
    "Quick setup tips for domains & mailboxes",
    "Strategies for selling domains effectively",
    "Enhancing text creation with AI",
    "Improving scheduling with simple calendar solutions",
  ];

  return (
    <div className="px-5 py-5">
      <h4 className="font-bold">Top Searches</h4>
      <ul>
        {topSearches.map((link, index) => (
          <a
            href="#"
            key={index}
            className="flex items-center py-2 space-x-4 xl:py-2"
          >
            <Image
              src="/images/community-icon-2.png"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="font-medium font-bold1 text-gray-700">{link}</span>
          </a>
        ))}
      </ul>
      <h4 className="font-bold mt-5">Discussions</h4>
      <ul>
        {discussions.map((link, index) => (
          <a
            href="#"
            key={index}
            className="flex items-center py-2 space-x-4 xl:py-2"
          >
            <Image
              src="/images/community-icon-2.png"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="font-medium font-bold1 text-gray-700">{link}</span>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
