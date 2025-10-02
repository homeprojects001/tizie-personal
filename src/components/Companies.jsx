import { motion as Motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Globe,
  Smartphone,
  TrendingUp,
  Zap,
} from "lucide-react";

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
    <section id="companies" className="py-20 bg-gray-900">
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
                My Companies
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A diverse portfolio of companies spanning multiple industries,
              each driven by innovation and a commitment to creating meaningful
              impact in their respective markets.
            </p>
          </Motion.div>

          {/* Companies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companies.map((company, index) => (
              <Motion.div
                key={company.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 overflow-hidden"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${company.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Sector */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${company.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <company.Icon size={24} className="text-white" />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${company.gradient} text-white`}
                    >
                      {company.sector}
                    </span>
                  </div>

                  {/* Company Info */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {company.name}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {company.description}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {company.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm text-gray-300"
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${company.gradient} mr-3 flex-shrink-0`}
                          ></div>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              </Motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <Motion.div
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
              Whether you're interested in partnership opportunities, have a
              business proposal, or simply want to connect, I'm always open to
              meaningful conversations that can create mutual value.
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
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
