import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
  // Dynamic year
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="footer footer-center p-10 text-slate-700 bg-slate-200 shadow-lg dark:bg-slate-800  dark:text-white">
      <aside>
        <img
          className="w-32"
          src="https://i.ibb.co/bdL08Xv/footer-img.png"
          alt=""
        />
        <h2 className="text-xl lg:text-2xl font-bold">Sphere Skill Ltd.</h2>
        <p>Copyright © {currentYear} - All right reserved</p>
      </aside>
      <nav>
        <div className="flex justify-center items-center gap-2">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="react-facebook-icon text-slate-700 dark:text-white text-xl" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="react-facebook-icon text-slate-700 dark:text-white text-xl" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="react-instagram-icon text-slate-700 dark:text-white text-xl" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="react-twitter-icon text-slate-700 dark:text-white text-xl" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
