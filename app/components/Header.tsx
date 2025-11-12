import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="h-auto md:h-28 w-full bg-black text-white px-10 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <div className="flex justify-between items-center w-full md:w-auto">
        <Image
          src={"/LOGO.png"}
          alt="banner"
          width={160}
          height={60}
          className="size-14 md:size-16 lg:size-20 mx-auto md:mx-0"
        />
        {/* Optional: Hamburger menu for mobile */}
      </div>

      <Navbar />

      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <a
          href={`https://wa.me/447447800467`}
          className="px-4 py-2 rounded-lg bg-yellow-500 text-black font-medium hover:scale-95 hover:bg-gray-500 transition-transform cursor-pointer"
        >
          Get Winfast99 Id
        </a>
        <a
          href={`https://Winfast99.com`}
          className="px-4 py-2 rounded-lg bg-yellow-500 text-black font-medium hover:scale-95 hover:bg-gray-500 transition-transform cursor-pointer"
        >
          Login
        </a>
      </div>
    </header>
  );
};
export default Header;
