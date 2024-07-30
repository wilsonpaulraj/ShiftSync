// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 w-full bg-slate-200 py-4">
      <div className="container mx-auto flex justify-between px-4">
        <div className="text-dark-text">
          <h1 className="text-xl font-bold">ShiftSync</h1>
          <p className="text-sm">© 2024 ShiftSync. All rights reserved.</p>
        </div>
        <div className="text-dark-text">
          <ul className="flex space-x-4">
            <li>
              <a href="/about" className="text-sm hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-sm hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-sm hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="text-sm hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
