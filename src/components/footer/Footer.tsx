import React from "react";
import { Link } from "react-router-dom";
import { SiLinkedin, SiGithub } from "react-icons/si";

const socialMediaLinks = [
  { icon: SiLinkedin, url: "https://www.linkedin.com/in/wilson-gichuhi" },
  { icon: SiGithub, url: "https://github.com/Qodestackr/gis-portfolio-site" },
];

const Footer = () => {
  return (
    <footer className="flex flex-col text-white bg-[#23272F] p-4 pt-8">
      <div className="flex items-center justify-center space-x-4 md:space-x-6">
        {socialMediaLinks.map((link) =>
          link.url ? (
            <a
              key={link.url}
              href={link.url}
              className="text-xl md:text-3xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              {React.createElement(link.icon)}
            </a>
          ) : (
            <Link
              key={link?.url}
              to={link?.url}
              className="text-xl md:text-3xl"
            >
              {React.createElement(link.icon)}
            </Link>
          )
        )}
      </div>

      <p className="self-center p-2">&copy; 2023, @Qodestackr</p>
    </footer>
  );
};

export default Footer;
