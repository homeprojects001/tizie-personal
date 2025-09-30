import { motion } from "framer-motion";
import { SplitText } from "./ReactBits";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 0.95,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
    >
      <div className="text-center">
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <motion.div
            className="absolute inset-0 w-24 h-24 border-2 border-blue-400 border-opacity-40 rounded-full mx-auto"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <SplitText
            text="Tizie Oswald"
            className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-2"
            delay={0.6}
            stagger={0.1}
          />
          <motion.p
            className="text-gray-600 text-lg mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Business Visionary & Leader
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
              animate={{
                y: [0, -12, 0],
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
