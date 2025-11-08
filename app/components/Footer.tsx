import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaMedium, FaPinterest, FaTwitch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-indigo-950 text-white">
      {/* Keyword Strip */}
      <div className="w-full py-4 font-medium text-sm md:text-base">
        <div className="max-w-6xl mx-auto px-4">
          Win99 Book | Win99 Book Id | Win99 Book Login | Win99 ID | Win99
          Online Book | Win99Book | Win99 Book Whatsapp Number | Win99 Book
          Betting App Download | Win99 Book App | Win99 Book Online Betting |
          Win99 Book Site | Win99 Cricket ID | Win99 Book Prediction | Online
          Sports Betting | Casino Game | Football Betting | Fantasy Games |
          Horse Race Betting | Win99 Book Offers | ReddyBook
        </div>
      </div>

      {/* Responsible Gaming Notice */}
      <p className="w-full text-base md:text-xl text-center bg-zinc-900 py-4">
        Playing can be addictive. Make sure to play responsibly.
      </p>

      {/* Footer Main Section */}
      <section className="w-full bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 justify-between text-white">
          {/* Logo & Disclaimer */}
          <div className="flex-1 min-w-[250px]">
            <Image
              src={"/LOGO.png"}
              alt="banner"
              width={160}
              height={40}
              className="size-14 md:size-16 lg:size-20"
            />
            <p className="text-sm md:text-base">
              Welcome to Win99Book Online Betting Website.
              <span className="italic block mt-2">
                Online betting carries financial risk. Always play responsibly
                and never bet more than you can afford to lose.
              </span>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 min-w-[250px]">
            <h3 className="mb-6 text-lg font-semibold">
              Win99Book Online Betting Site
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
              <div className="space-y-2">
                {[
                  "Home",
                  "Win99book ID",
                  "Win99book Register",
                  "Win99book Login",
                  "Win99book App",
                  "Win99 Book",
                  "Offers",
                  "Blogs",
                ].map((item, idx) => (
                  <p
                    key={idx}
                    className="hover:scale-105 transition-transform cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="space-y-2">
                {[
                  "About Us",
                  "Contact Us",
                  "Customer Care",
                  "Privacy Policy",
                  "Terms & Conditions",
                  "Responsible Game",
                  "Disclaimer",
                  "Refund Policy",
                  "Sitemap",
                ].map((item, idx) => (
                  <p
                    key={idx}
                    className="hover:scale-105 transition-transform cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Social & App */}
          <div className="flex-1 min-w-[250px]">
            <h3 className="mb-4 font-medium text-lg">
              Join Us on Social Media for Updates and Offers
            </h3>
            <div className="flex gap-2 mb-4">
              {[
                { color: "bg-red-500", Icon: <FaPinterest /> },
                { color: "bg-black", Icon: <FaXTwitter /> },
                { color: "bg-gray-500", Icon: <FaGithub /> },
                { color: "bg-violet-700", Icon: <FaTwitch /> },
                { color: "bg-green-500", Icon: <FaMedium /> },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href="https://wa.me/447447800467"
                  className={`size-8 flex items-center justify-center rounded-full ${link.color}`}
                >
                  {link.Icon}
                </a>
              ))}
            </div>
            <p className="font-medium mb-2">Download the App Now</p>
            <div className="size-40 rounded-md">
              <img
                src="https://Win99books.net/wp-content/uploads/2025/11/Win99-Book-Mobile-App-Download-1007x1024.jpg"
                alt="qr"
              />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
