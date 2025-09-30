import { Award, Target, TrendingUp, Users, Lightbulb, Heart, TreePine } from "lucide-react";
import { 
  BlurText, 
  GradientText, 
  ScrollReveal, 
  CountUp,
  SpotlightCard,
  TiltedCard
} from "./reactbits";

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
    <section id="about" className="py-32 bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.4'%3E%3Cpath d='M36 34v-30H30v30H0v6h30v30h6v-30h30v-6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <BlurText 
              text="About Me" 
              className="text-5xl md:text-7xl font-bold mb-8"
              delay={150}
              animateBy="words"
            />
            <ScrollReveal 
              containerClassName="mb-8"
              textClassName="text-xl text-gray-600 max-w-4xl mx-auto"
            >
              Driven by passion, guided by vision, and committed to creating lasting impact through innovative business leadership across diverse industries and global markets.
            </ScrollReveal>
          </div>

          {/* Main Content - Asymmetric Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Large Story Card */}
            <div className="lg:col-span-2">
              <TiltedCard className="h-full bg-white/80 border-white/60">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                      <TrendingUp className="text-white" size={28} />
                    </div>
                    <div>
                      <GradientText 
                        className="text-2xl font-bold"
                        colors={["#3B82F6", "#8B5CF6"]}
                      >
                        My Journey
                      </GradientText>
                      <p className="text-gray-600">15+ years of entrepreneurial excellence</p>
                    </div>
                  </div>
                  
                  <ScrollReveal textClassName="text-gray-700 text-lg leading-relaxed">
                    My entrepreneurial journey began with a simple yet powerful vision: to create businesses that generate both profit and positive societal impact. Through years of experience across diverse industries, I've discovered that successful leadership transcends strategy and numbers—it's fundamentally about people, vision, and adaptability in an ever-evolving market landscape.
                  </ScrollReveal>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-4 bg-blue-50/50 rounded-xl">
                      <CountUp to={15} className="text-2xl font-bold text-blue-600" />
                      <span className="text-2xl font-bold text-blue-600">+</span>
                      <p className="text-sm text-gray-600 mt-1">Years Experience</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50/50 rounded-xl">
                      <CountUp to={10} className="text-2xl font-bold text-purple-600" />
                      <span className="text-2xl font-bold text-purple-600">+</span>
                      <p className="text-sm text-gray-600 mt-1">Industries</p>
                    </div>
                  </div>
                </div>
              </TiltedCard>
            </div>

            {/* Philosophy Card */}
            <div>
              <SpotlightCard 
                className="h-full bg-white/80 border-white/60"
                spotlightColor="rgba(139, 92, 246, 0.15)"
              >
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto">
                    <Heart className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Leadership Philosophy</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Great leadership starts with empowering others. I create environments where innovation thrives, teams feel valued, and transparency guides every decision.
                  </p>
                  <div className="pt-4">
                    <div className="inline-flex items-center space-x-2 bg-purple-50/50 px-3 py-2 rounded-full">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span className="text-sm font-medium text-purple-700">People-First Approach</span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>

          {/* Values & Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {/* Value Cards */}
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
