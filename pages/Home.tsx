import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, BarChart3, PenTool, GraduationCap, Rocket } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-tech-neon text-sm font-semibold mb-6">
              🚀 Elevate Your Digital Presence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Architects of <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-tech-neon via-tech-primary to-tech-accent">
              Tomorrow's Landscape
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto"
          >
            We fuse cutting-edge technology with creative design to build websites, apps, and careers that stand out in the digital age.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-tech-primary to-tech-accent rounded-full text-white font-bold text-lg shadow-lg shadow-tech-primary/25 flex items-center justify-center gap-2"
              >
                Start Your Project <ArrowRight size={20} />
              </motion.button>
            </Link>
            <Link to="/training">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm rounded-full text-white font-bold text-lg transition-all"
              >
                Explore Courses
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-tech-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From code to content, we provide end-to-end solutions to scale your business.</p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: Code, title: 'Web Development', desc: 'Custom, high-performance websites built with modern frameworks.' },
              { icon: Smartphone, title: 'App Development', desc: 'Native and cross-platform mobile apps for iOS and Android.' },
              { icon: BarChart3, title: 'Digital Marketing', desc: 'SEO, PPC, and social strategies to grow your audience.' },
              { icon: GraduationCap, title: 'Professional Training', desc: 'Industry-standard courses in coding and design.' },
              { icon: PenTool, title: 'Graphic Design', desc: 'Branding, UI/UX, and visual identities that captivate.' },
              { icon: Rocket, title: 'Startup Consulting', desc: 'Technical roadmap and strategy for new ventures.' },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="bg-tech-card p-8 rounded-2xl border border-white/5 hover:border-tech-neon/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-tech-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-tech-neon/20 transition-colors">
                  <service.icon className="text-tech-primary group-hover:text-tech-neon transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.desc}</p>
                <Link to="/services" className="text-tech-neon text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-tech-card border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '5+', label: 'Years Experience' },
              { number: '200+', label: 'Projects Completed' },
              { number: '500+', label: 'Students Trained' },
              { number: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-tech-primary font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/20 to-tech-accent/20" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to transform your digital future?</h2>
          <p className="text-xl text-gray-300 mb-10">Whether you need a new website, a marketing boost, or a career change, we're here to help.</p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-tech-dark font-bold rounded-full text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Get a Free Consultation
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
