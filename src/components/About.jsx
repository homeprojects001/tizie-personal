import { motion as Motion } from "framer-motion";
import { Award, Target, TrendingUp, Users } from "lucide-react";

const About = () => {
  const achievements = [
    {
      Icon: Users,
      number: "10+",
      label: "Team Members",
      description: "Leading diverse teams across multiple industries",
    },
    {
      Icon: TrendingUp,
      number: "10+",
      label: "Years Experience",
      description: "Building and scaling successful businesses",
    },
    {
      Icon: Award,
      number: "10+",
      label: "Services",
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
      title: "Innovative first",
      description:
        "Embracing cutting-edge technologies and methodologies to stay ahead of the curve.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "People - Centric",
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
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-900 via-gray-800/50 to-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the journey, vision, and values that drive my
              entrepreneurial spirit
            </p>
          </Motion.div>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto mb-24">
            {/* About Me */}
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/30 mb-16"
            >
              <div className="space-y-8 text-gray-300 leading-relaxed">
                <div className="text-center mb-8">
                  <p className="text-xl md:text-2xl italic text-blue-300 font-light leading-relaxed">
                    "A relentless force of ambition and vision, driven by an
                    insatiable fire to build, create, and leave a mark on the
                    world. I don't just see a company; I see a mission, and my
                    energy is contagious, inspiring others to chase the dream
                    with me."
                  </p>
                </div>

                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-lg leading-relaxed mb-8">
                    Tizie Oswald born in 1983 is a technology entrepreneur, IT
                    consultant and investor. He is best known as the founder of
                    Ivorywoo ltd, an IT company based in United Kingdom. After
                    many years in this field he decided to launch this Tech
                    company to bring some simple and new services in order to
                    simplify people's daily life.
                  </p>
                </div>

                <div className="grid md:grid-cols-1 gap-8">
                  <div className="space-y-6">
                    <h4 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                      <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full mr-4"></div>
                      Early Life and Education
                    </h4>
                    <p className="text-gray-300 leading-relaxed pl-6 border-l-2 border-gray-700">
                      Tizie Oswald born in Abidjan, Ivory Coast. He developed an
                      interest in computing at the age of 13 and gained many
                      experience from this point. He attended the university of
                      East London, United Kingdom where he studied Master degree
                      in computing, graduating with honours in 2011.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                      <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full mr-4"></div>
                      Career
                    </h4>
                    <p className="text-gray-300 leading-relaxed pl-6 border-l-2 border-gray-700">
                      After graduation, Tizie Oswald worked for several
                      companies. All these companies was focused on various
                      computer field such as: cybersecurity, digital
                      communication, web and mobile applications, webs services,
                      project management, IT support, artificial intelligence.
                      After all these experiences, he decided to launch in July
                      2025 Ivorywoo limited, a tech company focused on
                      delivering simple IT solutions to consumers.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                      <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full mr-4"></div>
                      Personal Life
                    </h4>
                    <p className="text-gray-300 leading-relaxed pl-6 border-l-2 border-gray-700">
                      Tizie Oswald resides in United Kingdom. He is an IT
                      Consultant and a Tech Entrepreneur.
                    </p>
                  </div>
                </div>
              </div>
            </Motion.div>
          </div>

          {/* Achievements */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Key Achievements
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Milestones that define my journey and commitment to excellence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative text-center p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <achievement.Icon size={32} className="text-white" />
                    </div>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3">
                      {achievement.number}
                    </div>
                    <div className="text-xl font-semibold text-white mb-3">
                      {achievement.label}
                    </div>
                    <div className="text-sm text-gray-400 leading-relaxed">
                      {achievement.description}
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>
          </Motion.div>

          {/* Values */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Core Values
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                The principles that guide my decisions and shape my vision for
                the future
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div
                      className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${value.gradient} text-white font-semibold text-lg mb-6 shadow-lg`}
                    >
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      {value.title}
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
