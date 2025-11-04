import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="py-10 px-6 border-t border-gray-700 text-center text-gray-400 text-sm"
    >
      <nav className="flex justify-center gap-8 mb-4">
        <Link
          to="hero"
          smooth={true}
          duration={600}
          offset={-80}
          className="cursor-pointer hover:text-white transition"
        >
          Home
        </Link>
        <Link
          to="features"
          smooth={true}
          duration={600}
          offset={-80}
          className="cursor-pointer hover:text-white transition"
        >
          Features
        </Link>
        <Link
          to="pricing"
          smooth={true}
          duration={600}
          offset={-80}
          className="cursor-pointer hover:text-white transition"
        >
          Pricing
        </Link>
      </nav>
      <p>© {new Date().getFullYear()} Aurora. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
