import Footer from "./Footer";
import Navbar from "./Navbar";

import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        exit={{
          opacity: 0,
          y: 100,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
