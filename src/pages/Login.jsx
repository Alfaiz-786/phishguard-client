import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/auth";
import Navbar from "../components/Navbar";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      setLoading(true);

      const data = await loginUser(formData);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#07111F] flex items-center justify-center px-6 relative overflow-hidden">
        {/* Background Glow */}

        <div className="absolute w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full top-0 left-0"></div>

        <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full bottom-0 right-0"></div>

        {/* Card */}

        <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10">
          <div className="text-center">
            <div className="text-7xl mb-3">🛡️</div>

            <h1 className="text-4xl font-bold text-white">PhishGuard AI</h1>

            <p className="text-gray-300 mt-2">
              AI-Based Phishing Detection System
            </p>
          </div>

          <div className="mt-10">
            <label className="text-gray-300">Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl bg-slate-800 border border-slate-700 px-5 py-4 text-white placeholder-gray-400 outline-none focus:border-cyan-400"
            />
          </div>

          <div className="mt-6">
            <label className="text-gray-300">Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl bg-slate-800 border border-slate-700 px-5 py-4 text-white placeholder-gray-400 outline-none focus:border-cyan-400"
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full mt-8 bg-gradient-to-r from-blue-600 to-cyan-500 py-4 rounded-xl text-white font-bold text-lg hover:scale-105 transition duration-300"
          >
            {loading ? "Analyzing..." : "Login"}
          </button>

          <p className="text-center text-gray-300 mt-8">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
