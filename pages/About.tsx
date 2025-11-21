import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    { name: 'Alex Chen', role: 'Founder & Lead Dev', img: 'https://picsum.photos/seed/alex/400/400' },
    { name: 'Sarah Johnson', role: 'Marketing Director', img: 'https://picsum.photos/seed/sarah/400/400' },
    { name: 'Mike Ross', role: 'Head of Training', img: 'https://picsum.photos/seed/mike/400/400' },
    { name: 'Emily Davis', role: 'UI/UX Designer', img: 'https://picsum.photos/seed/emily/400/400' },
  ];

  return (
    <div className="pt-24 pb-12 min-h-screen bg-tech-dark">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          We Are <span className="text-tech-neon">TechNova</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto"
        >
          A collective of innovators, educators, and creators dedicated to building the digital infrastructure of tomorrow.
        </motion.p>
      </section>

      {/* Mission Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: 'Our Mission', desc: 'To empower businesses with superior digital solutions and individuals with career-defining skills.' },
            { icon: Zap, title: 'Our Vision', desc: 'To become the global standard for integrated IT services and technical education.' },
            { icon: Users, title: 'Our Culture', desc: 'We believe in continuous learning, radical transparency, and creative collaboration.' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-tech-card p-8 rounded-2xl border border-white/5 hover:border-tech-primary/50 transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-tech-primary to-tech-accent rounded-lg flex items-center justify-center mb-6">
                <item.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-tech-card/50 py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet The Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl aspect-[3/4]"
              >
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-tech-neon font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
