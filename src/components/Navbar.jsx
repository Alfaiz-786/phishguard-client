import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="text-4xl">🛡️</div>

          <div>
            <h1 className="text-2xl font-bold text-white">PhishGuard AI</h1>

            <p className="text-xs text-cyan-300">AI-Based Phishing Detection</p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className={`px-2 py-2 rounded-xl font-medium transition duration-300 ${
              location.pathname === "/"
                ? "bg-cyan-500 text-white shadow-lg"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            Home
          </Link>

          <a
            href="#features"
            className="px-5 py-2 rounded-xl text-gray-300 hover:bg-white/10 hover:text-white transition duration-300"
          >
            Features
          </a>

          <a
            href="#about"
            className="px-5 py-2 rounded-xl text-gray-300 hover:bg-white/10 hover:text-white transition duration-300"
          >
            About
          </a>

          <Link
            to="/login"
            className={`px-5 py-2 rounded-xl font-medium transition duration-300 ${
              location.pathname === "/login"
                ? "bg-cyan-500 text-white shadow-lg"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            Login
          </Link>

          <Link
            to="/register"
            className={`px-5 py-2 rounded-xl font-medium transition duration-300 ${
              location.pathname === "/register"
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                : "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:scale-105"
            }`}
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
