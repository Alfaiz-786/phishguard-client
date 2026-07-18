import { FiShield, FiMail, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-screen bg-[#07111F] flex items-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-500px h-500px bg-blue-600/20 blur-[150px] rounded-full -top-32 -left-32"></div>

      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full bottom-0 right-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Section */}

        <div>
          <span className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-5 py-2 rounded-full text-sm font-semibold">
            <FiShield />
            AI Powered Cyber Security
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-white mt-8 leading-tight">
            Detect
            <span className="text-cyan-400"> Phishing Emails </span>
            Instantly
          </h1>

          <p className="text-gray-400 text-xl mt-8 leading-8">
            Protect yourself from phishing attacks using our AI-powered email
            detection system. Analyze suspicious emails in seconds with
            real-time machine learning and advanced threat intelligence.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <Link
              to="/login"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-3 hover:scale-105 transition duration-300 shadow-lg"
            >
              Analyze Email
              <FiArrowRight />
            </Link>

            <a
              href="#about"
              className="border border-cyan-500 text-cyan-300 px-8 py-4 rounded-xl hover:bg-cyan-500 hover:text-white transition duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Features */}

          <div className="grid grid-cols-2 gap-5 mt-12">
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
              <h3 className="text-cyan-400 text-2xl font-bold">99%</h3>
              <p className="text-gray-400 mt-2">Detection Accuracy</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
              <h3 className="text-cyan-400 text-2xl font-bold">24/7</h3>
              <p className="text-gray-400 mt-2">AI Protection</p>
            </div>
          </div>
        </div>

        {/* Right Section */}

        <div className="flex justify-center">
          <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                <FiMail size={28} className="text-cyan-400" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Live Email Scan
                </h2>

                <p className="text-gray-400">AI Threat Analysis</p>
              </div>
            </div>

            <div className="mt-8 bg-slate-900 rounded-2xl border border-slate-700 p-6 space-y-4">
              <p className="text-white">
                <strong className="text-cyan-400">Subject:</strong> Verify Your
                Bank Account
              </p>

              <p className="text-gray-300">Dear Customer,</p>

              <p className="text-gray-300">
                Your account has been temporarily suspended due to unusual
                activity.
              </p>

              <p className="text-red-400 font-semibold">
                Click the link below immediately to verify your identity.
              </p>
            </div>

            <div className="mt-8 bg-red-500/20 border border-red-500/30 rounded-2xl p-5">
              <h3 className="text-red-400 text-2xl font-bold">
                🚨 PHISHING DETECTED
              </h3>

              <p className="text-white mt-2">
                Confidence: <span className="font-bold">98.7%</span>
              </p>

              <div className="mt-4 h-3 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-red-500 to-red-700 w-[98%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
