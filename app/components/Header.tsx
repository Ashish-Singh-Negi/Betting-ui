import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="h-14 md:h-28 w-full bg-black flex justify-between items-center text-white px-10">
      <h1 className="text-4xl">LOGO</h1>
      <Navbar />
      <div className="flex gap-4">
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
