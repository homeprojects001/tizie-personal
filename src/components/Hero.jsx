import { motion as Motion } from "framer-motion";
import { ChevronDown, Linkedin, Mail } from "lucide-react";

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
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          ></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
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

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <Motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-48 h-48 lg:w-56 lg:h-56 mx-auto mb-4 lg:mb-6 mt-8 md:mt-12 xl:mt-20 relative"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                <img
                  src="/tizie.jpeg"
                  alt="Tizie Oswald Lia Bi"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Animated ring */}
            <Motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-400/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </Motion.div>

          {/* Name and Title */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Tizie{" "}
              </span>

              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Oswald Lia Bi
              </span>
            </h1>
          </Motion.div>

          {/* Tagline */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Business Visionary & Strategic Leader.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A relentless force of ambition and vision, driven by an insatiable
              fire to build, create, and leave a mark on the world.
            </p>
          </Motion.div>

          {/* Social Links */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex justify-center space-x-6 mb-8"
          >
            {[
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/tizie-oswald-a616346a",
                label: "LinkedIn",
              },
              {
                Icon: Mail,
                href: "mailto:Contact@tizieoswald.com",
                label: "Contact",
              },
            ].map(({ Icon, href, label }) => (
              <Motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300 group"
              >
                <Icon size={20} />
                <span className="sr-only">{label}</span>
              </Motion.a>
            ))}
          </Motion.div>

          {/* CTA Button */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mb-8"
          >
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Discover My Journey
              <ChevronDown className="ml-2 animate-bounce" size={20} />
            </button>
          </Motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-gray-400 cursor-pointer"
          onClick={scrollToAbout}
        >
          <ChevronDown size={24} />
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Hero;
