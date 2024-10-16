import React, { useLayoutEffect, Suspense } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Transitions from "./components/Transition";

const Home = React.lazy(() => import("./pages/Home"));
const Tugas = React.lazy(() => import("./pages/Tugas"));
const Jadwal = React.lazy(() => import("./pages/Jadwal"));
const Pembelajaran = React.lazy(() => import("./pages/Pembelajaran"));

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/tugas",
      element: <Tugas />,
    },
    {
      path: "/jadwal",
      element: <Jadwal />,
    },
    {
      path: "/pembelajaran/:subject", 
      element: <Pembelajaran />,
    },
    // {
    //   path: "/karya-kami",
    //   element: <KaryaKami />,
    // },
    // {
    //   path: "/contact",
    //   element: <Contact />,
    // },
  ]);

  if (!element) return null;

  return (
    // <Suspense
    //   fallback={
    //     <AnimatePresence mode="wait">
    //       <Transitions />
    //     </AnimatePresence>
    //   }
    // >
      <AnimatePresence mode="wait" initial={true}>
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    // </Suspense>
  );
}

export default App;
