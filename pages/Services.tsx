import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, LineChart, PenTool, Globe, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      id: 'web',
      title: 'Web Development',
      icon: Code,
      description: 'We build blazing fast, SEO-friendly, and visually stunning websites. From simple landing pages to complex eCommerce platforms.',
      features: ['React & Next.js', 'Custom CMS', 'eCommerce', 'Progressive Web Apps'],
    },
    {
      id: 'app',
      title: 'App Development',
      icon: Smartphone,
      description: 'Turn your idea into a functional mobile application. We specialize in cross-platform development using React Native and Flutter.',
      features: ['iOS & Android', 'UI/UX Design', 'App Store Optimization', 'Maintenance'],
    },
    {
      id: 'marketing',
      title: 'Digital Marketing',
      icon: LineChart,
      description: 'Data-driven strategies to increase your visibility and ROI. We handle everything from organic SEO to paid ad campaigns.',
      features: ['SEO & SEM', 'Social Media Management', 'Content Marketing', 'Email Campaigns'],
    },
    {
      id: 'design',
      title: 'Graphic Design',
      icon: PenTool,
      description: 'Stand out with a unique brand identity. Our design team creates logos, marketing materials, and user interfaces that convert.',
      features: ['Logo Design', 'Brand Guidelines', 'Social Media Assets', 'Print Design'],
    },
    {
      id: 'cloud',
      title: 'Cloud Solutions',
      icon: Globe,
      description: 'Scalable cloud infrastructure setup and management on AWS, Azure, or Google Cloud Platform.',
      features: ['Server Migration', 'Cloud Security', 'DevOps', 'Database Management'],
    },
    {
      id: 'analytics',
      title: 'Data Analytics',
      icon: Database,
      description: 'Transform raw data into actionable insights. We help you visualize metrics that matter to your business growth.',
      features: ['Business Intelligence', 'Custom Dashboards', 'Data Mining', 'Reporting'],
    },
  ];

  return (
    <div className="pt-24 pb-12 min-h-screen bg-tech-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our <span className="text-tech-primary">Services</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive digital solutions tailored to your unique business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-tech-card rounded-2xl p-8 border border-white/5 hover:border-tech-neon/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-tech-dark rounded-lg border border-white/10 group-hover:border-tech-neon/50 transition-colors">
                  <service.icon className="text-tech-neon" size={32} />
                </div>
                <Link to="/contact" className="px-4 py-2 bg-tech-primary/10 text-tech-primary text-sm rounded-full hover:bg-tech-primary hover:text-white transition-colors">
                  Get Quote
                </Link>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Key Features</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 bg-tech-accent rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
