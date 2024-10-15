import Footer from "./Footer";
import Navbar from "./Navbar";

import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <div className="bg-black">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
      >
        <Navbar />
        {children}

        <Footer />
      </motion.main>
    </div>
  );
};

export default Layout;
