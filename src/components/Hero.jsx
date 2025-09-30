import { motion } from "framer-motion";
import { ChevronDown, Linkedin, Mail, Twitter } from "lucide-react";
import { AnimatedButton, GlassCard, Magnetic, SplitText } from "./ReactBits";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/50 to-indigo-100/50">
        <div className="absolute inset-0 opacity-30">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          ></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full opacity-40"
            initial={{ opacity: 0 }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: 0.5 + i * 1.5,
              ease: "easeInOut",
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-32 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-48 h-48 mx-auto mb-8 relative mt-16"
          >
            <GlassCard className="w-full h-full rounded-full p-3">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl overflow-hidden">
                <img
                  src="/logo-transparent.png"
                  alt="Tizie Oswald"
                  className="w-32 h-32 object-contain"
                />
              </div>
            </GlassCard>

            {/* Animated ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-500/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Name and Title */}
          {/* Name and Title */}
          <div>
            <SplitText
              text="Tizie"
              className="text-5xl md:text-7xl font-bold block mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
              delay={1.0}
              stagger={0.15}
            />
            <SplitText
              text="Oswald"
              className="text-5xl md:text-7xl font-bold block mb-4 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent"
              delay={1.3}
              stagger={0.15}
            />
          </div>

          {/* Tagline */}
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mb-8"
          >
            <SplitText
              text="Business Visionary & Strategic Leader"
              className="text-xl md:text-2xl text-gray-700 mb-4 font-medium"
              delay={1.8}
              stagger={0.05}
            />
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            >
              Transforming industries through innovative leadership and
              strategic vision. Building tomorrow's companies today.
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {[
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Twitter, href: "#", label: "Twitter" },
              { Icon: Mail, href: "#contact", label: "Contact" },
            ].map(({ Icon, href, label }) => (
              <Magnetic key={label} strength={0.3}>
                <motion.a
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-white shadow-lg transition-all duration-300 group"
                >
                  <Icon size={20} />
                  <span className="sr-only">{label}</span>
                </motion.a>
              </Magnetic>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <AnimatedButton
              onClick={scrollToAbout}
              className="inline-flex items-center px-8 py-4 shadow-xl"
            >
              Discover My Journey
              <ChevronDown className="ml-2 animate-bounce" size={20} />
            </AnimatedButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-gray-500 cursor-pointer"
          onClick={scrollToAbout}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
