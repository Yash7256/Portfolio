import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import FloatingCard from '../components/ui/FloatingCard';
import AnimatedText from '../components/ui/AnimatedText';
import GlowingButton from '../components/ui/GlowingButton';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: '#',
      username: '@username'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      username: '/in/username'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: '#',
      username: '@username'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <AnimatedText
            text="Let's Connect"
            className="text-5xl md:text-7xl font-bold mb-6"
            gradient={true}
          />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FloatingCard className="p-8" delay={0.2}>
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <GlowingButton
                variant="primary"
                className="w-full flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </GlowingButton>
            </form>
          </FloatingCard>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info */}
            <FloatingCard className="p-8" delay={0.4}>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-4 group hover:text-gray-200 transition-colors"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center border border-white/20 group-hover:border-white/30 transition-colors">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">{info.label}</div>
                        <div className="text-white font-medium">{info.value}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </FloatingCard>

            {/* Social Links */}
            <FloatingCard className="p-8" delay={0.6}>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-5 h-5 text-white group-hover:text-gray-200" />
                        <span className="text-white font-medium">{social.label}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{social.username}</span>
                    </motion.a>
                  );
                })}
              </div>
            </FloatingCard>

            {/* Availability */}
            <FloatingCard className="p-8 text-center" delay={0.8}>
              <div className="mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-3 animate-pulse" />
                <h4 className="text-white font-semibold">Available for Projects</h4>
                <p className="text-gray-400 text-sm mt-2">
                  Currently accepting new freelance and contract opportunities.
                </p>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;