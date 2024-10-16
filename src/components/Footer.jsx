import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-container mx-auto py-8 flex flex-col items-center">
        <p>Made With ❤️</p>
        <div className="footer-content-wrapper">
          <a target="_blank" href="https://ray-dev.vercel.app/">
           by.Ray
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
