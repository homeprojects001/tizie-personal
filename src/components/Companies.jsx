import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Globe,
  Smartphone,
  TrendingUp,
  Zap,
} from "lucide-react";
import { SplitText } from "./ReactBits";

const Companies = () => {
  const companies = [
    {
      name: "TechVision Solutions",
      sector: "Technology",
      description:
        "Leading software development and digital transformation company specializing in enterprise solutions.",
      Icon: Smartphone,
      gradient: "from-blue-500 to-cyan-500",
      achievements: [
        "500+ Projects Delivered",
        "50+ Enterprise Clients",
        "15 Countries Served",
      ],
    },
    {
      name: "EcoEnergy Partners",
      sector: "Renewable Energy",
      description:
        "Sustainable energy solutions provider focused on solar and wind power installations.",
      Icon: Zap,
      gradient: "from-green-500 to-teal-500",
      achievements: [
        "100MW+ Installed",
        "25,000 Homes Powered",
        "50% Carbon Reduction",
      ],
    },
    {
      name: "Global Trade Network",
      sector: "International Trade",
      description:
        "Facilitating international business connections and trade opportunities worldwide.",
      Icon: Globe,
      gradient: "from-purple-500 to-pink-500",
      achievements: [
        "$500M+ Trade Volume",
        "80+ Countries",
        "1000+ Partnerships",
      ],
    },
    {
      name: "Urban Development Corp",
      sector: "Real Estate",
      description:
        "Innovative real estate development focused on sustainable urban living solutions.",
      Icon: Building2,
      gradient: "from-orange-500 to-red-500",
      achievements: ["50+ Projects", "10,000+ Units", "25 Cities"],
    },
    {
      name: "Strategic Consulting Group",
      sector: "Business Consulting",
      description:
        "Providing strategic guidance and business transformation services to Fortune 500 companies.",
      Icon: Briefcase,
      gradient: "from-indigo-500 to-purple-500",
      achievements: [
        "200+ Consultations",
        "95% Success Rate",
        "$2B+ Value Created",
      ],
    },
    {
      name: "FinTech Innovations",
      sector: "Financial Technology",
      description:
        "Revolutionary financial technology solutions for modern banking and investment.",
      Icon: TrendingUp,
      gradient: "from-yellow-500 to-orange-500",
      achievements: ["1M+ Users", "$10B+ Processed", "15+ Awards"],
    },
  ];

  return (
    <section
      id="companies"
      className="py-20 bg-gradient-to-br from-blue-50/50 to-indigo-100/50"
    >
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
              text="My Companies"
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent"
              delay={0.2}
              stagger={0.1}
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse portfolio of companies spanning multiple industries,
              each driven by innovation and a commitment to creating meaningful
              impact in their respective markets.
            </p>
          </motion.div>

          {/* Companies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -8 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-blue-50/30 to-indigo-100/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/60 h-full">
                  {/* Background Pattern */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${company.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${company.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                      >
                        <company.Icon size={28} className="text-white" />
                      </div>
                      <span
                        className={`px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r ${company.gradient} text-white shadow-md`}
                      >
                        {company.sector}
                      </span>
                    </div>

                    {/* Company Info */}
                    <div className="mb-6 flex-grow">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {company.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {company.description}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Key Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {company.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className="flex items-center text-sm text-gray-600 bg-white/60 rounded-lg px-3 py-2"
                          >
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${company.gradient} mr-3 flex-shrink-0`}
                            ></div>
                            <span className="font-medium">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-indigo-400/10 to-blue-500/10 rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-700"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl backdrop-blur-sm border border-blue-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in Partnership Opportunities?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always looking for strategic partnerships and investment
              opportunities. Let's explore how we can create value together.
            </p>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
