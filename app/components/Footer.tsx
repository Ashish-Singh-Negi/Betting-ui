import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="w-full bg-indigo-950 py-4 font-medium">
        <div className="max-w-5xl text-white mx-auto">
          Mahadev Book | Mahadev Book Id | Mahadev Book Login| Mahadev ID |
          Mahadev Online Book | MahadevBook | Mahadev Book Whatsapp Number |
          Mahadev Book Betting app download | Mahadev Book app | Mahadev Book
          Online Betting | Mahadev Book Site | Mahadev Cricket ID | Mahadev Book
          Prediction | Online Sports Betting | Casino Game | Football betting |
          Fantasy Games | Horse Race Betting | Mahadev Book Prediction | Mahadev
          Book Offers | ReddyBook
        </div>
      </div>
      <p className="w-full text-2xl text-center bg-gray-950 text-white py-4">
        Playing can be addictive. Make sure to play responsibly.
      </p>
      <section className="w-full bg-zinc-900 py-16 flex gap-6 justify-center text-white">
        <div className="max-w-5xl flex gap-10">
          <div className="w-60">
            <h2 className="text-4xl mb-6">LOGO</h2>
            <p className="text-lg">
              Welcome to MahadevBook Online Betting Website.
              <span className="italic">
                Online betting carries financial risk. Always play responsibly
                and never bet more than you can afford to lose.
              </span>
            </p>
          </div>
          <div className="shrink-0 w-80">
            <h3 className="mb-6">MahadevBook Online Betting Site</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="font-medium grid grid-cols-1 grap-2">
                <p className="hover:scale-105 transition-transform cursor-pointer">
                  Home
                </p>
                <p className="hover:scale-105 transition-transform cursor-pointer">
                  Mahadevbook ID
                </p>
                <p className="hover:scale-105 transition-transform cursor-pointer">
                  Mahadevbook Register
                </p>
                <p className="hover:scale-105 transition-transform cursor-pointer">
                  Mahadevbook Login
                </p>
                <p className="hover:scale-105 transition-transform cursor-pointer">
                  Mahadevbook app{" "}
                </p>
                <p className="hover:scale-105 transition-transform cursor-pointer">
                  Mahadev Book{" "}
                </p>
                <p className="hover:scale-105 transition-transform cursor-pointer">
                  Offers{" "}
                </p>
                <p className="hover:scale-105 transition-transform cursor-pointer">
                  Blogs
                </p>
              </div>
              <div className="font-medium grid grid-cols-1 grap-2">
                <p className="hover:scale-105 transition-transform cursor-pointer">
                  About US
                </p>
                <p className="hover:scale-105 transition-transform cursor-pointer">
                  Contact Us
                </p>
                <p className="hover:scale-105 transition-transform cursor-pointer">
                  Customer Care
                </p>
                <p className="hover:scale-105 transition-transform cursor-pointer">
                  Privacy policy
                </p>
                <p className="hover:scale-105 transition-transform cursor-pointer">
                  Terms & Conditions
                </p>
                <p className="hover:scale-105 transition-transform cursor-pointer">
                  Responsible Game
                </p>
                <p className="hover:scale-105 transition-transform cursor-pointer">
                  Disclaimer
                </p>
                <p className="hover:scale-105 transition-transform cursor-pointer">
                  Refund Policy
                </p>
                <p className="hover:scale-105 transition-transform cursor-pointer">
                  Sitemap
                </p>
              </div>
            </div>
          </div>
          <div className="shrink-0 w-80 ">
            <h3 className="mb-2 font-medium">
              Join Us on Social Media for Updates and Offers
            </h3>
            <div className="flex gap-2">
              <Link
                href={"/"}
                className="size-8 flex items-center justify-center rounded-full bg-red-500"
              ></Link>
              <Link
                href={"/"}
                className="size-8 flex items-center justify-center rounded-full bg-black"
              ></Link>
              <Link
                href={"/"}
                className="size-8 flex items-center justify-center rounded-full bg-gray-500"
              ></Link>
              <Link
                href={"/"}
                className="size-8 flex items-center justify-center rounded-full bg-violet-700"
              ></Link>
              <Link
                href={"/"}
                className="size-8 flex items-center justify-center rounded-full bg-green-500"
              ></Link>
            </div>
            <p className="font-medium my-4">Download the App Now</p>
            <div className="size-40 bg-white"></div>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
