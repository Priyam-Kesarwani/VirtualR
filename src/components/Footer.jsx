import { Link } from "react-scroll";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap justify-center items-start max-w-6xl mx-auto px-4">
        {/* Resources */}
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <div className="text-neutral-300 hover:text-white">
                  <Link
                    to={link.href}
                    smooth={true}
                    duration={200}
                    spy={true}
                    offset={-80}
                  >
                    {link.text}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Platform */}
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <div className="text-neutral-300 hover:text-white">
                  <Link
                    to={link.href}
                    smooth={true}
                    duration={200}
                    spy={true}
                    offset={-80}
                  >
                    {link.text}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <div className="text-neutral-300 hover:text-white">
                  <Link
                    to={link.href}
                    smooth={true}
                    duration={200}
                    spy={true}
                    offset={-80}
                  >
                    {link.text}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
