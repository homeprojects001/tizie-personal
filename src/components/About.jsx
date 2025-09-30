import { Heart, Lightbulb, Target, TreePine, TrendingUp } from "lucide-react";
import {
  BlurText,
  CountUp,
  GradientText,
  ScrollReveal,
  SpotlightCard,
  TiltedCard,
} from "./reactbits";

const About = () => {
  const values = [
    {
      title: "Innovation First",
      description:
        "Embracing cutting-edge technologies and methodologies to stay ahead of the curve.",
      icon: Lightbulb,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "People-Centric",
      description:
        "Building strong teams and fostering environments where talent thrives.",
      icon: Heart,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Sustainable Growth",
      description:
        "Creating long-term value through strategic planning and responsible business practices.",
      icon: TreePine,
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Strategic Vision",
      description:
        "Thinking globally while acting locally to create meaningful impact.",
      icon: Target,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.4'%3E%3Cpath d='M36 34v-30H30v30H0v6h30v30h6v-30h30v-6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
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
              Driven by passion, guided by vision, and committed to creating
              lasting impact through innovative business leadership across
              diverse industries and global markets.
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
                      <p className="text-gray-600">
                        15+ years of entrepreneurial excellence
                      </p>
                    </div>
                  </div>

                  <ScrollReveal textClassName="text-gray-700 text-lg leading-relaxed">
                    My entrepreneurial journey began with a simple yet powerful
                    vision: to create businesses that generate both profit and
                    positive societal impact. Through years of experience across
                    diverse industries, I've discovered that successful
                    leadership transcends strategy and numbers—it's
                    fundamentally about people, vision, and adaptability in an
                    ever-evolving market landscape.
                  </ScrollReveal>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-4 bg-blue-50/50 rounded-xl">
                      <CountUp
                        to={15}
                        className="text-2xl font-bold text-blue-600"
                      />
                      <span className="text-2xl font-bold text-blue-600">
                        +
                      </span>
                      <p className="text-sm text-gray-600 mt-1">
                        Years Experience
                      </p>
                    </div>
                    <div className="text-center p-4 bg-purple-50/50 rounded-xl">
                      <CountUp
                        to={10}
                        className="text-2xl font-bold text-purple-600"
                      />
                      <span className="text-2xl font-bold text-purple-600">
                        +
                      </span>
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
                  <h3 className="text-xl font-bold text-gray-800">
                    Leadership Philosophy
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Great leadership starts with empowering others. I create
                    environments where innovation thrives, teams feel valued,
                    and transparency guides every decision.
                  </p>
                  <div className="pt-4">
                    <div className="inline-flex items-center space-x-2 bg-purple-50/50 px-3 py-2 rounded-full">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span className="text-sm font-medium text-purple-700">
                        People-First Approach
                      </span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>

          {/* Values Grid */}
          <div>
            <div className="text-center mb-12">
              <GradientText
                className="text-3xl md:text-4xl font-bold mb-4"
                colors={["#3B82F6", "#8B5CF6", "#EC4899"]}
              >
                Core Values
              </GradientText>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide every decision and drive sustainable
                success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <SpotlightCard
                    key={value.title}
                    className="bg-white/80 border-white/60 text-center h-full"
                    spotlightColor={`rgba(59, 130, 246, 0.1)`}
                  >
                    <div className="space-y-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto`}
                      >
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <CountUp to={50} className="text-4xl font-bold text-blue-600" />
              <span className="text-4xl font-bold text-blue-600">+</span>
              <p className="text-gray-600 mt-2">Team Members</p>
              <p className="text-sm text-gray-500">Leading diverse teams</p>
            </div>
            <div className="text-center">
              <CountUp to={15} className="text-4xl font-bold text-purple-600" />
              <span className="text-4xl font-bold text-purple-600">+</span>
              <p className="text-gray-600 mt-2">Years Experience</p>
              <p className="text-sm text-gray-500">Building businesses</p>
            </div>
            <div className="text-center">
              <CountUp
                to={10}
                className="text-4xl font-bold text-emerald-600"
              />
              <span className="text-4xl font-bold text-emerald-600">+</span>
              <p className="text-gray-600 mt-2">Companies</p>
              <p className="text-sm text-gray-500">Founded & operated</p>
            </div>
            <div className="text-center">
              <CountUp to={99} className="text-4xl font-bold text-orange-600" />
              <span className="text-4xl font-bold text-orange-600">%</span>
              <p className="text-gray-600 mt-2">Success Rate</p>
              <p className="text-sm text-gray-500">Strategic objectives</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
