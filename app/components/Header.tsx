import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="h-auto md:h-28 w-full bg-black text-white px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <div className="flex justify-between items-center w-full md:w-auto">
        <h1 className="text-2xl md:text-4xl">LOGO</h1>
        {/* Optional: Hamburger menu for mobile */}
      </div>

      <Navbar />

      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <button className="px-4 py-2 rounded-lg bg-yellow-500 text-black font-medium hover:scale-95 hover:bg-gray-500 transition-transform cursor-pointer">
          Get Mahadev Id
        </button>
        <button className="px-4 py-2 rounded-lg bg-yellow-500 text-black font-medium hover:scale-95 hover:bg-gray-500 transition-transform cursor-pointer">
          Login
        </button>
      </div>
    </header>
  );
};
export default Header;
