import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-neutral-300 hover:text-purple-500"
              >
                <Link
                  to={item.href}
                  smooth={true}
                  duration={200}
                  spy={true}
                  offset={-80}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <div className="py-2 px-3 border rounded-md hover:bg-neutral-800 transition duration-200">
              <Link
                to="home"
                smooth={true}
                duration={200}
                spy={true}
                offset={-80}
              >
                Sign In
              </Link>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:from-orange-600 hover:to-orange-900 transition duration-200">
              <Link
                to="home"
                smooth={true}
                duration={200}
                spy={true}
                offset={-80}
              >
                Create an account
              </Link>
            </div>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link
                    to={item.href}
                    smooth={true}
                    duration={200}
                    spy={true}
                    offset={-80}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <div className="py-2 px-3 border rounded-md hover:bg-neutral-800 transition duration-200">
                <Link
                  to="home"
                  smooth={true}
                  duration={200}
                  spy={true}
                  offset={-80}
                >
                  Sign In
                </Link>
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:from-orange-600 hover:to-orange-900 transition duration-200">
                <Link
                  to="home"
                  smooth={true}
                  duration={200}
                  spy={true}
                  offset={-80}
                >
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
