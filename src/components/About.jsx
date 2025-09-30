import { motion } from "framer-motion";
import { Award, Target, TrendingUp, Users } from "lucide-react";

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
    <section id="about" className="py-20 bg-gray-800/50">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A passionate entrepreneur and strategic leader with a proven track
              record of building and scaling successful businesses across
              multiple industries.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Career Journey */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Career Journey
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  My entrepreneurial journey began over 15 years ago with a
                  simple vision: to create businesses that not only generate
                  profit but also make a positive impact on society. Starting
                  from humble beginnings, I've built and scaled multiple
                  companies across various sectors.
                </p>
                <p>
                  Through years of experience, I've learned that successful
                  business leadership isn't just about strategy and numbers—it's
                  about people, vision, and the ability to adapt to an
                  ever-changing market landscape.
                </p>
                <p>
                  Today, I oversee a diverse portfolio of companies, each driven
                  by innovation, sustainable practices, and a commitment to
                  excellence. My approach combines strategic thinking with
                  hands-on leadership to deliver exceptional results.
                </p>
              </div>
            </motion.div>

            {/* Leadership Philosophy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Leadership Philosophy
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I believe that great leadership starts with empowering others.
                  My philosophy centers around creating environments where
                  innovation thrives, teams feel valued, and everyone is aligned
                  toward common goals.
                </p>
                <p>
                  Transparency, accountability, and continuous learning are the
                  cornerstones of my leadership style. I strive to lead by
                  example, making data-driven decisions while never losing sight
                  of the human element that drives success.
                </p>
                <p>
                  Whether it's navigating complex market challenges or
                  identifying new opportunities, I approach every situation with
                  strategic thinking, creative problem-solving, and an
                  unwavering commitment to excellence.
                </p>
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
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              Key Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <achievement.Icon size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-gray-400">
                    {achievement.description}
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
            <h3 className="text-3xl font-bold text-center text-white mb-12">
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
                  className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group"
                >
                  <div
                    className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${value.gradient} text-white font-medium text-sm mb-4`}
                  >
                    {value.title}
                  </div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
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
