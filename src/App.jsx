import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Companies from "./components/Companies";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Ensure the component is mounted before starting animations
    setIsReady(true);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return <div className="bg-gray-900 min-h-screen" />;
  }

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-h-screen"
          >
            <Header />
            <main>
              <Hero />
              <About />
              <Companies />
              <Contact />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
