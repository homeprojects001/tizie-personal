import { motion } from "framer-motion";

const Aurora = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Aurora Effect */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-400/20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            backgroundSize: ["100% 100%", "200% 200%", "100% 100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              radial-gradient(ellipse at top, rgba(59, 130, 246, 0.2) 0%, transparent 70%),
              radial-gradient(ellipse at bottom, rgba(147, 51, 234, 0.2) 0%, transparent 70%),
              radial-gradient(ellipse at right, rgba(236, 72, 153, 0.2) 0%, transparent 70%)
            `,
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [null, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default Aurora;
