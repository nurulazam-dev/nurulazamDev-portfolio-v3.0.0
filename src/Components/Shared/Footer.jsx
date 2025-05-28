import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-6 py-4 bg-gray-100 text-center text-gray-600 mt-12">
      © {new Date().getFullYear()} Nurul Azam. All rights reserved.
    </footer>
  );
};

export default Footer;
