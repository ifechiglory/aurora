import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close mobile menu on click
    }
  };

  const links = [
    { name: "Home", id: "hero" },
    { name: "Features", id: "features" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "footer" },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[85%] transition-all duration-500 rounded-2xl ${
        scrolled
          ? "backdrop-blur-xl bg-white/40 dark:bg-white/10 border border-white/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 relative">
        {/* Logo */}
        <div
          className="font-space text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 cursor-pointer"
          onClick={() => handleScrollTo("hero")}
        >
          Aurora<span className="text-indigo-500">.</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700 dark:text-gray-300">
          {links.map((link) => (
            <li
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className="hover:text-indigo-500 transition-colors cursor-pointer"
            >
              {link.name}
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <button
          onClick={() => handleScrollTo("pricing")}
          className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 rounded-full shadow-lg transition-all duration-300"
        >
          Get Started
        </button>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-gray-300 text-2xl"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu with animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-white/10 dark:bg-gray-900/90 backdrop-blur-md flex flex-col items-center py-6 gap-6 md:hidden rounded-b-2xl"
            >
              {links.map((link) => (
                <li
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className="text-white hover:text-indigo-400 cursor-pointer text-lg transition"
                >
                  {link.name}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
