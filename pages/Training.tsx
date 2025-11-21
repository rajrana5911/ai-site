import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BarChart, CheckCircle, PlayCircle } from 'lucide-react';

const Training: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      level: 'Beginner to Advanced',
      duration: '6 Months',
      image: 'https://picsum.photos/seed/coding/600/400',
      desc: 'Master the MERN stack (MongoDB, Express, React, Node.js) and build professional web applications.',
      tags: ['React', 'NodeJS', 'TypeScript']
    },
    {
      id: 2,
      title: 'Data Science with Python',
      level: 'Intermediate',
      duration: '4 Months',
      image: 'https://picsum.photos/seed/data/600/400',
      desc: 'Learn data analysis, visualization, and machine learning algorithms using Python libraries.',
      tags: ['Python', 'Pandas', 'ML']
    },
    {
      id: 3,
      title: 'Digital Marketing Mastery',
      level: 'Beginner',
      duration: '3 Months',
      image: 'https://picsum.photos/seed/marketing/600/400',
      desc: 'Become a certified digital marketer. Master SEO, Social Media Marketing, and PPC campaigns.',
      tags: ['SEO', 'Ads', 'Analytics']
    },
    {
      id: 4,
      title: 'UI/UX Design Fundamentals',
      level: 'Beginner',
      duration: '3 Months',
      image: 'https://picsum.photos/seed/design/600/400',
      desc: 'Learn design thinking, wireframing, and prototyping using Figma and Adobe XD.',
      tags: ['Figma', 'Design Systems']
    },
  ];

  return (
    <div className="pt-24 pb-12 min-h-screen bg-tech-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-tech-accent to-tech-neon"
          >
            Level Up Your Skills
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Industry-relevant courses designed to get you hired. Learn from experts, build real projects, and launch your career.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: PlayCircle, text: 'Live & Recorded Classes' },
            { icon: CheckCircle, text: '100% Job Assistance' },
            { icon: BarChart, text: 'Real-world Projects' }
          ].map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-tech-card/50 p-6 rounded-xl border border-white/5 flex items-center justify-center gap-4"
            >
              <feat.icon className="text-tech-neon" size={24} />
              <span className="font-semibold text-lg">{feat.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ y: -5 }}
              className="bg-tech-card rounded-2xl overflow-hidden border border-white/5 group shadow-lg hover:shadow-tech-primary/10"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-tech-neon border border-tech-neon/30">
                  {course.level}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex gap-2">
                    {course.tags.map(tag => (
                      <span key={tag} className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm gap-1">
                    <Clock size={14} /> {course.duration}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-tech-primary transition-colors">{course.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-2">{course.desc}</p>
                <button className="w-full py-3 bg-gradient-to-r from-tech-primary to-tech-accent rounded-lg font-bold text-white opacity-90 hover:opacity-100 transition-opacity">
                  View Curriculum
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;
