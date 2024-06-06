import Link from "next/link";

const SubHeader = () => {
  return (
    <section className="relative w-full bg-white">
      <div className="relative py-5 px-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-start sm:items-center">
          <div className="flex items-center w-full gap-2 px-3 py-2 text-gray-500 border rounded-full bg-gray-50 sm:w-auto">
            <span className="text-sm font-semibold">Trending Links:</span>
            <Link href="#" legacyBehavior>
              <a className="bg-indigo-100 text-indigo-800 text-sm font-semibold leading-none rounded-full px-2 py-1 mt-0.5">
                Marketing &amp; Sales
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="bg-indigo-100 text-indigo-800 text-sm font-semibold leading-none rounded-full px-2 py-1 mt-0.5">
                Design &amp; Creative
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="bg-indigo-100 text-indigo-800 text-sm font-semibold leading-none rounded-full px-2 py-1 mt-0.5">
                Social &amp; Community
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="bg-indigo-100 text-indigo-800 text-sm font-semibold leading-none rounded-full px-2 py-1 mt-0.5">
                Health &amp; Fitness
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="bg-indigo-100 text-indigo-800 text-sm font-semibold leading-none rounded-full px-2 py-1 mt-0.5">
                Finance
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="bg-indigo-100 text-indigo-800 text-sm font-semibold leading-none rounded-full px-2 py-1 mt-0.5">
                E-commerce
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="bg-indigo-100 text-indigo-800 text-sm font-semibold leading-none rounded-full px-2 py-1 mt-0.5">
                Lifestyle
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-10 flex items-end w-full bg-cover opacity-50"></div>
    </section>
  );
};

export default SubHeader;
