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
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <Motion.div
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
          </Motion.div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto mb-20">
            {/* About Me */}
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white mb-6">About Me</h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg italic text-blue-300">
                  A relentless force of ambition and vision, driven by an
                  insatiable fire to build, create, and leave a mark on the
                  world. I don't just see a company; I see a mission, and my
                  energy is contagious, inspiring others to chase the dream with
                  me.
                </p>
                <p>
                  Tizie Oswald born in 1983 is a technology entrepreneur, IT
                  consultant and investor. He is best known as the founder of
                  Ivorywoo ltd, an IT company based in United Kingdom. After
                  many years in this field he decided to launch this Tech
                  company to bring some simple and new services in order to
                  simplify people's daily life.
                </p>

                <h4 className="text-2xl font-semibold text-white mt-8 mb-4">
                  Early Life and Education
                </h4>
                <p>
                  Tizie Oswald born in Abidjan, Ivory Coast. He developed an
                  interest in computing at the age of 13 and gained many
                  experience from this point. He attended the university of East
                  London, United Kingdom where he studied Master degree in
                  computing, graduating with honours in 2011.
                </p>

                <h4 className="text-2xl font-semibold text-white mt-8 mb-4">
                  Career
                </h4>
                <p>
                  After graduation, Tizie Oswald worked for several companies.
                  All these companies was focused on various computer field such
                  as: cybersecurity, digital communication, web and mobile
                  applications, webs services, project management, IT support,
                  artificial intelligence. After all these experiences, he
                  decided to launch in July 2025 Ivorywoo limited, a tech
                  company focused on delivering simple IT solutions to
                  consumers.
                </p>

                <h4 className="text-2xl font-semibold text-white mt-8 mb-4">
                  Personal Life
                </h4>
                <p>
                  Tizie Oswald resides in United Kingdom. He is an IT Consultant
                  and a Tech Entrepreneur.
                </p>
              </div>
            </Motion.div>
          </div>

          {/* Achievements */}
          <Motion.div
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
                <Motion.div
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
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Motion.div
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
