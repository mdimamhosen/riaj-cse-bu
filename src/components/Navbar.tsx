import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white shadow-lg sticky top-0 z-50">
      {/* Logo + Title */}
      <motion.div
        className="flex items-center space-x-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Barishal_University_logo.svg/1200px-Barishal_University_logo.svg.png"
          alt="University of Barishal"
          className="h-12 w-12"
        />
        <h1 className="text-xl md:text-2xl font-bold">CSE Department</h1>
      </motion.div>

      {/* Nav Links */}
      <motion.ul
        className="flex space-x-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <li>
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
        </li>
        <li>
          <Link to="/faculty" className="hover:text-yellow-400 transition">
            Faculty
          </Link>
        </li>
        <li>
          <Link to="/courses" className="hover:text-yellow-400 transition">
            Courses
          </Link>
        </li>
      </motion.ul>
    </nav>
  );
};

export default Navbar;
