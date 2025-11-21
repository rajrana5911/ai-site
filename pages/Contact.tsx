import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message Sent! We'll get back to you soon.");
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-24 pb-12 min-h-screen bg-tech-dark relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-tech-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-tech-accent/5 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something <span className="text-tech-neon">Amazing</span></h1>
            <p className="text-gray-400 text-lg mb-10">
              Have a project in mind or want to enroll in our courses? Drop us a message or visit our office.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-tech-card rounded-full flex items-center justify-center border border-white/10 shrink-0">
                  <MapPin className="text-tech-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Visit Us</h3>
                  <p className="text-gray-400 mt-1">123 Innovation Drive, Tech City, CA 90210</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-tech-card rounded-full flex items-center justify-center border border-white/10 shrink-0">
                  <Phone className="text-tech-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Call Us</h3>
                  <p className="text-gray-400 mt-1">+1 (555) 123-4567</p>
                  <p className="text-gray-500 text-sm">Mon-Fri from 9am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-tech-card rounded-full flex items-center justify-center border border-white/10 shrink-0">
                  <Mail className="text-tech-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Email Us</h3>
                  <p className="text-gray-400 mt-1">hello@technova.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-tech-card p-8 rounded-2xl border border-white/5 shadow-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-tech-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-tech-primary focus:ring-1 focus:ring-tech-primary outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-tech-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-tech-primary focus:ring-1 focus:ring-tech-primary outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-tech-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-tech-primary focus:ring-1 focus:ring-tech-primary outline-none transition-all"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-tech-primary to-tech-accent py-4 rounded-lg font-bold text-white shadow-lg shadow-tech-primary/20 hover:shadow-tech-primary/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : <>Send Message <Send size={18} /></>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
