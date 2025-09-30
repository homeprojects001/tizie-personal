import { motion } from "framer-motion";
import React from "react";

// SplitText component inspired by React Bits
export const SplitText = ({
  text,
  className = "",
  delay = 0,
  duration = 0.5,
  stagger = 0.05,
  type = "words", // 'words' or 'chars'
}) => {
  const splitArray = type === "words" ? text.split(" ") : text.split("");

  return (
    <span className={className}>
      {splitArray.map((item, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration,
            delay: delay + index * stagger,
            ease: "easeOut",
          }}
          className="inline-block"
          style={{ marginRight: type === "words" ? "0.25em" : "0" }}
        >
          {item}
        </motion.span>
      ))}
    </span>
  );
};

// GlassCard component for modern glass morphism effect
export const GlassCard = ({ children, className = "", ...props }) => {
  return (
    <motion.div
      className={`
        bg-white/70 backdrop-blur-xl border border-white/20 
        rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300
        ${className}
      `}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// AnimatedButton with modern effects
export const AnimatedButton = ({
  children,
  className = "",
  variant = "primary",
  ...props
}) => {
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white",
    secondary: "bg-white/80 text-gray-800 border border-gray-200",
    ghost: "bg-transparent text-gray-700 hover:bg-white/50",
  };

  return (
    <motion.button
      className={`
        px-6 py-3 rounded-full font-semibold transition-all duration-300
        ${variants[variant]} ${className}
      `}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// Magnetic effect component
export const Magnetic = ({ children, className = "", strength = 0.3 }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={position}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};
