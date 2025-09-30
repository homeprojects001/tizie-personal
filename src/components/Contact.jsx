import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const contactInfo = [
    {
      Icon: Mail,
      label: "Email",
      value: "tizie@tizieoswald.com",
      href: "mailto:tizie@tizieoswald.com",
    },
    {
      Icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      Icon: MapPin,
      label: "Location",
      value: "New York, NY",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      Icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/tizieoswald",
      color: "hover:text-blue-400",
    },
    {
      Icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/tizieoswald",
      color: "hover:text-sky-400",
    },
    {
      Icon: Github,
      label: "GitHub",
      href: "https://github.com/tizieoswald",
      color: "hover:text-gray-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss opportunities, partnerships, or just want to
              connect? I'd love to hear from you. Let's start a conversation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-white via-blue-50/50 to-indigo-100/40 rounded-2xl p-8 shadow-lg border border-white/60">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-xl p-4 border border-emerald-200/60 shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      🤝 Interested in Partnership Opportunities?
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      I'm always open to strategic partnerships that create
                      mutual value and drive innovation.
                    </p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Whether you have a business proposal or simply want to
                    connect, I welcome meaningful conversations that can lead to
                    exciting collaborations.
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-6 bg-white/80 rounded-2xl backdrop-blur-sm border border-white/60 hover:border-blue-300 transition-all duration-300 group shadow-lg hover:shadow-xl"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <info.Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide font-medium">
                        {info.label}
                      </div>
                      <div className="text-gray-800 font-semibold group-hover:text-blue-600 transition-colors duration-300 text-lg">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-14 h-14 bg-white/80 rounded-2xl flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300 border border-white/60 hover:border-blue-300 shadow-lg hover:shadow-xl"
                    >
                      <social.Icon size={24} />
                      <span className="sr-only">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/80 p-8 rounded-3xl backdrop-blur-sm border border-white/60 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/90 border border-blue-200 rounded-xl text-gray-800 placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-colors duration-300 shadow-sm"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/90 border border-blue-200 rounded-xl text-gray-800 placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-colors duration-300 shadow-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/90 border border-blue-200 rounded-xl text-gray-800 placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-colors duration-300 shadow-sm"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/90 border border-blue-200 rounded-xl text-gray-800 placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-colors duration-300 resize-none shadow-sm"
                    placeholder="Tell me more about your inquiry..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 pt-8 border-t border-blue-200/50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 Tizie Oswald. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with passion and precision.</p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;
