import React from "react";
import { pageLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer class="section footer">
      <ul class="footer-links">
        {pageLinks.map((link) => {
          const { href, text } = link;
          return (
            <li>
              <a href={href} class="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul class="footer-icons">
        {socialLinks.map((link) => {
          const { href, icon } = link;
          return (
            <li>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                class="footer-icon"
              >
                <i class={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
