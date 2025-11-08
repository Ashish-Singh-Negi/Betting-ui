import Image from "next/image";
import { FaAndroid, FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp, IoMdLock } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import FaqAccordion from "./components/FaqAccordion";

const faqData = [
  {
    question: "What is Winfast99?",
    answer:
      "Winfast99 provides an organized platform designed to facilitate online betting for various sports such as cricket, football, tennis, and kabaddi as well as a casino section targeting short play formats.",
  },
  {
    question: "How do I create a Winfast99 ID?",
    answer:
      "Access the official site. Click sign up. Enter your name, phone number, and email address. Follow the instructions to confirm your phone number with OTP. Create a secure password and agree to the terms.",
  },
  {
    question: "How can I login to my Winfast99 account?",
    answer:
      "Open the official site or, if you have downloaded the app, the app. Enter your Winfast99 login details (ID and Password). Complete any other verification steps such as OTP.",
  },
  {
    question: "Is Winfast99 safe and trustworthy?",
    answer:
      "The platform takes security very seriously and employs OTP to verify user logins, a process for users to keep their own credentials private, and verified payout methods. As for trust, it is also depends on the user.",
  },
  {
    question: "Can I download the Win99 Betting App?",
    answer:
      "Yes, Win99 betting app download links are available on the official site, complete with instructions for use on specific devices. Once the app is installed, use the permission requests and log in with your ID.",
  },
  {
    question: "How can I contact Winfast99 customer care?",
    answer:
      "The official Winfast99 page should have specific information about live chat, email, and the Winfast99 customer care number 24×7, if applicable.",
  },
  {
    question: "How do I deposit and withdraw money on Winfast99?",
    answer:
      "Deposit: Open your wallet, choose your deposit method (UPI, net banking, card), enter your deposit amount, and wait for a confirmation and your account balance will be updated. Withdraw: Open your wallet, choose withdrawal, confirm your destination details (account and other details), confirm with OTP, and wait for processing.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <img
        src={"/Banner.png"}
        alt="banner"
        className="w-full md:h-[600px] xl:px-10"
      />
      <main className="w-full max-w-5xl mx-auto px-1 md:px-8 py-10 flex flex-col items-center gap-2">
        <h1 className="text-lg sm:text-xl md:text-3xl font-medium text-center">
          Join Our Winfast99 Family – Login & Play Online Today
        </h1>

        <p className="w-full text-center text-sm md:text-base leading-relaxed mb-2">
          We, Winfast99 is one of the top notch online betting & Gaming official
          website in India. We offer premium betting ID to Indian player, who
          are ready to place their bet on online cricket betting, sports
          betting, casino gaming, horse betting with winning tips and
          strategies. Get 24/7 customer support team. Rated ⭐⭐⭐⭐4.8 <br />{" "}
          Our Winfast99 is an account-based system designed for online gamers
          who value a consistent experience, simple steps, and an
          easy-to-understand gaming dashboard. Create a Winfast99 ID when you
          register for a new gaming account, log in, add funds to your wallet,
          select a sport or casino game, place your wager, and withdraw your
          money using easy-to-understand payment methods. Our online betting
          site is simple to use and navigate. New players can open a demo ID and
          place their first wager right away!
        </p>

        <a
          href={`https://wa.me/447447800467`}
          className="px-6 py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:scale-95 hover:bg-gray-500 transition-transform"
        >
          Get Your ID Now
        </a>

        <div className="w-full max-w-md bg-linear-to-r from-red-500 to-blue-500 rounded-2xl p-1 mt-4">
          <form className="w-full bg-black rounded-2xl px-6 py-8 flex flex-col gap-6 hover:scale-95 transition-transform">
            <h2 className="text-lg md:text-xl font-medium text-center">
              Access Your Winfast99 Official Account Here
            </h2>

            <div className="flex items-center gap-2 rounded-xl px-4 bg-gray-900">
              <MdAlternateEmail className="text-white" />
              <input
                type="text"
                placeholder="Username"
                className="h-12 w-full px-4 rounded-xl bg-gray-900 text-white placeholder-gray-400 outline-none"
              />
            </div>

            <div className="flex items-center gap-2 rounded-xl px-4 bg-gray-900">
              <IoMdLock className="text-white" />
              <input
                type="password"
                placeholder="Password"
                className="h-12 w-full px-4 rounded-xl bg-gray-900 text-white placeholder-gray-400 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={`https://wa.me/447447800467`}
                  className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black transition-transform text-center"
                >
                  Login
                </a>
                <a
                  href={`https://wa.me/447447800467`}
                  className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black transition-transform text-center"
                >
                  Sign Up
                </a>
              </div>
              <a
                href={`https://wa.me/447447800467`}
                className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-red-700 transition-transform text-center"
              >
                Forget Password
              </a>
            </div>
          </form>
        </div>

        <section className="w-full max-w-6xl mx-auto px-4 py-10 flex flex-col items-center gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="w-full">
              <h2
                className="text-xl font-medium text-amber-500 text-center px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl my-2
              "
              >
                Who We Are at Winfast99
              </h2>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                You can safely log in and enjoy sports betting, live casino
                games, poker, slots, and card games at Winfast99, a reputable
                online gaming and betting site in India. Every day, players can
                enjoy a seamless and enjoyable gaming experience thanks to the
                platform’s simple, secure, and user-friendly design. <br /> It’s
                simple to get started: open an account with Winfast99, deposit
                money using safe payment methods, and begin placing bets on your
                preferred casino or sports games. With just a few clicks, you
                can withdraw your winnings at any time and track your wins in
                real time. For all Indian gamers, Winfast99 offers quick,
                secure, and enjoyable online betting.
              </p>
            </div>
            <img className="w-full h-full" src="/Pic1.png" alt="img" />
          </div>
          <div className="w-full">
            <div className="w-full">
              <h2
                className="text-xl font-medium text-amber-500 px-4 py-2 text-center border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-2
              "
              >
                Winfast99 Official - Trusted and Legal Platform
              </h2>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                Welcome to the reliable and secure online betting platform,
                Winfast99 Official Platform. As the official website, we offer
                consumers looking for trustworthy gaming services a flawless
                experience. Use the official login to access your account at any
                time, and securely and effectively manage your official ID.{" "}
                <br /> Winfast99 is the go-to option for both seasoned and
                novice bettors because our platform guarantees that all
                transactions and gameplay are secure. With total peace of mind,
                take advantage of a variety of games, live betting, and
                real-time updates. Because your trust and security are our top
                priorities, stay up to date on promotions, updates, and safe
                betting on the official Winfast99 website.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div>
              <h2
                className="text-xl font-medium text-amber-500 px-4 py-2 text-center border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-2
              "
              >
                Why We’re the #1 Gaming Platform in the Market
              </h2>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                Indian Online Gamers appreciate reliability, speed, and
                transparency. Gamers want a seamless login, consistent display
                of odds, and a predictable time-table for payout; The following
                key reasons are often cited by users:
              </p>
              <ol className="list-disc px-6 mt-4 space-y-2 text-sm md:text-base">
                <li>
                  Easy sign-up and straightforward process to make a Winfast99
                  ID
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
          <img src={"/FlatBanner.png"} alt="img" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="w-full">
              <h2
                className="text-xl font-medium text-amber-500 text-center px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl my-2
              "
              >
                New to Winfast99? Register Your Account Now
              </h2>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                To Register your New Account of Winfast99 is easy Process:
              </p>
              <ol className="list-decimal px-6 mt-4 space-y-2 text-sm md:text-base">
                <li>
                  Open the app or the official gaming website of Winfast99.
                </li>
                <li>Enter the Winfast99 Register page</li>
                <li>
                  Complete the Information, and set the password and submit. Get
                  OTP if required as additional security.
                </li>
                <li>Now login Your Account by using ID and Password</li>
              </ol>
              <button className="w-fit px-6 py-2 bg-lime-800 mt-6 rounded-md cursor-pointer hover:scale-95 transition-transform text-white">
                <a href={`https://wa.me/447447800467`} className="w-full">
                  Register Winfast99 Account
                </a>
              </button>
            </div>
            <img className="h-full" src={"/Pic2.png"} alt="img1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="w-full">
              <h2
                className="text-xl font-medium text-amber-500 text-center px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-2
              "
              >
                Forget Login Password? Reset Here
              </h2>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                If you’ve forgotten your Winfast99 login password, don’t worry!
                You can easily reset it and regain access to your account in
                just a few steps.
              </p>
              <p className="text-lg mt-4 text-white">
                How to Reset Your Password:
              </p>
              <ol className="list-decimal px-6 mt-4 space-y-2 text-sm md:text-base">
                <li>
                  Open the app or the official gaming website of Winfast99.
                </li>
                <li>Enter the Winfast99 Register page</li>
                <li>
                  Complete the Information, and set the password and submit. Get
                  OTP if required as additional security.
                </li>
                <li>Now login Your Account by using ID and Password</li>
              </ol>
              <button className="w-fit px-6 py-2 bg-lime-800 text-center rounded-md cursor-pointer hover:scale-95 transition-transform mt-6">
                <a href={`https://wa.me/447447800467`} className="w-full">
                  Winfast99 Account Password Reset
                </a>
              </button>
            </div>
            <div className="w-full">
              <h2
                className="text-xl font-medium text-amber-500 text-center px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-2
              "
              >
                Winfast99 Direct Login For Returning Players
              </h2>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                Easy steps to Official login your Winfast99 Account.
              </p>
              <p className="text-lg mt-4 text-white">
                How to Reset Your Password:
              </p>
              <ol className="list-decimal px-6 mt-4 space-y-2 text-sm md:text-base">
                <li>Step 1: Click the “login” button.</li>
                <li>Step 2: Enter ID & password.</li>
                <li>Step 3: Complete the OTP verification.</li>
                <li>Step 4. Click submit and successfully login.</li>
              </ol>
              <button className="w-fit px-6 py-2 bg-lime-800 mt-6 rounded-md cursor-pointer hover:scale-95 transition-transform text-white">
                <a href={`https://wa.me/447447800467`} className="w-full">
                  Winfast99 Direct Login
                </a>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="w-full">
              <h2
                className="text-xl font-medium text-amber-500 text-center px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl my-2
              "
              >
                Winfast99 App - Download Now
              </h2>
              <h3 className="font-medium text-lg text-gray-200 my-2">
                Winfast99 MOBILE APP ( New Update – November 2025)
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

              <a
                href={`https://wa.me/447447800467`}
                className="w-fit px-6 py-2 bg-green-500 text-sm text-center mt-6 rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2"
              >
                <FaAndroid /> Play Now – Download Android App
              </a>
              <a
                href={`https://wa.me/447447800467`}
                className="w-fit px-6 py-2 bg-cyan-500 text-sm text-center mt-6 rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2"
              >
                <FaAndroid /> Play Now – Download on IOS
              </a>
            </div>
            <img src={"/Pic3.png"} alt="img" />
          </div>
          <div className="w-full">
            <h2
              className="text-xl font-medium text-amber-500 px-4 py-2 text-center border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl my-4
              "
            >
              We’ve Upgraded the Winfast99 App – See What’s New for November
              2025
            </h2>
            <p className="text-gray-200 my-2">
              The November 2025 Winfast99 App update introduces a faster,
              smarter, and more secure betting experience. From enhanced cricket
              dashboards to instant wallet transactions, every feature is
              designed to give bettors in India smoother gameplay and real-time
              control. ( Effective from November 3rd 2025 )
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
              Go to the profile or account settings and select “Verify Account.”
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
              Winfast99 takes pride in offering 24/7 customer support, and the
              2025 version makes it even more accessible. Ticket Tracking:
              Monitor your support requests and get quick resolutions.
            </p>
            <h3 className="text-xl font-semibold">
              6. Personalized Betting Notifications
            </h3>
            <p className="text-gray-200 my-4">
              {" "}
              The November update allows users to customize notifications based
              on their favourite sports, teams, or bet types. Cricket Score
              Alerts, Casino Promotions, Responsible Gaming Reminders.
            </p>
          </div>
          <div className="w-full">
            <h2
              className="text-xl font-medium text-amber-500 px-4 py-2 text-center border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl my-4
              "
            >
              Winfast99 Account Verification Process
            </h2>
            <p className="text-gray-200 my-2">
              To ensure a safe and secure betting platform, Winfast99 requires
              all users to verify their accounts. The process is simple, fast,
              and designed to protect your funds and personal information.
              Follow these steps to complete your account verification smoothly:
              ( Updated on November 3rd 2025 )
            </p>
            <h3 className="text-xl font-semibold">1. Log in to Your Account</h3>
            <p className="text-gray-200 my-4">
              {" "}
              Use your registered credentials to access your Winfast99 account.
            </p>
            <h3 className="text-xl font-semibold">
              2. Access Verification Section
            </h3>
            <p className="text-gray-200 my-4">
              {" "}
              Go to the profile or account settings and select “Verify Account.”
            </p>
            <h3 className="text-xl font-semibold">3. Submit Documents</h3>
            <p className="text-gray-200 my-4">
              {" "}
              Upload valid identity proof (Aadhaar, PAN card, or passport) and
              address proof if required.
            </p>
            <h3 className="text-xl font-semibold">4. Verify Contact Details</h3>
            <p className="text-gray-200 my-4">
              {" "}
              Confirm your registered mobile number and email through OTP
              verification.
            </p>
            <h3 className="text-xl font-semibold">5. Wait for Approval</h3>
            <p className="text-gray-200 my-4">
              {" "}
              The Winfast99 team reviews your documents, usually within 24–48
              hours.
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
              delays and enjoy a seamless Winfast99 experience.
            </p>
          </div>
          <div className="w-full max-w-6xl mx-auto px-4 py-2">
            <h2
              className="text-xl md:text-2xl font-medium text-amber-500 text-center px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl my-4
              "
            >
              Winfast99 Sports Games – Play and Enjoy
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "🏏 Online Cricket Betting",
                  desc: "Best Odds on Cricket Betting",
                  features: [
                    "✓ Bet on Favourite Cricket Team",
                    "✓ Live Bet on Each Over, Win Toss",
                    "✓ Bet on Top Batsman, Top Bowler",
                    "✓ Bet on Tournament Champion, Series Winner",
                    "✓ Man of the Match, Innings, In-play betting",
                  ],
                  button: "Get Cricket ID & Bet Now",
                },
                {
                  title: "Football Betting",
                  desc: "Football offers activity throughout the whole year. Simplicity is key when you start betting on football for the first time.",
                  features: [
                    "✓ Bet on match result",
                    "✓ Bet on over/under total goals scored",
                    "✓ Bet on both teams to score",
                    "✓ Bet on halftime/fulltime outcomes",
                  ],
                  button: "Bet Now",
                },
                {
                  title: "Horse Race",
                  desc: "Best Odds on Horse Race Betting. Experience peer-to-peer betting with up to 20% better odds!",
                  features: [
                    "✓ Bet on Exacta, Win, Trifecta, Superfecta, Quinella, Place",
                    "✓ Each-way, Place bet, Quinella bet",
                    "✓ Free live Horse race streaming",
                    "✓ Cash-out anytime feature for instant control",
                  ],
                  button: "Bet on Horse Race Now",
                },
                {
                  title: "Kabaddi Betting",
                  desc: "Kabaddi is fast-paced. A planned budget is helpful. Create per match limits and stick to them.",
                  features: [
                    "✓ Bet on Match Winner (Moneyline/1X2)",
                    "✓ Half-Time/Full-Time Result",
                    "✓ Bet on Total Points, Double Points",
                    "✓ Bet on Top Riders, Top Defender, Player Total Points",
                  ],
                  button: "Get ID & Bet Now",
                },
                {
                  title: "Tennis",
                  desc: "Tennis is direct and personal. Each match gets attention, and every tournament offers betting opportunities.",
                  features: [
                    "✓ Bet on Total Games/Sets (Over/Under)",
                    "✓ Bet on Futures/Outright Winner",
                    "✓ Bet on Match Winner (Moneyline)",
                    "✓ Handicap Betting",
                  ],
                  button: "Get ID & Start Bet",
                },
                {
                  title: "Explore More Sports Games",
                  desc: "Tennis is direct and personal. Each match gets attention, and every tournament offers betting opportunities.",
                  features: [
                    "✓ Badminton",
                    "✓ Basketball",
                    "✓ Rugby",
                    "✓ Hockey",
                    "✓ VolleyBall",
                    "✓ Boxing",
                  ],
                  button: "Get ID & Start Bet",
                },
              ].map((game, idx) => (
                <div
                  key={idx}
                  className="w-full border-2 rounded-xl p-4 border-amber-500 text-gray-200 flex flex-col justify-between"
                >
                  <h3 className="mb-2 text-white text-lg font-semibold">
                    {game.title}
                  </h3>
                  <p className="text-sm md:text-base">{game.desc}</p>
                  <ul className="text-sm my-2 space-y-1">
                    {game.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/447447800467`}
                    className="w-fit px-6 py-2 border-2 border-amber-500 mt-4 rounded-md cursor-pointer hover:scale-95 transition-transform text-white"
                  >
                    {game.button}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full grid grid-cols-1">
            <h2
              className="text-xl font-medium text-amber-500 px-4 py-2 text-center border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl my-4
              "
            >
              Winfast99 Live Casino Games
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
            <a
              href={`https://wa.me/447447800467`}
              className="w-fit px-6 py-3 bg-green-500 mt-2 text-white rounded-md cursor-pointer hover:scale-95 transition-transform font-semibold flex items-center gap-2"
            >
              Get ID & Play Live Casino
            </a>
          </div>
          <div className="w-full max-w-5xl mx-auto px-4 py-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Text Block */}
              <div className="w-full">
                <h2 className="text-xl md:text-2xl font-medium text-amber-500 text-center px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
                  What is Winfast99 ID?
                </h2>
                <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-4">
                  Your personal betting account, Winfast99 ID, provides you with
                  immediate access to live sports markets, online casino games,
                  and cricket betting.
                </p>
                <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                  It is a special identification number needed to wager on
                  football, the Indian Premier League, and other sports. You can
                  safely deposit money, place bets in real time, and withdraw
                  winnings from your mobile device using your Win99 ID.
                </p>
              </div>

              {/* Visual Block */}
              <img src={"/Pic4.png"} alt="img2" />
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto px-4 py-2">
            <h2 className="text-xl md:text-2xl font-medium text-amber-500 text-center px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              Choose Your Winfast99 ID Type
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* ID Options */}
              <div className="grid gap-4">
                {[
                  "Silver ID (Tier 1) – First Time Bettor",
                  "Gold ID (Tier 2) – Mid-Level Bettor",
                  "Platinum ID (Tier 3) – Expert Bettor",
                ].map((text, idx) => (
                  <a
                    href={`https://wa.me/447447800467`}
                    key={idx}
                    className="bg-yellow-400 w-full text-black py-4 text-center rounded-md cursor-pointer hover:scale-95 hover:bg-yellow-500 transition-transform font-semibold"
                  >
                    {text}
                  </a>
                ))}
              </div>

              {/* Benefits Box */}
              <div className="border-2 border-amber-400 rounded-xl px-6 py-4 text-gray-200">
                <ul className="pl-4 list-disc text-base font-light space-y-2">
                  <li>Maintain a monthly activity of ₹10,000</li>
                  <li>Earn 2% cashback on every transaction</li>
                  <li>Receive a ₹500 bonus each month</li>
                  <li>Enjoy priority customer support</li>
                  <li>Get faster withdrawals within 12 hours</li>
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-8">
              <a
                href={`https://wa.me/447447800467`}
                className="px-6 py-3 bg-green-500 text-white rounded-md cursor-pointer hover:scale-95 transition-transform font-semibold flex items-center gap-2"
              >
                Get Your Win99 ID Now
              </a>
            </div>
          </div>

          <div className="w-full max-w-5xl mx-auto px-4 py-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Text Content */}
              <div className="w-full">
                <h2 className="text-xl md:text-2xl font-medium text-amber-500 text-center px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
                  How to Get Verified Winfast99 Account ID Using WhatsApp
                </h2>

                <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-4">
                  For all online cricket bettors, casino enthusiasts, and sports
                  bettors in India, having a verified Winfast99 account ID is
                  crucial to enjoy secure betting and instant access to your
                  favourite games. Verifying your account via WhatsApp is
                  simple, fast, and safe.
                </p>

                <p className="text-gray-200 font-medium mb-2">
                  Step-by-Step Guide:
                </p>

                {[
                  {
                    title: "Open WhatsApp:",
                    desc: "Contact the official Winfast99 support number provided on our website.",
                  },
                  {
                    title: "Send Your Details:",
                    desc: "Share your name, mobile number, and any required ID proof securely.",
                  },
                  {
                    title: "Verification Process:",
                    desc: "The support team will verify your information and confirm your Winfast99 account ID.",
                  },
                  {
                    title: "Start Betting:",
                    desc: "Once verified, you can place bets on cricket matches, casino games, and other sports confidently.",
                  },
                ].map((step, idx) => (
                  <div key={idx} className="mb-4">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-200 mt-2 text-sm md:text-base">
                      {step.desc}
                    </p>
                  </div>
                ))}

                <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-4">
                  We recommend using only the official Winfast99 platform to
                  avoid fake sites and scams. Stay safe, bet responsibly, and
                  enjoy a seamless gaming experience.
                </p>
                <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-6">
                  Visit our official website to get started and connect with
                  verified Winfast99 support via WhatsApp.
                </p>

                <a
                  href={`https://wa.me/447447800467`}
                  className="w-fit px-6 py-3 bg-green-500 text-white font-semibold rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2"
                >
                  Get Winfast99 ID
                </a>
              </div>

              {/* Visual Block */}
              <img src="/Pic5.png" alt="img" />
            </div>
          </div>
          <div className="w-full">
            <h2
              className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4
              "
            >
              Join Us at Winfast99 – Top Cricket ID Platform in India 2025
            </h2>
            <p className="text-gray-200 my-2">
              Welcome to the official Winfast99 platform, where you can access
              your official ID safely and securely. We provide the official
              number, official ID and password, and the verified official ID
              link to ensure a smooth login experience. For any assistance, our
              official ID customer.
            </p>
            <p className="text-gray-200 my-2">
              You can also reach us directly via our WhatsApp number for quick
              support. Using the official Winfast99 ID guarantees safe gaming
              and seamless access to all features. Always make sure you use the
              verified links and contact information to protect your account and
              enjoy worry-free betting and gaming on the authentic Winfast99
              platform.
            </p>
            <a
              href={`https://wa.me/447447800467`}
              className="w-fit px-6 py-2 bg-green-500 mt-6 mx-auto rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2"
            >
              Get Winfast99 Official ID
            </a>
          </div>
          <div className="w-full">
            <h2
              className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4
              "
            >
              Winfast99 Gaming Rules and Regulations
            </h2>
            <p className="text-gray-200 my-2">
              We, Winfast99, fair play and transparency are our top priorities.
              Every user must follow the platform’s rules to ensure a safe and
              enjoyable betting experience.
            </p>
            <ol className="list-decimal px-6 mt-4 grid grid-cols-1 gap-2">
              <li>
                Users must register with a valid Winfast99 ID and verify their
                details.
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
            <a
              href={`https://wa.me/447447800467`}
              className="w-fit px-6 py-2 bg-green-500 mt-6 mx-auto rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2"
            >
              Get Winfast99 Official ID
            </a>
          </div>
          <div className="w-full">
            <h2
              className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4
              "
            >
              How Our Platform Works – Fair Play Is Our Priority
            </h2>
            <p className="text-gray-200 my-2">
              Discover how our Winfast99 works: create your account, deposit
              funds, and start online gaming with live cricket betting, casino
              games, and secure, responsible play anytime, anywhere in India.
            </p>
            <img src="/FlatBanner.png" alt="img" />
          </div>
          <div className="w-full max-w-6xl mx-auto px-4 py-2">
            <h2 className="text-xl md:text-2xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-6">
              What We Offer – Key Features
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Trusted and Verified Platform",
                  desc: "Safe, authorized betting site for cricket, sports, and casino games.",
                },
                {
                  title: "Quick Winfast99 ID Registration",
                  desc: "Simple and fast signup process to start betting instantly.",
                },
                {
                  title: "Multiple Payment Options",
                  desc: "Supports Net Banking, Paytm, Google Pay, PhonePe, and IMPS for deposits & withdrawals.",
                },
                {
                  title: "Live Cricket & Sports Betting",
                  desc: "Real-time odds, match updates, and seamless live betting experience.",
                },
                {
                  title: "Mobile-Friendly App Access",
                  desc: "Lightweight app for Android and iOS to bet anytime, anywhere.",
                },
                {
                  title: "Secure Withdrawals & Transactions",
                  desc: "Fast, authorized, and risk-free payout process for verified players.",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="p-4 border-2 border-amber-500 rounded-xl bg-black text-gray-200"
                >
                  <p className="font-medium text-lg text-white mb-2">
                    {feature.title}
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <h2
              className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4
              "
            >
              We Prioritize Your Safety and Legal Compliance
            </h2>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              We, Winfast99, is a secure and legal online gaming platform in
              India. It protects users with strict verification and robust data
              safety measures. We Operating under Indian laws and responsible
              gaming standards, the platform lets users register, deposit, and
              play with confidence. With reliable payment methods and fair play
              systems, Winfast99 ensures a safe and trustworthy betting
              experience.
            </p>
          </div>
          <div className="w-full">
            <h2
              className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4
              "
            >
              Our Winfast99 Gameplay Mode
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
                  How to Deposit Fund
                </h2>
                <p className="font-medium">
                  Depositing money here is simple, controlled, and regular:
                </p>
                <ol className="list-disc px-6 mt-4 space-y-2 text-sm md:text-base">
                  <li>
                    Log into your Winfast99 account and confirm your wallet.
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
            <div className="w-full mt-4 flex text-xl md:text-3xl justify-evenly">
              <span>Paytm</span>|<span>Gpay</span>|<span>PhonePe</span>|
              <span>UPI</span>
            </div>
          </div>

          <div className="w-full">
            <h2
              className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4
              "
            >
              Login to Your Winfast99Account
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
                  Winfast99 247 Login
                </h2>
                <p className="text-gray-200 my-2">
                  Access your Winfast99 247 account quickly and securely using
                  your registered email ID and password. Our platform delivers a
                  seamless login experience, letting you start betting on your
                  favourite sports, casino games, and live events in seconds.
                </p>
                <p className="text-gray-200 my-2">
                  Not a member yet? Register now and join India’s most trusted
                  online gaming community. Create your free Winfast99 247
                  account, claim exciting bonuses, and explore a wide range of
                  live betting options. Play safely, stay responsible, and enjoy
                  the excitement of real-time gaming on your official and
                  verified platform.
                </p>
                <a
                  href={`https://wa.me/447447800467`}
                  className="w-fit px-6 py-2 bg-green-500 mt-6 mx-auto rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2"
                >
                  Join Winfast99 247
                </a>
              </div>
              <div className="w-full">
                <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
                  Winfast99 Club Login
                </h2>
                <p className="text-gray-200 my-2">
                  Access your Winfast99 Club account quickly and securely using
                  your registered email ID and password. Our platform ensures a
                  smooth login experience, letting you start betting on your
                  favorite sports, casino games, and live events in seconds.
                </p>
                <p className="text-gray-200 my-2">
                  Not a member yet? Register now and join India’s most trusted
                  online gaming community. Create your free Winfast99 Club
                  account, claim exciting bonuses, and explore a wide variety of
                  live betting options. Play safely, enjoy responsibly, and
                  experience the thrill of real-time gaming on your official and
                  verified Winfast99 Club platform.
                </p>
                <a
                  href={`https://wa.me/447447800467`}
                  className="w-fit px-6 py-2 bg-green-500 mt-6 mx-auto rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2"
                >
                  Join Winfast99 Club
                </a>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              Evolution of Winfast99 Predictions – Watch. Predict. Win.
            </h2>
            <p className="text-gray-200 my-2">
              Our Winfast99 journey demonstrates how it has developed into one
              of India’s most reliable online betting sites. A large selection
              of games, safe transactions, and easy navigation are all provided
              by the official Winfast99 website. Sports betting, live casino,
              and cricket betting are all accessible to Indian users in a fun
              and safe manner.
            </p>
            <p className="text-gray-200 my-2">
              Over the years, our players’ prediction methods have changed.
              Users previously relied solely on simple match statistics. To
              increase winning odds, Winfast99 predictions now offer in-depth
              team analysis, professional advice, and real-time updates. In the
              same way, Winfast99 Club forecasts help players make better
              decisions in football, cricket, and other sports.
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              Inside Our Story: The Rise of Winfast99 in India
            </h2>
            <p className="text-gray-200 my-2">
              We, Winfast99, are one of India’s most trusted online betting ID
              providers, offering a smooth and secure gaming experience for
              every player. From cricket, football, tennis, to popular casino
              games, you can enjoy safe and fast gameplay on our platform. With
              live cricket betting, you can place bets in real-time while the
              match is happening, all with your own betting ID.
            </p>
            <p className="text-gray-200 my-2">
              Our Winfast99 online site is made for Indian players who want
              simple access, safe UPI payments, and quick customer support.
              Whether it’s a big online cricket betting or a daily online sports
              event, you’ll always find exciting betting options here.
            </p>
            <p className="text-gray-200 my-2">
              Getting started is easy – sign up today on the Winfast99 gaming
              website and claim your demo betting ID to try betting before you
              invest real money. Experience sports betting the safe and
              enjoyable way.
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              Our Players Made Us the Best Gaming Platform of 2025
            </h2>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              We, Winfast99, has been honored as the Best Online Gaming Platform
              of 2025 by the Indian Online Gaming Association (IOGA). This
              recognition comes for its easy-to-use interface, secure gaming
              platform, and wide range of options, including live casino games
              and cricket betting. Known for fast payouts and fair play,
              Winfast99 continues to lead the online gaming industry in India,
              earning the trust and loyalty of players nationwide.
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              We’ve Earned the Trust of Over 50,000 Players Across India
            </h2>
            <p className="text-gray-200 my-2">
              Winfast99 began its journey in India with a simple goal – to
              provide a safe, transparent, and user-friendly online gaming and
              betting platform. Since its launch, Winfast99 has earned the trust
              of players by offering secure accounts, fast payments, and 24/7
              customer support.
            </p>
            <p className="text-gray-200 my-2">
              Indian users rely on Winfast99 because it blends advanced
              technology with reliability, making online gaming smooth and
              enjoyable. From cricket betting to live casino games, Winfast99
              has built a strong community of players who value fair play and
              trust. Today, it proudly stands as one of India’s leading online
              gaming platforms.
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              We Winfast99 Trusted Brand
            </h2>
            <p className="text-gray-200 my-2">
              Winfast99 is a recognized online gaming and betting brand that
              operates under official ownership and registered trademark rights.
              The platform is built to provide users with a secure and trusted
              betting experience in India. With its official trademark, Win99
              Book ensures authenticity, reliability, and complete protection
              against duplicate or fake platforms.
            </p>
            <p className="text-gray-200 my-2">
              Users can confidently register, log in, and enjoy safe gaming
              services knowing they are on the original site. The ownership and
              trademark of Winfast99 highlight its credibility, making it a
              preferred choice for online betting enthusiasts across the
              country.
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              Meet Our Team Behind Winfast99
            </h2>
            <p className="text-gray-200 my-2">
              At Winfast99, we believe a strong platform is built by a strong
              team. Our dedicated professionals work round the clock to provide
              users with a secure, transparent, and enjoyable betting
              experience. From customer support experts to technical
              specialists, every member of the Winfast99 team focuses on
              innovation and trust. Together, we ensure that players in India
              get the best services, seamless gameplay, and a platform they can
              always rely on.
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              Winfast99 Football Betting – Place Bets Online with Ease
            </h2>
            <p className="text-gray-200 my-2 text-center">
              Winfast99 is one of India’s trusted platforms for online football
              betting. Whether you are a fan of the Premier League, La Liga, or
              local tournaments, Winfast99 makes it easy to place bets safely
              and quickly. With a verified Winfast99 ID, users can enjoy
              real-time updates, live match betting, and secure transactions.
              The platform is designed for both beginners and experienced
              players, offering an intuitive interface and 24/7 customer
              support. Start your football betting journey with Winfast99 today
              and experience a reliable, exciting, and fully secure online
              betting platform.
            </p>
            <a
              href={`https://wa.me/447447800467`}
              className="w-fit px-6 py-2 mx-auto bg-green-500 mt-6 rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2"
            >
              Register Account & Bet Now
            </a>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              We Bring You the Thrill of Horse Race Betting
            </h2>
            <p className="text-gray-200 my-2 text-center">
              Winfast99 is a trusted platform for horse race betting in India.
              Whether you are a beginner or an experienced bettor, Winfast99
              offers a safe and easy-to-use platform for placing bets on your
              favourite races. With a verified Winfast99 ID, you can enjoy fast
              deposits, quick withdrawals, and secure transactions. The platform
              provides real-time updates, live race options, and expert tips to
              enhance your betting experience. Start your journey with Win99
              Book today, experience thrilling horse racing action, and make the
              most of India’s trusted online betting platform.
            </p>
            <a
              href={`https://wa.me/447447800467`}
              className="w-fit px-6 py-2 mx-auto bg-green-500 mt-6 rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2"
            >
              Sign Up & Bet on Horse
            </a>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              We Bring You Real-Time Tennis Odds and Insights
            </h2>
            <p className="text-gray-200 my-2 text-center">
              Winfast99 is one of India’s trusted platforms for online sports
              betting, and tennis fans can enjoy an exciting experience here.
              With Winfast99, you can place bets on major tennis tournaments
              like Wimbledon, US Open, Australian Open, and French Open. The
              platform provides real-time match updates, secure transactions,
              and easy account management, making it simple for both beginners
              and experienced bettors. Creating your Winfast99 ID and logging in
              is quick, giving you instant access to live odds and competitive
              betting options. Start your tennis betting journey today with
              Winfast99 and enjoy safe, fun, and reliable online betting.
            </p>
            <a
              href={`https://wa.me/447447800467`}
              className="w-fit px-6 py-2 mx-auto bg-green-500 mt-6 rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2"
            >
              Get ID & Bet Now
            </a>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              Join Us and Bet Smarter on Winfast99 Poker
            </h2>
            <p className="text-gray-200 my-2 text-center">
              Winfast99 is a trusted platform for poker game betting in India.
              It offers a safe and easy-to-use platform for both beginners and
              experienced players. With a verified Winfast99 ID, you can start
              betting instantly and enjoy a variety of poker formats. The
              platform ensures secure transactions, fast deposits, and quick
              withdrawals, making your gaming experience smooth and reliable.
              Whether you play on mobile or desktop, Winfast99 provides seamless
              access to live poker games. Join today, complete your login, and
              experience one of the best online poker betting platforms in
              India.
            </p>
            <a
              href={`https://wa.me/447447800467`}
              className="w-fit px-6 py-2 mx-auto bg-green-500 mt-6 rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2"
            >
              Get ID & Bet Now
            </a>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              Our Expert Tips to Master Winfast99 Gaming
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
            <a
              href={`https://wa.me/447447800467`}
              className="w-fit px-6 py-2 mx-auto bg-green-500 mt-6 rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2"
            >
              Get ID & Bet Now
            </a>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              Need Support Team? - Contact Winfast99 Whatsapp Number
            </h2>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              Support is always very important, especially where money is
              concerned! The official site lists contact options for Winfast99
              customer care as well as 24×7 support channels (where offered),
              along with their email address and live chat link. The live chat
              is suitable for quick questions, while the email is best for
              document checks and keeping records! A telephone line is suitable
              for pressing issues; it is advised to have your Winfast99 ID and
              any reference numbers associated with the transactions so that the
              Winfast99 team can easily find your information.
            </p>
            <a
              href={`https://wa.me/447447800467`}
              className="w-fit px-6 py-2 bg-green-500 mt-6 rounded-md cursor-pointer hover:scale-95 transition-transform flex items-center gap-2"
            >
              Contact Winfast99 Support Team
            </a>
          </div>
          <div className="w-full p-4 bg-red-900 text-center">
            <h3 className="text-white text-xl font-medium mb-4">
              Gaming Disclaimer : (Last updated on November 3, 2025)
            </h3>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              Playing may be addictive. This site is for entertainment purposes
              only—play at your own risk. <br /> For 18+ users only. We promote
              safe and responsible gaming—please gamble responsibly.
            </p>
          </div>
          <div className="w-full max-w-6xl mx-auto px-4 py-2">
            <h2 className="text-xl md:text-2xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-6">
              Winfast99 Official News & Updates
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "How to Create and Verify Your Winfast99 ID",
                  date: "November 7, 2025",
                  excerpt:
                    "Online betting in India has become more exciting than ever — and Winfast99 is leading the way with its simple, secure, and fast registration.",
                  imgUrl: "/Pic6.png",
                },
                {
                  title:
                    "Get Instant Winfast99 ID via WhatsApp – Step-by-Step Guide",
                  date: "November 7, 2025",
                  excerpt:
                    "Online betting in India has become more exciting than ever — and Winfast99 is leading the way with its simple, secure, and fast registration.",
                  imgUrl: "/Pic7.png",
                },
                {
                  title:
                    "Winfast99 Official Website – Register, Login & Start Betting",
                  date: "November 7, 2025",
                  excerpt:
                    "Online betting has become a favourite pastime for millions of Indian players — and Winfast99 stands at the center of it all.",
                  imgUrl:
                    "https://mahadevbooks.net/wp-content/uploads/2025/11/mahadev-book-Official-website-register-login-start-betting-300x200.webp",
                },
              ].map((news, idx) => (
                <div
                  key={idx}
                  className="border-2 border-yellow-600 rounded-xl overflow-hidden bg-black"
                >
                  <img src={news.imgUrl} alt="card img" />
                  <div className="px-4 py-4">
                    <p className="text-white font-medium text-lg mb-1">
                      {news.title}
                    </p>
                    <span className="text-gray-500 text-sm block font-normal mb-2">
                      {news.date} · No Comments
                    </span>
                    <p className="text-sm text-gray-300 mb-4">{news.excerpt}</p>
                    <a
                      href={`https://wa.me/447447800467`}
                      className="text-green-500 font-medium hover:scale-105 transition-transform"
                    >
                      Read More »
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-medium text-center text-amber-500 px-4 py-2 border-2 border-amber-500 rounded-bl-3xl rounded-tr-3xl mb-4">
              Winfast99 Top Players & Reviews
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
              Winfast99 - Everything You Need to Know
            </h2>
            <FaqAccordion faqData={faqData} />
          </div>
        </section>
        <a
          href={`https://wa.me/447447800467`}
          className="fixed bottom-4 right-8 px-4 py-2 bg-green-500 rounded-3xl flex gap-2 items-center font-medium"
        >
          <FaWhatsapp size={28} /> Get Win99Book ID
        </a>
      </main>
    </div>
  );
}
