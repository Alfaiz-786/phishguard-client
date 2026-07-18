import { useState } from "react";
import { analyzeEmail } from "../api/analyze";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const navigate = useNavigate();

  const handleAnalyze = async () => {
    if (!email.trim()) {
      alert("Please enter an email.");
      return;
    }

    try {
      setLoading(true);

      const data = await analyzeEmail(email);

      setResult(data);
    } catch (error) {
      console.log(error);
      alert("Analysis Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07111F] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full -top-32 -left-32"></div>

      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full bottom-0 right-0"></div>

      {/* Navbar */}
      <nav className="relative z-10 bg-white/10 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          {/* Logo */}
          <div>
            <h1 className="text-3xl font-bold text-white">🛡️ PhishGuard AI</h1>

            <p className="text-cyan-300 text-sm mt-1">
              AI Powered Phishing Detection System
            </p>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-gray-400 text-sm">Welcome Back</p>

              <h2 className="text-white text-xl font-bold">{user?.name}</h2>
            </div>

            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                navigate("/login", { replace: true });
              }}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:scale-105 transition duration-300 text-white font-semibold shadow-lg"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        {/* Stats Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl hover:scale-105 transition">
            <div className="text-5xl">📧</div>

            <h3 className="text-gray-400 mt-4">Emails Scanned</h3>

            <h1 className="text-5xl font-bold text-white mt-2">
              {result ? 1 : 0}
            </h1>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl hover:scale-105 transition">
            <div className="text-5xl">
              {result?.prediction === "Phishing" ? "🚨" : "🛡️"}
            </div>

            <h3 className="text-gray-400 mt-4">Threat Status</h3>

            <h1
              className={`text-3xl font-bold mt-2 ${
                result?.prediction === "Phishing"
                  ? "text-red-400"
                  : "text-green-400"
              }`}
            >
              {result ? result.prediction : "Waiting"}
            </h1>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl hover:scale-105 transition">
            <div className="text-5xl">🤖</div>

            <h3 className="text-gray-400 mt-4">AI Engine</h3>

            <h1 className="text-3xl font-bold text-cyan-400 mt-2">Online</h1>
          </div>
        </div>

        {/* Email Analyzer */}

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-white">📧 Email Analyzer</h2>

          <p className="text-gray-400 mt-2">
            Paste any suspicious email below and let PhishGuard AI analyze it.
          </p>

          <textarea
            rows={10}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Paste suspicious email here..."
            className="w-full mt-6 bg-slate-900 border border-slate-700 rounded-2xl p-5 text-white placeholder-gray-500 outline-none focus:border-cyan-400 resize-none"
          />

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-500 py-4 rounded-2xl text-white text-lg font-bold hover:scale-[1.02] transition duration-300"
          >
            {loading ? "🔄 Analyzing..." : "🚀 Analyze Email"}
          </button>
        </div>

        {/* Analysis Result */}

        {result && (
          <div className="mt-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            <div
              className={`p-6 ${
                result.prediction === "Phishing"
                  ? "bg-gradient-to-r from-red-600 to-red-500"
                  : "bg-gradient-to-r from-green-600 to-green-500"
              }`}
            >
              <h2 className="text-3xl font-bold text-white">
                AI Analysis Result
              </h2>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
                  <p className="text-gray-400">Prediction</p>

                  <h2 className="text-3xl font-bold text-white mt-3">
                    {result.prediction === "Phishing"
                      ? "🔴 Phishing"
                      : "🟢 Safe"}
                  </h2>
                </div>

                <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
                  <p className="text-gray-400">Confidence</p>

                  <h2 className="text-3xl font-bold text-cyan-400 mt-3">
                    {result.confidence}%
                  </h2>
                </div>

                <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
                  <p className="text-gray-400">Risk Score</p>

                  <h2
                    className={`text-3xl font-bold mt-3 ${
                      result.prediction === "Phishing"
                        ? "text-red-400"
                        : "text-green-400"
                    }`}
                  >
                    {result.riskScore}%
                  </h2>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex justify-between text-white mb-2">
                  <span>Threat Level</span>

                  <span>{result.riskScore}%</span>
                </div>

                <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-4 rounded-full transition-all duration-700 ${
                      result.prediction === "Phishing"
                        ? "bg-gradient-to-r from-red-500 to-red-700"
                        : "bg-gradient-to-r from-green-500 to-green-700"
                    }`}
                    style={{ width: `${result.riskScore}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
