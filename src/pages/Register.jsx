import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api/auth";
import Navbar from "../components/Navbar";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

  const handleRegister = async () => {
    try {
      setLoading(true);

      const data = await registerUser(formData);

      alert(data.message);

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong!");
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

        {/* Register Card */}
        <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10">
          {/* Logo */}
          <div className="text-center">
            <div className="text-7xl mb-3">🛡️</div>

            <h1 className="text-4xl font-bold text-white">PhishGuard AI</h1>

            <p className="text-gray-300 mt-2">Create your secure account</p>
          </div>

          {/* Name */}
          <div className="mt-10">
            <label className="text-gray-300">Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl bg-slate-800 border border-slate-700 px-5 py-4 text-white placeholder-gray-400 outline-none focus:border-cyan-400 transition"
            />
          </div>

          {/* Email */}
          <div className="mt-6">
            <label className="text-gray-300">Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl bg-slate-800 border border-slate-700 px-5 py-4 text-white placeholder-gray-400 outline-none focus:border-cyan-400 transition"
            />
          </div>

          {/* Password */}
          <div className="mt-6">
            <label className="text-gray-300">Password</label>

            <input
              type="password"
              name="password"
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl bg-slate-800 border border-slate-700 px-5 py-4 text-white placeholder-gray-400 outline-none focus:border-cyan-400 transition"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleRegister}
            disabled={loading}
            className="w-full mt-8 bg-gradient-to-r from-emerald-500 to-cyan-500 py-4 rounded-xl text-white font-bold text-lg hover:scale-105 hover:shadow-lg transition duration-300 disabled:opacity-70"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          {/* Footer */}
          <p className="text-center text-gray-300 mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
