import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, Sparkles, Twitter } from "lucide-react";
import {
  Aurora,
  BlurText,
  CountUp,
  GradientText,
  ScrollReveal,
  SpotlightCard,
} from "./reactbits";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
    >
      {/* Aurora Background */}
      <Aurora className="opacity-60" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234f46e5' fill-opacity='0.1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/60 to-purple-500/60 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content - Bento Grid Layout */}
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 pt-16">
            <div className="mb-6">
              <BlurText
                text="Tizie Oswald"
                className="text-6xl md:text-8xl font-bold"
                delay={100}
                animateBy="words"
              />
            </div>

            <GradientText
              className="text-2xl md:text-3xl font-semibold mb-6"
              colors={["#3B82F6", "#8B5CF6", "#EC4899"]}
            >
              Business Visionary & Strategic Leader
            </GradientText>

            <ScrollReveal
              containerClassName="mb-8"
              textClassName="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Transforming industries through innovative leadership and
              strategic vision. Building tomorrow's companies today across
              multiple sectors.
            </ScrollReveal>
          </div>

          {/* Custom Bento Grid */}
          <div className="grid grid-cols-12 gap-6 mb-16">
            {/* Large Profile Card */}
            <div className="col-span-12 md:col-span-6 row-span-2">
              <SpotlightCard
                className="h-full bg-white/70 border-white/60"
                spotlightColor="rgba(59, 130, 246, 0.15)"
              >
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl overflow-hidden">
                      <img
                        src="/logo-transparent.png"
                        alt="Tizie Oswald"
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Chief Executive
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    15+ years of experience building and scaling successful
                    companies across diverse industries
                  </p>
                </div>
              </SpotlightCard>
            </div>

            {/* Stats Cards */}
            <div className="col-span-6 md:col-span-3">
              <SpotlightCard className="h-full bg-white/70 border-white/60 text-center">
                <CountUp
                  to={50}
                  className="text-4xl font-bold text-blue-600"
                  duration={2}
                />
                <span className="text-4xl font-bold text-blue-600">+</span>
                <p className="text-gray-600 mt-2">Team Members</p>
              </SpotlightCard>
            </div>

            <div className="col-span-6 md:col-span-3">
              <SpotlightCard className="h-full bg-white/70 border-white/60 text-center">
                <CountUp
                  to={10}
                  className="text-4xl font-bold text-purple-600"
                  duration={2}
                />
                <span className="text-4xl font-bold text-purple-600">+</span>
                <p className="text-gray-600 mt-2">Companies</p>
              </SpotlightCard>
            </div>

            {/* Achievement Card */}
            <div className="col-span-12 md:col-span-6">
              <SpotlightCard className="bg-white/70 border-white/60">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                    <Sparkles className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Innovation Leader
                    </h3>
                    <p className="text-gray-600">
                      Pioneering cutting-edge solutions across technology,
                      finance, and sustainability sectors
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </div>

            {/* Vision Card */}
            <div className="col-span-12 md:col-span-4">
              <SpotlightCard className="bg-white/70 border-white/60 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Strategic Vision
                </h3>
                <p className="text-gray-600 text-sm">
                  Building sustainable businesses for the future
                </p>
              </SpotlightCard>
            </div>

            {/* Contact Card */}
            <div className="col-span-12 md:col-span-4">
              <SpotlightCard className="bg-white/70 border-white/60 text-center">
                <div className="flex justify-center space-x-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-blue-600 shadow-md">
                    <Linkedin size={20} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-sky-500 shadow-md">
                    <Twitter size={20} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-gray-600 shadow-md">
                    <Mail size={20} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Let's Connect
                </h3>
                <p className="text-gray-600 text-sm">
                  Always open to new opportunities
                </p>
              </SpotlightCard>
            </div>

            {/* CTA Card */}
            <div className="col-span-12 md:col-span-4">
              <SpotlightCard className="bg-white/70 border-white/60 text-center">
                <button
                  onClick={scrollToAbout}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Explore My Journey</span>
                  <ArrowRight size={20} />
                </button>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
