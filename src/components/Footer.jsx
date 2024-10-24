import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-container mx-auto py-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold">Made With ❤️</h2>
        <div className="footer-content-wrapper">
          <a
            className="text-xl font-bold"
            target="_blank"
            href="https://ray-dev.vercel.app/"
          >
            RAY
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
