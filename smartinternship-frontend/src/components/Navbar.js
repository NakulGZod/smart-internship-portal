import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 bg-black/40 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition duration-300">
          SmartInterns
        </Link>

        {/* Menu */}

        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-white">

  <li>
    <Link
      to="/"
      className="hover:text-purple-400 transition duration-300"
    >
      Home
    </Link>
  </li>

  <li>
    <Link
      to="/applications"
      className="hover:text-purple-400 transition duration-300"
    >
      My Applications
    </Link>
  </li>

  <li>
    <Link
      to="/login"
      className="hover:text-purple-400 transition duration-300"
    >
      Login
    </Link>
  </li>

  <li>
    <Link
      to="/signup"
      className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 px-5 py-2 rounded-lg transition duration-300 shadow-lg"
    >
      Sign Up
    </Link>
  </li>

</ul>
        
      </div>
    </nav>
  );
}