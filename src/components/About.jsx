import { motion } from "framer-motion";
import { Award, Target, TrendingUp, Users } from "lucide-react";
import { SplitText } from "./ReactBits";

const About = () => {
  const achievements = [
    {
      Icon: Users,
      number: "50+",
      label: "Team Members",
      description: "Leading diverse teams across multiple industries",
    },
    {
      Icon: TrendingUp,
      number: "15+",
      label: "Years Experience",
      description: "Building and scaling successful businesses",
    },
    {
      Icon: Award,
      number: "10+",
      label: "Companies",
      description: "Founded and operated across various sectors",
    },
    {
      Icon: Target,
      number: "99%",
      label: "Success Rate",
      description: "Achieving strategic objectives and growth targets",
    },
  ];

  const values = [
    {
      title: "Innovation First",
      description:
        "Embracing cutting-edge technologies and methodologies to stay ahead of the curve.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "People-Centric",
      description:
        "Building strong teams and fostering environments where talent thrives.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Sustainable Growth",
      description:
        "Creating long-term value through strategic planning and responsible business practices.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Global Vision",
      description:
        "Thinking globally while acting locally to create meaningful impact.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <SplitText
              text="About Me"
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent"
              delay={0.2}
              stagger={0.1}
            />
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              A passionate entrepreneur and strategic leader with a proven track
              record of building and scaling successful businesses across
              multiple industries.
            </motion.p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            {/* Career Journey */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white via-blue-50/50 to-transparent rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/60">
                <div className="absolute top-0 left-0 w-2 h-16 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-r-full"></div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6 pl-6">
                  Career Journey
                </h3>
                <div className="space-y-6 text-gray-600 leading-relaxed pl-6">
                  <p className="text-lg">
                    My entrepreneurial journey began over 15 years ago with a
                    simple vision: to create businesses that not only generate
                    profit but also make a positive impact on society.
                  </p>
                  <p>
                    Through years of experience, I've learned that successful
                    business leadership isn't just about strategy and
                    numbers—it's about people, vision, and the ability to adapt
                    to an ever-changing market landscape.
                  </p>
                  <p>
                    Today, I oversee a diverse portfolio of companies, each
                    driven by innovation, sustainable practices, and a
                    commitment to excellence.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Leadership Philosophy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white via-indigo-50/50 to-transparent rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/60">
                <div className="absolute top-0 left-0 w-2 h-16 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-r-full"></div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6 pl-6">
                  Leadership Philosophy
                </h3>
                <div className="space-y-6 text-gray-600 leading-relaxed pl-6">
                  <p className="text-lg">
                    I believe that great leadership starts with empowering
                    others. My philosophy centers around creating environments
                    where innovation thrives and teams feel valued.
                  </p>
                  <p>
                    Transparency, accountability, and continuous learning are
                    the cornerstones of my leadership style. I strive to lead by
                    example while never losing sight of the human element.
                  </p>
                  <p>
                    Whether navigating complex challenges or identifying new
                    opportunities, I approach every situation with strategic
                    thinking and creative problem-solving.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <SplitText
              text="Key Achievements"
              className="text-3xl font-bold text-center text-gray-800 mb-16"
              delay={0.2}
              stagger={0.1}
            />

            {/* Modern Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-blue-50/30 to-indigo-100/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/60">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-100/20 to-indigo-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Icon */}
                    <div className="relative z-10 mb-6">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                        <achievement.Icon size={28} className="text-white" />
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="relative z-10 text-center space-y-3">
                      <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                        {achievement.number}
                      </div>
                      <div className="text-lg font-semibold text-gray-800">
                        {achievement.label}
                      </div>
                      <div className="text-sm text-gray-600 leading-relaxed">
                        {achievement.description}
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-white via-blue-50/40 to-indigo-100/60 rounded-2xl backdrop-blur-sm border border-white/60 hover:border-blue-300 transition-all duration-300 group shadow-lg hover:shadow-xl"
                >
                  <div
                    className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${value.gradient} text-white font-medium text-sm mb-4`}
                  >
                    {value.title}
                  </div>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
