import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-indigo-950 text-white">
      {/* Keyword Strip */}
      <div className="w-full py-4 font-medium text-sm md:text-base">
        <div className="max-w-6xl mx-auto px-4">
          Mahadev Book | Mahadev Book Id | Mahadev Book Login | Mahadev ID |
          Mahadev Online Book | MahadevBook | Mahadev Book Whatsapp Number |
          Mahadev Book Betting App Download | Mahadev Book App | Mahadev Book
          Online Betting | Mahadev Book Site | Mahadev Cricket ID | Mahadev Book
          Prediction | Online Sports Betting | Casino Game | Football Betting |
          Fantasy Games | Horse Race Betting | Mahadev Book Offers | ReddyBook
        </div>
      </div>

      {/* Responsible Gaming Notice */}
      <p className="w-full text-base md:text-xl text-center bg-gray-950 py-4">
        Playing can be addictive. Make sure to play responsibly.
      </p>

      {/* Footer Main Section */}
      <section className="w-full bg-zinc-900 py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 justify-between text-white">
          {/* Logo & Disclaimer */}
          <div className="flex-1 min-w-[250px]">
            <h2 className="text-3xl md:text-4xl mb-6">LOGO</h2>
            <p className="text-sm md:text-base">
              Welcome to MahadevBook Online Betting Website.
              <span className="italic block mt-2">
                Online betting carries financial risk. Always play responsibly
                and never bet more than you can afford to lose.
              </span>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 min-w-[250px]">
            <h3 className="mb-6 text-lg font-semibold">
              MahadevBook Online Betting Site
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
              <div className="space-y-2">
                {[
                  "Home",
                  "Mahadevbook ID",
                  "Mahadevbook Register",
                  "Mahadevbook Login",
                  "Mahadevbook App",
                  "Mahadev Book",
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
                "bg-red-500",
                "bg-black",
                "bg-gray-500",
                "bg-violet-700",
                "bg-green-500",
              ].map((color, idx) => (
                <Link
                  key={idx}
                  href="/"
                  className={`size-8 flex items-center justify-center rounded-full ${color}`}
                />
              ))}
            </div>
            <p className="font-medium mb-2">Download the App Now</p>
            <div className="w-40 h-40 bg-white rounded-md"></div>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
