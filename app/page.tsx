import Image from "next/image";
import { FaAndroid, FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp, IoMdLock } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import FaqAccordion from "./components/FaqAccordion";

const faqData = [
  {
    question: "What is Mahadev Book?",
    answer:
      "Mahadev Book provides an organized platform designed to facilitate online betting for various sports such as cricket, football, tennis, and kabaddi as well as a casino section targeting short play formats.",
  },
  {
    question: "How do I create a Mahadev Book ID?",
    answer:
      "Access the official site. Click sign up. Enter your name, phone number, and email address. Follow the instructions to confirm your phone number with OTP. Create a secure password and agree to the terms.",
  },
  {
    question: "How can I login to my Mahadev Book account?",
    answer:
      "Open the official site or, if you have downloaded the app, the app. Enter your Mahadev Book login details (ID and Password). Complete any other verification steps such as OTP.",
  },
  {
    question: "Is Mahadev Book safe and trustworthy?",
    answer:
      "The platform takes security very seriously and employs OTP to verify user logins, a process for users to keep their own credentials private, and verified payout methods. As for trust, it is also depends on the user.",
  },
  {
    question: "Can I download the Mahadev Betting App?",
    answer:
      "Yes, Mahadev betting app download links are available on the official site, complete with instructions for use on specific devices. Once the app is installed, use the permission requests and log in with your ID.",
  },
  {
    question: "How can I contact Mahadev Book customer care?",
    answer:
      "The official Mahadev Book page should have specific information about live chat, email, and the Mahadev Book customer care number 24×7, if applicable.",
  },
  {
    question: "How do I deposit and withdraw money on Mahadev Book?",
    answer:
      "Deposit: Open your wallet, choose your deposit method (UPI, net banking, card), enter your deposit amount, and wait for a confirmation and your account balance will be updated. Withdraw: Open your wallet, choose withdrawal, confirm your destination details (account and other details), confirm with OTP, and wait for processing.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Image
        src={"/"}
        alt="banner"
        height={640}
        width={1100}
        className="h-[640px] w-full"
      />
      <main className="h-fit w-[70%] mx-auto flex flex-col items-center gap-6 pb-10">
        <h1 className="text-xl md:text-3xl font-medium text-center">
          Join Our Mahadev Book Family – Login & Play Online Today
        </h1>
        <p className="w-full md:w-[80%] text-center mt-6">
          We, Mahadev Book is one of the top notch online betting & Gaming
          official website in India. We offer premium betting ID to Indian
          player, who are ready to place their bet on online cricket betting,
          sports betting, casino gaming, horse betting with winning tips and
          strategies. Get 24/7 customer support team. Rated ⭐⭐⭐⭐4.8
          <br /> Our Mahadev Book is an account-based system designed for online
          gamers who value a consistent experience, simple steps, and an
          easy-to-understand gaming dashboard. Create a Mahadev Book ID when you
          register for a new gaming account, log in, add funds to your wallet,
          select a sport or casino game, place your wager, and withdraw your
          money using easy-to-understand payment methods. Our online betting
          site is simple to use and navigate. New players can open a demo ID and
          place their first wager right away!
        </p>
        <button className="px-4 py-2 rounded-lg bg-yellow-500 text-black font-medium hover:scale-95 hover:bg-gray-500 transition-transform cursor-pointer">
          Get Your ID Now
        </button>

        <div className="h-fit w-fit rounded-2xl bg-linear-to-r from-red-500 to-blue-500">
          <form className="h-[460px] w-[540px] rounded-2xl px-8 py-10 flex flex-col gap-10 bg-black hover:scale-95 transition-transform">
            <h2 className="text-xl font-medium text-center mt-8">
              Access Your Mahadev Book Official Account Here
            </h2>
            <div className="flex items-center rounded-xl px-4 bg-gray-900">
              <MdAlternateEmail />
              <input
                type="text"
                placeholder="Username"
                className="h-12 w-full px-4 rounded-xl bg-gray-900 outline-none"
              />
            </div>
            <div className="flex items-center rounded-xl px-4 bg-gray-900 -mt-4">
              <IoMdLock />
              <input
                type="password"
                placeholder="Password"
                className="h-12 w-full px-4 rounded-xl bg-gray-900 outline-none"
              />
            </div>

            <div className="w-full grid grid-cols-1 justify-center gap-4">
              <div className="grid grid-cols-2 gap-4">
                <button className="px-8 py-2 rounded-lg bg-gray-900 hover:bg-black transition-transform cursor-pointer">
                  Login
                </button>
                <button className="px-8 py-2 rounded-lg bg-gray-900 hover:bg-black transition-transform cursor-pointer">
                  Sign Up
                </button>
              </div>
              <button className="w-full px-8 py-2 rounded-lg bg-gray-900 hover:bg-red-700 transition-transform cursor-pointer">
                Forget Password
              </button>
            </div>
          </form>
        </div>

        <section className="w-[80%] flex flex-col items-center gap-10">
          <div className="grid grid-cols-2 gap-8">
            <div className="w-[520px]">
              <h2
                className="text-xl font-medium text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-2
              "
              >
                Who We Are at Mahadev Book
              </h2>
              <p className="text-gray-200">
                You can safely log in and enjoy sports betting, live casino
                games, poker, slots, and card games at Mahadev Book, a reputable
                online gaming and betting site in India. Every day, players can
                enjoy a seamless and enjoyable gaming experience thanks to the
                platform’s simple, secure, and user-friendly design. <br /> It’s
                simple to get started: open an account with Mahadev Book,
                deposit money using safe payment methods, and begin placing bets
                on your preferred casino or sports games. With just a few
                clicks, you can withdraw your winnings at any time and track
                your wins in real time. For all Indian gamers, Mahadev Book
                offers quick, secure, and enjoyable online betting.
              </p>
            </div>
            <div className="h-full w-full bg-red-800"></div>
          </div>
          <div className="grid grid-cols-1">
            <div className="w-full">
              <h2
                className="text-xl font-medium text-amber-500 px-4 py-2 text-center border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-2
              "
              >
                Mahadev Book Official - Trusted and Legal Platform
              </h2>
              <p className="text-gray-200">
                Welcome to the reliable and secure online betting platform,
                Mahadev Book Official Platform. As the official website, we
                offer consumers looking for trustworthy gaming services a
                flawless experience. Use the official login to access your
                account at any time, and securely and effectively manage your
                official ID. <br /> Mahadev Book is the go-to option for both
                seasoned and novice bettors because our platform guarantees that
                all transactions and gameplay are secure. With total peace of
                mind, take advantage of a variety of games, live betting, and
                real-time updates. Because your trust and security are our top
                priorities, stay up to date on promotions, updates, and safe
                betting on the official Mahadev Book website.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div>
              <h2
                className="text-xl font-medium text-amber-500 px-4 py-2 text-center border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-2
              "
              >
                Why We’re the #1 Gaming Platform in the Market
              </h2>
              <p className="text-gray-200">
                Indian Online Gamers appreciate reliability, speed, and
                transparency. Gamers want a seamless login, consistent display
                of odds, and a predictable time-table for payout; The following
                key reasons are often cited by users:
              </p>
              <ol className="list-disc px-6 mt-4 grid grid-cols-1 gap-2">
                <li>
                  Easy sign-up and straightforward process to make a Mahadev
                  Book ID
                </li>
                <li>
                  {" "}
                  A single gaming dashboard for balances, open bets and
                  transaction history
                </li>
                <li>
                  Availability across all cricket bet options, football bet
                  markets, tennis bet lines and kabaddi
                </li>
                <li>
                  {" "}
                  A casino area with games users is already familiar with in
                  case you need a short session
                </li>
                <li>
                  Mobile availability via the app in case you are at a live
                  match on match nights
                </li>
                <li>
                  Support channels to help guide new users through
                  deposits/withdrawals
                </li>
              </ol>
            </div>
          </div>
          <div className="h-28 w-full text-center bg-red-900">banner</div>
          <div className="grid grid-cols-2 gap-8">
            <div className="w-[520px]">
              <h2
                className="text-xl font-medium text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-2
              "
              >
                New to Mahadev Book? Register Your Account Now
              </h2>
              <p className="text-gray-200">
                To Register your New Account of Mahadev Book is easy Process:
              </p>
              <ol className="list-decimal px-6 text-lg font-normal grid grid-cols-1 gap-2 mt-4">
                <li>
                  Open the app or the official gaming website of Mahadev Book.
                </li>
                <li>Enter the Mahadev book Register page</li>
                <li>
                  Complete the Information, and set the password and submit. Get
                  OTP if required as additional security.
                </li>
                <li>Now login Your Account by using ID and Password</li>
              </ol>
              <button className="px-6 py-2 bg-lime-800 mt-6 rounded-md cursor-pointer hover:scale-95 transition-transform">
                Register Mahadev Book Account
              </button>
            </div>
            <div className="h-full w-full bg-red-800"></div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="w-[520px]">
              <h2
                className="text-xl font-medium text-amber-500 text-center px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-2
              "
              >
                Forget Login Password? Reset Here
              </h2>
              <p className="text-gray-200">
                If you’ve forgotten your Mahadev Book login password, don’t
                worry! You can easily reset it and regain access to your account
                in just a few steps.
              </p>
              <p className="text-xl mt-4">How to Reset Your Password:</p>
              <ol className="list-decimal px-6 text-lg font-normal grid grid-cols-1 gap-2 mt-4">
                <li>
                  Open the app or the official gaming website of Mahadev Book.
                </li>
                <li>Enter the Mahadev book Register page</li>
                <li>
                  Complete the Information, and set the password and submit. Get
                  OTP if required as additional security.
                </li>
                <li>Now login Your Account by using ID and Password</li>
              </ol>
              <button className="px-6 py-2 bg-lime-800 mt-6 rounded-md cursor-pointer hover:scale-95 transition-transform">
                Mahadev Book Account Password Reset
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="w-[520px]">
              <h2
                className="text-xl font-medium text-amber-500 text-center px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl my-2
              "
              >
                Mahadev Book App - Download Now
              </h2>
              <h3 className="font-medium text-lg text-gray-200 my-2">
                Mahadev Book MOBILE APP ( New Update – November 2025)
              </h3>
              <p>
                India’s Highest-Rated Gaming Experience Rated ⭐⭐⭐⭐4.8 Stars
                · Over 1 Million Installs Claim ₹25 Free Bonus Instantly on App
                Download!
              </p>
              <p className="text-lg mt-2 font-medium">Standout Features:</p>
              <ul className="px-6 list-disc text-lg font-normal grid grid-cols-1 gap-2 my-2">
                <li>
                  Create fantasy teams and place bets instantly with just one
                  tap
                </li>
                <li>Receive real-time match notifications via push alerts</li>
                <li>
                  Enjoy secure logins using fingerprint or face recognition
                </li>
                <li>
                  Experience smoother, quicker gameplay than the mobile website
                </li>
                <li>Access your play and transaction history even offline</li>
                <li>Unlock exclusive bonuses and special app-only offers</li>
              </ul>
              <p className="text-xl font-medium my-2">App Recommendation:</p>
              <p>
                Android 5.0+ | iOS 11.0+ <br /> App Size: 25 MB <br /> Desktop –
                Windows & Mac (64-bit) Recommended.
              </p>
              <p className="my-2 font-medium">
                Scan the QR Code for Direct App Download
              </p>

              <div className="size-40 bg-red-800"></div>

              <button className="px-6 py-2 bg-green-500 mt-6 rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2">
                <FaAndroid /> Play Now – Download Android App
              </button>
            </div>
            <div className="h-96 w-full bg-red-700"></div>
          </div>
          <div className="grid grid-cols-1">
            <div className="w-full">
              <h2
                className="text-xl font-medium text-amber-500 px-4 py-2 text-center border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl my-4
              "
              >
                We’ve Upgraded the Mahadev Book App – See What’s New for
                November 2025
              </h2>
              <p className="text-gray-200 my-2">
                The November 2025 Mahadev Book App update introduces a faster,
                smarter, and more secure betting experience. From enhanced
                cricket dashboards to instant wallet transactions, every feature
                is designed to give bettors in India smoother gameplay and
                real-time control. ( Effective from November 3rd 2025 )
              </p>
              <h3 className="text-xl font-semibold">
                1. Revamped Interface for Faster Navigation
              </h3>
              <p className="text-gray-200 my-4">
                {" "}
                The design now focuses on speed, simplicity, and smooth
                navigation, allowing users to place bets in just a few taps.
              </p>
              <h3 className="text-xl font-semibold">
                2. Instant Login with OTP and Verified ID
              </h3>
              <p className="text-gray-200 my-4">
                {" "}
                Go to the profile or account settings and select “Verify
                Account.”
              </p>
              <h3 className="text-xl font-semibold">
                3. Advanced Cricket Betting Dashboard
              </h3>
              <p className="text-gray-200 my-4">
                {" "}
                Real-time match analytics, Dynamic odds display, Multi-bet slip,
                Quick cash-out.
              </p>
              <h3 className="text-xl font-semibold">
                4. New Live Casino Experience
              </h3>
              <p className="text-gray-200 my-4">
                {" "}
                New Casino Rooms, Instant Table Switch, Win History Panel.
              </p>
              <h3 className="text-xl font-semibold">
                5. Faster Deposits and Withdrawals
              </h3>
              <p className="text-gray-200 my-4">
                {" "}
                The November 2025 update introduces next-generation payment
                integration. Built-in AI fraud detection keeps every transaction
                safe.
              </p>
              <h3 className="text-xl font-semibold">
                6. In-App Customer Support & WhatsApp Helpdesk
              </h3>
              <p className="text-gray-200 my-4">
                {" "}
                Mahadev Book takes pride in offering 24/7 customer support, and
                the 2025 version makes it even more accessible. Ticket Tracking:
                Monitor your support requests and get quick resolutions.
              </p>
              <h3 className="text-xl font-semibold">
                6. Personalized Betting Notifications
              </h3>
              <p className="text-gray-200 my-4">
                {" "}
                The November update allows users to customize notifications
                based on their favourite sports, teams, or bet types. Cricket
                Score Alerts, Casino Promotions, Responsible Gaming Reminders.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="w-full">
              <h2
                className="text-xl font-medium text-amber-500 px-4 py-2 text-center border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl my-4
              "
              >
                Mahadev Book Account Verification Process
              </h2>
              <p className="text-gray-200 my-2">
                To ensure a safe and secure betting platform, Mahadev Book
                requires all users to verify their accounts. The process is
                simple, fast, and designed to protect your funds and personal
                information. Follow these steps to complete your account
                verification smoothly: ( Updated on November 3rd 2025 )
              </p>
              <h3 className="text-xl font-semibold">
                1. Log in to Your Account
              </h3>
              <p className="text-gray-200 my-4">
                {" "}
                Use your registered credentials to access your Mahadev Book
                account.
              </p>
              <h3 className="text-xl font-semibold">
                2. Access Verification Section
              </h3>
              <p className="text-gray-200 my-4">
                {" "}
                Go to the profile or account settings and select “Verify
                Account.”
              </p>
              <h3 className="text-xl font-semibold">3. Submit Documents</h3>
              <p className="text-gray-200 my-4">
                {" "}
                Upload valid identity proof (Aadhaar, PAN card, or passport) and
                address proof if required.
              </p>
              <h3 className="text-xl font-semibold">
                4. Verify Contact Details
              </h3>
              <p className="text-gray-200 my-4">
                {" "}
                Confirm your registered mobile number and email through OTP
                verification.
              </p>
              <h3 className="text-xl font-semibold">5. Wait for Approval</h3>
              <p className="text-gray-200 my-4">
                {" "}
                The Mahadev Book team reviews your documents, usually within
                24–48 hours.
              </p>
              <h3 className="text-xl font-semibold">
                6. Account Verified Successfull
              </h3>
              <p className="text-gray-200 my-4">
                {" "}
                Once approved, you’ll receive a confirmation, and your account
                will be fully functional for deposits, withdrawals, and betting.{" "}
              </p>
              <p className="text-gray-200 my-4">
                {" "}
                Completing the verification process ensures faster withdrawals,
                secure transactions, and uninterrupted access to all games and
                betting options. Always provide authentic documents to avoid
                delays and enjoy a seamless Mahadev Book experience.
              </p>
            </div>
          </div>
          <div className="w-full">
            <h2
              className="text-xl font-medium text-amber-500 px-4 py-2 text-center border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl my-4
              "
            >
              Mahadev Book Sports Games – Play and Enjoy
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="w-full border-2 rounded-xl p-4 border-amber-500 text-gray-200">
                <h3 className="mb-2 text-white">🏏 Online Cricket Betting</h3>
                <p>Best Odds on Cricket Betting</p>
                <ul className="text-sm my-1">
                  <li> ✓ Bet on Favourite Cricket Team</li>
                  <li> ✓ Live Bet on Each Over, Win Toss</li>
                  <li> ✓ Bet on Top Batsman, Top Bowler.</li>
                  <li> ✓ Bet on Tournament Champion, Series Winner</li>
                  <li> ✓ Man of the Match, Innings, In-play betting</li>
                  <li> ✓ Bet on Favourite Cricket Team</li>
                </ul>
                <button className="px-6 py-2 border-2 border-amber-500 mt-4 rounded-md cursor-pointer hover:scale-95 transition-transform">
                  Get Cricket ID & Bet Now
                </button>
              </div>
              <div className="w-full border-2 rounded-xl p-4 border-amber-500 text-gray-200">
                <h3 className="mb-2 text-white">Football Betting</h3>
                <p>
                  Football offers activity throughout the whole year. Simplicity
                  is key when you start betting on football for the first time.
                  Action occurs at the leagues and tournament levels. Common
                  bets in football have been match result
                </p>
                <ul className="text-sm my-1">
                  <li> ✓ football have been match result</li>
                  <li> ✓ Bet on over/under total goals scored</li>
                  <li> ✓ Bet on both teams to score</li>
                  <li> ✓ Bet on halftime/fulltime outcomes</li>
                </ul>
                <button className="px-6 py-2 border-2 border-amber-500 mt-4 rounded-md cursor-pointer hover:scale-95 transition-transform">
                  Bet Now
                </button>
              </div>
              <div className="w-full border-2 rounded-xl p-4 border-amber-500 text-gray-200">
                <h3 className="mb-2 text-white">Horse Race</h3>
                <p>
                  Best Odds on Horse Race Betting Experience peer-to-peer
                  betting with up to 20% better odds!
                </p>
                <ul className="text-sm my-1">
                  <li>
                    {" "}
                    ✓ Bet on Exacta, Win, Trifecta, Superfecta, Quinella, Place.
                  </li>
                  <li> ✓ Each-way, Place bet, Quinella bet</li>
                  <li> ✓ Free live Horse race streaming </li>
                  <li>
                    {" "}
                    ✓ Bet Now & Cash-out anytime feature for instant control
                  </li>
                </ul>
                <button className="px-6 py-2 border-2 border-amber-500 mt-4 rounded-md cursor-pointer hover:scale-95 transition-transform">
                  Bet on Horse Race Now
                </button>
              </div>
              <div className="w-full border-2 rounded-xl p-4 border-amber-500 text-gray-200">
                <h3 className="mb-2 text-white">Kabaddi Betting</h3>
                <p>
                  Since kabaddi is so fast a planned budget is helpful. Create
                  per match limits and adhere to them.
                </p>
                <ul className="text-sm my-1">
                  <li> ✓ Bet on Match Winner (Moneyline/1X2)</li>
                  <li> ✓ Half-Time/Full-Time Result</li>
                  <li>
                    {" "}
                    ✓ Bet on Total Points (Over/Under), Total Team Points,
                    Double Points
                  </li>
                  <li>
                    {" "}
                    ✓ Bet on Top Riders, Top Defender (Top Tackler), Player
                    Total Points
                  </li>
                </ul>
                <button className="px-6 py-2 border-2 border-amber-500 mt-4 rounded-md cursor-pointer hover:scale-95 transition-transform">
                  Get ID & Bet Now
                </button>
              </div>
              <div className="w-full border-2 rounded-xl p-4 border-amber-500 text-gray-200">
                <h3 className="mb-2 text-white">Tennis</h3>
                <p>
                  Tennis is direct with its action and very personal. each match
                  gets a lot of attention, and every tournament or daily tour
                  can be more of an option or consideration in the future.
                </p>
                <ul className="text-sm my-1">
                  <li> ✓ Bet on Total Games/Sets (Over/Under)</li>
                  <li> ✓ Bet on Futures/Outright Winner</li>
                  <li> ✓ Bet on Match Winner (Moneyline)</li>
                  <li> ✓ Handicap Betting</li>
                </ul>
                <button className="px-6 py-2 border-2 border-amber-500 mt-4 rounded-md cursor-pointer hover:scale-95 transition-transform">
                  Get ID & Start Bet
                </button>
              </div>
              <div className="w-full border-2 rounded-xl p-4 border-amber-500 text-gray-200">
                <h3 className="mb-2 text-white">Explore More Sports Games</h3>

                <ul className="text-sm my-1">
                  <li> ✓ Badminton</li>
                  <li> ✓ Basketball</li>
                  <li> ✓ Rugby</li>
                  <li> ✓ Hockey</li>
                  <li> ✓ VolleyBall</li>
                  <li> ✓ Boxing</li>
                </ul>
                <button className="px-6 py-2 border-2 border-amber-500 mt-4 rounded-md cursor-pointer hover:scale-95 transition-transform">
                  Explore More Games Here
                </button>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1">
            <h2
              className="text-xl font-medium text-amber-500 px-4 py-2 text-center border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl my-4
              "
            >
              Mahadev Book Live Casino Games
            </h2>
            <ul className="px-6 list-disc text-lg font-light grid grid-cols-1 gap-1 my-2">
              <li>
                <span className="font-normal">Roulette:</span> Bet on your lucky
                numbers or colors and enjoy every spin.
              </li>
              <li>
                {" "}
                <span className="font-normal">Blackjack:</span> A classic card
                game where skill meets chance.
              </li>
              <li>
                <span className="font-normal">Baccarat:</span> Quick and
                thrilling rounds for high-stakes players.
              </li>
              <li>
                <span className="font-normal">Teen Patti & Andar Bahar:</span>{" "}
                Traditional Indian favorites brought to life with live dealers.
              </li>
              <li>
                <span className="font-normal">Slots & Virtual Games:</span> Fun,
                colorful, and rewarding, perfect for casual players.
              </li>
            </ul>
            <button className="w-fit px-6 py-2 bg-green-400 mt-6 rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2">
              Get ID & Play Live Casino
            </button>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="w-[520px]">
              <h2
                className="text-xl font-medium text-amber-500 text-center px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4
              "
              >
                What is Mahadev Book ID?
              </h2>
              <p className="text-gray-200">
                Your personal betting account, Mahadev Book ID, provides you
                with immediate access to live sports markets, online casino
                games, and cricket betting.
              </p>
              <p className="text-gray-200">
                It is a special identification number needed to wager on
                football, the Indian Premier League, and other sports. You can
                safely deposit money, place bets in real time, and withdraw
                winnings from your mobile device using your Mahadev ID.
              </p>
            </div>
            <div className="h-60 w-full bg-red-700"></div>
          </div>

          <div className="w-full">
            <h2
              className="text-xl font-medium text-amber-500 text-center px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-2
              "
            >
              Choose Your Mahadev Book ID Type
            </h2>

            <div className="grid grid-cols-2 gap-8 items-center my-4">
              <div className="grid gap-4">
                {[
                  "Silevr ID(Tier 1) First Time bettor",
                  "Gold ID(Tier 1) Middle level bettors",
                  "Platinum ID(Tier 1) Export bettors",
                ].map((text) => (
                  <button
                    key={text}
                    className={`${"bg-yellow-400"} w-full text-black py-4 text-center hover:bg-yellow-400 rounded-md cursor-pointer transition-transform`}
                  >
                    {text}
                  </button>
                ))}
              </div>
              <div className="border-2 border-amber-400 rounded-xl px-6 py-4">
                <ul className="px-6 list-disc text-lg font-light grid grid-cols-1 gap-1 my-2">
                  <li> Maintain a monthly activity of ₹10,000</li>
                  <li> Earn 2% cashback on every transaction</li>
                  <li> Receive a ₹500 bonus each month</li>
                  <li>Enjoy priority customer support</li>
                  <li>Get faster withdrawals within 12 hours</li>
                </ul>
              </div>
            </div>
            <button className="px-6 py-2 mx-auto bg-green-500 mt-6 rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2">
              Get Your Mahadev ID Now
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="w-[520px]">
              <h2
                className="text-xl font-medium text-amber-500 text-center px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4
              "
              >
                How to Get Verified Mahadev Book Account ID Using WhatsApp
              </h2>
              <p className="text-gray-200">
                For all online cricket bettors, casino enthusiasts, and sports
                bettors in India, having a verified Mahadev Book account ID is
                crucial to enjoy secure betting and instant access to your
                favourite games. Verifying your account via WhatsApp is simple,
                fast, and safe.
              </p>
              <p className="text-gray-200 my-2 font-medium">
                Step-by-Step Guide:
              </p>
              <h3 className="text-xl font-semibold">Open WhatsApp:</h3>
              <p className="text-gray-200 my-4">
                {" "}
                Contact the official Mahadev Book support number provided on our
                website.
              </p>

              <h3 className="text-xl font-semibold">Send Your Details:</h3>
              <p className="text-gray-200 my-4">
                {" "}
                Share your name, mobile number, and any required ID proof
                securely
              </p>
              <h3 className="text-xl font-semibold">Verification Process:</h3>
              <p className="text-gray-200 my-4">
                {" "}
                The support team will verify your information and confirm your
                Mahadev Book account ID.
              </p>
              <h3 className="text-xl font-semibold">Start Betting:</h3>
              <p className="text-gray-200 my-4">
                {" "}
                Once verified, you can place bets on cricket matches, casino
                games, and other sports confidently.
              </p>
              <p className="text-gray-200 my-4">
                {" "}
                We recommend using only the official Mahadev Book platform to
                avoid fake sites and scams. Stay safe, bet responsibly, and
                enjoy a seamless gaming experience.
              </p>
              <p className="text-gray-200 my-4">
                {" "}
                Visit our official website to get started and connect with
                verified Mahadev Book support via WhatsApp.
              </p>
              <button className="px-6 py-2 bg-green-500 mt-6 rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2">
                Get Mahadev Book ID
              </button>
            </div>
            <div className="h-96 w-full bg-red-700"></div>
          </div>
          <div className="w-full">
            <h2
              className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4
              "
            >
              Join Us at Mahadev Book – Top Cricket ID Platform in India 2025
            </h2>
            <p className="text-gray-200 my-2">
              Welcome to the official Mahadev Book platform, where you can
              access your official ID safely and securely. We provide the
              official number, official ID and password, and the verified
              official ID link to ensure a smooth login experience. For any
              assistance, our official ID customer.
            </p>
            <p className="text-gray-200 my-2">
              You can also reach us directly via our WhatsApp number for quick
              support. Using the official Mahadev Book ID guarantees safe gaming
              and seamless access to all features. Always make sure you use the
              verified links and contact information to protect your account and
              enjoy worry-free betting and gaming on the authentic Mahadev Book
              platform.
            </p>
            <button className="px-6 py-2 bg-green-500 mt-6 mx-auto rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2">
              Get Mahadev Book Official ID
            </button>
          </div>
          <div className="w-full">
            <h2
              className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4
              "
            >
              Mahadev Book Gaming Rules and Regulations
            </h2>
            <p className="text-gray-200 my-2">
              We, Mahadev Book, fair play and transparency are our top
              priorities. Every user must follow the platform’s rules to ensure
              a safe and enjoyable betting experience.
            </p>
            <ol className="list-decimal px-6 mt-4 grid grid-cols-1 gap-2">
              <li>
                Users must register with a valid Mahadev Book ID and verify
                their details.
              </li>
              <li>
                {" "}
                Betting is allowed only for players aged 18 years and above.
              </li>
              <li>
                One account per user — multiple accounts are strictly
                prohibited.
              </li>
              <li>
                {" "}
                All bets are final once placed; no cancellations or refunds.
              </li>
              <li>
                Any fraudulent or suspicious activity will result in account
                suspension.
              </li>
              <li>
                Users must comply with local laws and platform policies at all
                times.
              </li>
            </ol>
            <button className="px-6 py-2 bg-green-500 mt-6 mx-auto rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2">
              Get Mahadev Book Official ID
            </button>
          </div>
          <div className="w-full">
            <h2
              className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4
              "
            >
              How Our Platform Works – Fair Play Is Our Priority
            </h2>
            <p className="text-gray-200 my-2">
              Discover how our Mahadev Book works: create your account, deposit
              funds, and start online gaming with live cricket betting, casino
              games, and secure, responsible play anytime, anywhere in India.
            </p>
            <div className="h-28 w-full bg-red-600"></div>
          </div>
          <div className="w-full">
            <h2
              className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4
              "
            >
              What We Offer – Key Features
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 border-2 border-amber-500 rounded-xl">
                <p className="font-medium text-lg">
                  Trusted and Verified Platform
                </p>
                Safe, authorized betting site for cricket, sports, and casino
                games.
              </div>
              <div className="p-4 border-2 border-amber-500 rounded-xl">
                <p className="font-medium text-lg">
                  Quick Mahadev Book ID Registration
                </p>
                Simple and fast signup process to start betting instantly.
              </div>
              <div className="p-4 border-2 border-amber-500 rounded-xl">
                <p className="font-medium text-lg">Multiple Payment Options</p>
                Supports Net Banking, Paytm, Google Pay, PhonePe, and IMPS for
                deposits & withdrawals.
              </div>
              <div className="p-4 border-2 border-amber-500 rounded-xl">
                <p className="font-medium text-lg">
                  Live Cricket & Sports Betting
                </p>
                Real-time odds, match updates, and seamless live betting
                experience.
              </div>
              <div className="p-4 border-2 border-amber-500 rounded-xl">
                <p className="font-medium text-lg">
                  Mobile-Friendly App Access
                </p>
                Lightweight app for Android and iOS to bet anytime, anywhere.
              </div>
              <div className="p-4 border-2 border-amber-500 rounded-xl">
                <p className="font-medium text-lg">
                  Secure Withdrawals & Transactions
                </p>
                Fast, authorized, and risk-free payout process for verified
                players.
              </div>
            </div>
          </div>
          <div className="w-full">
            <h2
              className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4
              "
            >
              How Our Platform Works – Fair Play Is Our Priority
            </h2>
            <p className="text-gray-200 my-2">
              Discover how our Mahadev Book works: create your account, deposit
              funds, and start online gaming with live cricket betting, casino
              games, and secure, responsible play anytime, anywhere in India.
            </p>
            <div className="h-28 w-full bg-red-600"></div>
          </div>
          <div className="w-full">
            <h2
              className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4
              "
            >
              We Prioritize Your Safety and Legal Compliance
            </h2>
            <p className="text-gray-200">
              We, Mahadev Book, is a secure and legal online gaming platform in
              India. It protects users with strict verification and robust data
              safety measures. We Operating under Indian laws and responsible
              gaming standards, the platform lets users register, deposit, and
              play with confidence. With reliable payment methods and fair play
              systems, Mahadev Book ensures a safe and trustworthy betting
              experience.
            </p>
          </div>
          <div className="w-full">
            <h2
              className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4
              "
            >
              Our Mahadev Book Gameplay Mode
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
                  How to Deposit Fund
                </h2>
                <p className="font-medium">
                  Depositing money here is simple, controlled, and regular:
                </p>
                <ol className="list-disc px-6 mt-4 grid grid-cols-1 gap-2">
                  <li>
                    Log into your Mahadev book account and confirm your wallet.
                  </li>
                  <li>
                    {" "}
                    Select a payment method (e.g., UPI, credit card, bank
                    transfer).
                  </li>
                  <li>
                    Complete the payment amount that is in your personal budget.
                  </li>
                  <li>
                    {" "}
                    Verify and wait for the funds when they are received.
                  </li>
                  <li>Complete the payment step.</li>
                  <li>Complete the wallet confirmation step.</li>
                  <li>
                    {" "}
                    Keep all receipts, along with any transaction ID’s for your
                    record keeping.
                  </li>
                </ol>
              </div>
              <div className="w-full">
                <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
                  How to Withdraw Cash
                </h2>
                <p className="font-medium">
                  Following detailed verification of a withdrawal is important
                  to ensure the safety of the account:
                </p>
                <ol className="list-disc px-6 mt-4 grid grid-cols-1">
                  <li>
                    Open your wallet and select withdraw, after checking the
                    details compare withdrawal method.
                  </li>
                  <li>
                    {" "}
                    Enter the amount to withdraw, then subsequently verify the
                    process with an OTP.
                  </li>
                  <li>
                    Processing time for your withdrawal ultimately depends on
                    withdrawal method and/or volume.
                  </li>
                  <li>
                    {" "}
                    To minimize any delays ensure all destination details are
                    precise.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h2
              className="text-2xl font-medium text-center text-amber-500 px-4 py-2 rounded-bl-3xl rounded-tr-3xl
              "
            >
              Our Safe and Easy Payment Options
            </h2>
            <p className="text-gray-200 text-center -mt-2">
              We Support Easy, Trusted Payment Options for Your Convenience
            </p>
            <div className="h-28 w-full bg-red-700 mt-4"></div>
          </div>

          <div className="w-full">
            <h2
              className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4
              "
            >
              Login to Your Mahadev BookAccount
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
                  Mahadev Book 247 Login
                </h2>
                <p className="text-gray-200 my-2">
                  Access your Mahadev Book 247 account quickly and securely
                  using your registered email ID and password. Our platform
                  delivers a seamless login experience, letting you start
                  betting on your favourite sports, casino games, and live
                  events in seconds.
                </p>
                <p className="text-gray-200 my-2">
                  Not a member yet? Register now and join India’s most trusted
                  online gaming community. Create your free Mahadev Book 247
                  account, claim exciting bonuses, and explore a wide range of
                  live betting options. Play safely, stay responsible, and enjoy
                  the excitement of real-time gaming on your official and
                  verified platform.
                </p>
                <button className="px-6 py-2 bg-green-500 mt-6 mx-auto rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2">
                  Join Mahadev Book 247
                </button>
              </div>
              <div className="w-full">
                <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
                  Mahadev Book Club Login
                </h2>
                <p className="text-gray-200 my-2">
                  Access your Mahadev Book Club account quickly and securely
                  using your registered email ID and password. Our platform
                  ensures a smooth login experience, letting you start betting
                  on your favorite sports, casino games, and live events in
                  seconds.
                </p>
                <p className="text-gray-200 my-2">
                  Not a member yet? Register now and join India’s most trusted
                  online gaming community. Create your free Mahadev Book Club
                  account, claim exciting bonuses, and explore a wide variety of
                  live betting options. Play safely, enjoy responsibly, and
                  experience the thrill of real-time gaming on your official and
                  verified Mahadev Book Club platform.
                </p>
                <button className="px-6 py-2 bg-green-500 mt-6 mx-auto rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2">
                  Join Mahadev Book Club
                </button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              Evolution of Mahadev Book Predictions – Watch. Predict. Win.
            </h2>
            <p className="text-gray-200 my-2">
              Our Mahadev Book journey demonstrates how it has developed into
              one of India’s most reliable online betting sites. A large
              selection of games, safe transactions, and easy navigation are all
              provided by the official Mahadev Book website. Sports betting,
              live casino, and cricket betting are all accessible to Indian
              users in a fun and safe manner.
            </p>
            <p className="text-gray-200 my-2">
              Over the years, our players’ prediction methods have changed.
              Users previously relied solely on simple match statistics. To
              increase winning odds, Mahadev Book predictions now offer in-depth
              team analysis, professional advice, and real-time updates. In the
              same way, Mahadev Book Club forecasts help players make better
              decisions in football, cricket, and other sports.
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              Inside Our Story: The Rise of Mahadev Book in India
            </h2>
            <p className="text-gray-200 my-2">
              We, Mahadev Book, are one of India’s most trusted online betting
              ID providers, offering a smooth and secure gaming experience for
              every player. From cricket, football, tennis, to popular casino
              games, you can enjoy safe and fast gameplay on our platform. With
              live cricket betting, you can place bets in real-time while the
              match is happening, all with your own betting ID.
            </p>
            <p className="text-gray-200 my-2">
              Our Mahadev Book online site is made for Indian players who want
              simple access, safe UPI payments, and quick customer support.
              Whether it’s a big online cricket betting or a daily online sports
              event, you’ll always find exciting betting options here.
            </p>
            <p className="text-gray-200 my-2">
              Getting started is easy – sign up today on the Mahadev Book gaming
              website and claim your demo betting ID to try betting before you
              invest real money. Experience sports betting the safe and
              enjoyable way.
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              Our Players Made Us the Best Gaming Platform of 2025
            </h2>
            <p className="text-gray-200">
              We, Mahadev Book, has been honored as the Best Online Gaming
              Platform of 2025 by the Indian Online Gaming Association (IOGA).
              This recognition comes for its easy-to-use interface, secure
              gaming platform, and wide range of options, including live casino
              games and cricket betting. Known for fast payouts and fair play,
              Mahadev Book continues to lead the online gaming industry in
              India, earning the trust and loyalty of players nationwide.
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              We’ve Earned the Trust of Over 50,000 Players Across India
            </h2>
            <p className="text-gray-200 my-2">
              Mahadev Book began its journey in India with a simple goal – to
              provide a safe, transparent, and user-friendly online gaming and
              betting platform. Since its launch, Mahadev Book has earned the
              trust of players by offering secure accounts, fast payments, and
              24/7 customer support.
            </p>
            <p className="text-gray-200 my-2">
              Indian users rely on Mahadev Book because it blends advanced
              technology with reliability, making online gaming smooth and
              enjoyable. From cricket betting to live casino games, Mahadev Book
              has built a strong community of players who value fair play and
              trust. Today, it proudly stands as one of India’s leading online
              gaming platforms.
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              We Mahadev Book Trusted Brand
            </h2>
            <p className="text-gray-200 my-2">
              Mahadev Book is a recognized online gaming and betting brand that
              operates under official ownership and registered trademark rights.
              The platform is built to provide users with a secure and trusted
              betting experience in India. With its official trademark, Mahadev
              Book ensures authenticity, reliability, and complete protection
              against duplicate or fake platforms.
            </p>
            <p className="text-gray-200 my-2">
              Users can confidently register, log in, and enjoy safe gaming
              services knowing they are on the original site. The ownership and
              trademark of Mahadev Book highlight its credibility, making it a
              preferred choice for online betting enthusiasts across the
              country.
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              Meet Our Team Behind Mahadev Book
            </h2>
            <p className="text-gray-200 my-2">
              At Mahadev Book, we believe a strong platform is built by a strong
              team. Our dedicated professionals work round the clock to provide
              users with a secure, transparent, and enjoyable betting
              experience. From customer support experts to technical
              specialists, every member of the Mahadev Book team focuses on
              innovation and trust. Together, we ensure that players in India
              get the best services, seamless gameplay, and a platform they can
              always rely on.
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              Mahadev Book Football Betting – Place Bets Online with Ease
            </h2>
            <p className="text-gray-200 my-2 text-center">
              Mahadev Book is one of India’s trusted platforms for online
              football betting. Whether you are a fan of the Premier League, La
              Liga, or local tournaments, Mahadev Book makes it easy to place
              bets safely and quickly. With a verified Mahadev Book ID, users
              can enjoy real-time updates, live match betting, and secure
              transactions. The platform is designed for both beginners and
              experienced players, offering an intuitive interface and 24/7
              customer support. Start your football betting journey with Mahadev
              Book today and experience a reliable, exciting, and fully secure
              online betting platform.
            </p>
            <button className="px-6 py-2 mx-auto bg-green-500 mt-6 rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2">
              Register Account & Bet Now
            </button>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              We Bring You the Thrill of Horse Race Betting
            </h2>
            <p className="text-gray-200 my-2 text-center">
              Mahadev Book is a trusted platform for horse race betting in
              India. Whether you are a beginner or an experienced bettor,
              Mahadev Book offers a safe and easy-to-use platform for placing
              bets on your favourite races. With a verified Mahadev Book ID, you
              can enjoy fast deposits, quick withdrawals, and secure
              transactions. The platform provides real-time updates, live race
              options, and expert tips to enhance your betting experience. Start
              your journey with Mahadev Book today, experience thrilling horse
              racing action, and make the most of India’s trusted online betting
              platform.
            </p>
            <button className="px-6 py-2 mx-auto bg-green-500 mt-6 rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2">
              Sign Up & Bet on Horse
            </button>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              We Bring You Real-Time Tennis Odds and Insights
            </h2>
            <p className="text-gray-200 my-2 text-center">
              Mahadev Book is one of India’s trusted platforms for online sports
              betting, and tennis fans can enjoy an exciting experience here.
              With Mahadev Book, you can place bets on major tennis tournaments
              like Wimbledon, US Open, Australian Open, and French Open. The
              platform provides real-time match updates, secure transactions,
              and easy account management, making it simple for both beginners
              and experienced bettors. Creating your Mahadev Book ID and logging
              in is quick, giving you instant access to live odds and
              competitive betting options. Start your tennis betting journey
              today with Mahadev Book and enjoy safe, fun, and reliable online
              betting.
            </p>
            <button className="px-6 py-2 mx-auto bg-green-500 mt-6 rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2">
              Get ID & Bet Now
            </button>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              Join Us and Bet Smarter on Mahadev Book Poker
            </h2>
            <p className="text-gray-200 my-2 text-center">
              Mahadev Book is a trusted platform for poker game betting in
              India. It offers a safe and easy-to-use platform for both
              beginners and experienced players. With a verified Mahadev Book
              ID, you can start betting instantly and enjoy a variety of poker
              formats. The platform ensures secure transactions, fast deposits,
              and quick withdrawals, making your gaming experience smooth and
              reliable. Whether you play on mobile or desktop, Mahadev Book
              provides seamless access to live poker games. Join today, complete
              your login, and experience one of the best online poker betting
              platforms in India.
            </p>
            <button className="px-6 py-2 mx-auto bg-green-500 mt-6 rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2">
              Get ID & Bet Now
            </button>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              Our Expert Tips to Master Mahadev Book Gaming
            </h2>
            <ul className="px-6 list-disc text-lg font-normal grid grid-cols-1 gap-2 my-2">
              <li>Try setting a spending limit and stick to it.</li>
              <li>
                Do not chase losses – just stop if something does not go well in
                a session.
              </li>
              <li>
                Make sure that you are familiar with the leagues and teams and
                do not bet on random stuff.
              </li>
              <li>Make sure you read the odds before confirming the bet.</li>
              <li>
                Use the app or site you feel most comfortable with – do not feel
                rushed to do it.
              </li>
              <li>
                Consider keeping your login private, and if you feel
                uncomfortable, change the password.
              </li>
              <li>
                Look up your local laws. Don’t bet if it is unclear in your
                jurisdiction.
              </li>
              <li>
                If a withdrawal or deposit or bet looks inconsistent contact
                support.
              </li>
            </ul>
            <button className="px-6 py-2 mx-auto bg-green-500 mt-6 rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2">
              Get ID & Bet Now
            </button>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              Need Support Team? - Contact Mahadev Book Whatsapp Number
            </h2>
            <p className="text-gray-200">
              Support is always very important, especially where money is
              concerned! The official site lists contact options for Mahadev
              book customer care as well as 24×7 support channels (where
              offered), along with their email address and live chat link. The
              live chat is suitable for quick questions, while the email is best
              for document checks and keeping records! A telephone line is
              suitable for pressing issues; it is advised to have your Mahadev
              book ID and any reference numbers associated with the transactions
              so that the Mahadev book team can easily find your information.
            </p>
            <button className="px-6 py-2 mx-auto bg-green-500 mt-6 rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2">
              Contact Mahadev Book Support Team
            </button>
          </div>
          <div className="w-full p-4 bg-red-900 text-center">
            <h3 className="text-white text-xl font-medium mb-4">
              Gaming Disclaimer : (Last updated on November 3, 2025)
            </h3>
            <p className="text-gray-200">
              Playing may be addictive. This site is for entertainment purposes
              only—play at your own risk. <br /> For 18+ users only. We promote
              safe and responsible gaming—please gamble responsibly.
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              Mahadev Book Official News & Updates
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="border-2 border-yellow-600 rounded-xl">
                <div className="h-52 w-full bg-red-800 rounded-t-xl"></div>
                <p className="text-white font-medium text-lg px-4 mt-4">
                  How to Create and Verify Your Mahadev Book ID
                  <span className="text-gray-600 text-sm block font-normal">
                    November 7, 2025 No Comments
                  </span>
                </p>
                <p className="px-4 py-2 text-sm">
                  Online betting in India has become more exciting than ever —
                  and Mahadev Book is leading the way with its simple, secure,
                  and fast registration
                </p>
                <button className="text-green-600 font-medium px-4 mb-2 hover:scale-105 transition-transform">
                  Read More »
                </button>
              </div>
              <div className="border-2 border-yellow-600 rounded-xl">
                <div className="h-52 w-full bg-red-800 rounded-t-xl"></div>
                <p className="text-white font-medium text-lg px-4 mt-4">
                  Get Instant Mahadev Book ID via WhatsApp – Step-by-Step Guide
                  <span className="text-gray-600 text-sm block font-normal">
                    November 7, 2025 No Comments
                  </span>
                </p>
                <p className="px-4 py-2 text-sm">
                  Online betting in India has become more exciting than ever —
                  and Mahadev Book is leading the way with its simple, secure,
                  and fast registration
                </p>
                <button className="text-green-600 font-medium px-4 mb-2 hover:scale-105 transition-transform">
                  Read More »
                </button>
              </div>
              <div className="border-2 border-yellow-600 rounded-xl">
                <div className="h-52 w-full bg-red-800 rounded-t-xl"></div>
                <p className="text-white font-medium text-lg px-4 mt-4">
                  Mahadev Book Official Website – Register, Login & Start
                  Betting
                  <span className="text-gray-600 text-sm block font-normal">
                    November 7, 2025 No Comments
                  </span>
                </p>
                <p className="px-4 py-2 text-sm">
                  Online betting has become a favourite pastime for millions of
                  Indian players — and Mahadev Book stands at the center of it
                  all. Whether you
                </p>
                <button className="text-green-600 font-medium px-4 mb-2 hover:scale-105 transition-transform">
                  Read More »
                </button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              Mahadev Book Top Players & Reviews
            </h2>
            <div className="w-full flex gap-6 overflow-x-auto py-4">
              <div className="shrink-0 w-80 border-2 border-yellow-600 p-4 rounded-xl italic">
                "Signing up was easy, the wallet shows me every rupee—added,
                pending or won. During live cricket, I bet from my phone and bet
                with my friends. Not all days pay, so I keep a budget and when I
                am at my budget I stop betting. The certainty reassures me, and
                makes me come back."
                <span className="text-center font-medium block">
                  {" "}
                  - R. Mehta
                </span>
              </div>
              <div className="shrink-0 w-80 border-2 border-yellow-600 p-4 rounded-xl italic">
                "Signing up was easy, the wallet shows me every rupee—added,
                pending or won. During live cricket, I bet from my phone and bet
                with my friends. Not all days pay, so I keep a budget and when I
                am at my budget I stop betting. The certainty reassures me, and
                makes me come back."
                <span className="text-center font-medium block">
                  {" "}
                  - R. Mehta
                </span>
              </div>
              <div className="shrink-0 w-80 border-2 border-yellow-600 p-4 rounded-xl italic">
                "Signing up was easy, the wallet shows me every rupee—added,
                pending or won. During live cricket, I bet from my phone and bet
                with my friends. Not all days pay, so I keep a budget and when I
                am at my budget I stop betting. The certainty reassures me, and
                makes me come back."
                <span className="text-center font-medium block">
                  {" "}
                  - R. Mehta
                </span>
              </div>
              <div className="shrink-0 w-80 border-2 border-yellow-600 p-4 rounded-xl italic">
                "Signing up was easy, the wallet shows me every rupee—added,
                pending or won. During live cricket, I bet from my phone and bet
                with my friends. Not all days pay, so I keep a budget and when I
                am at my budget I stop betting. The certainty reassures me, and
                makes me come back."
                <span className="text-center font-medium block">
                  {" "}
                  - R. Mehta
                </span>
              </div>
              <div className="shrink-0 w-80 border-2 border-yellow-600 p-4 rounded-xl italic">
                "Signing up was easy, the wallet shows me every rupee—added,
                pending or won. During live cricket, I bet from my phone and bet
                with my friends. Not all days pay, so I keep a budget and when I
                am at my budget I stop betting. The certainty reassures me, and
                makes me come back."
                <span className="text-center font-medium block">
                  {" "}
                  - R. Mehta
                </span>
              </div>
              <div className="shrink-0 w-80 border-2 border-yellow-600 p-4 rounded-xl italic">
                "Signing up was easy, the wallet shows me every rupee—added,
                pending or won. During live cricket, I bet from my phone and bet
                with my friends. Not all days pay, so I keep a budget and when I
                am at my budget I stop betting. The certainty reassures me, and
                makes me come back."
                <span className="text-center font-medium block">
                  {" "}
                  - R. Mehta
                </span>
              </div>
              <div className="shrink-0 w-80 border-2 border-yellow-600 p-4 rounded-xl italic">
                "Signing up was easy, the wallet shows me every rupee—added,
                pending or won. During live cricket, I bet from my phone and bet
                with my friends. Not all days pay, so I keep a budget and when I
                am at my budget I stop betting. The certainty reassures me, and
                makes me come back."
                <span className="text-center font-medium block">
                  {" "}
                  - R. Mehta
                </span>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              Mahadev Book - Everything You Need to Know
            </h2>
            <FaqAccordion faqData={faqData} />
          </div>
        </section>
        <button className="fixed bottom-4 right-20 px-4 py-2 bg-green-500 rounded-3xl flex gap-2 items-center font-medium">
          <FaWhatsapp size={28} /> Get MahadevBook ID
        </button>
      </main>
    </div>
  );
}
