import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import FloatingCard from '../components/ui/FloatingCard';
import AnimatedText from '../components/ui/AnimatedText';

const Contact: React.FC = () => {
  // Contact information data
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aman.raj.ra23@ggits.net',
      href: 'mailto:aman.raj.ra23@ggits.net'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9155019845',
      href: 'tel:+91 9155019845'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jabalpur, Madhya Pradesh, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Yash7256',
      username: '@Yash7256'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aman-raj-8571aa291/',
      username: '/in/aman-raj-8571aa291/'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: '#',
      username: '@username'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 overflow-x-hidden bg-gradient-to-b from-gray-900 to-gray-950 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent flex-1" />
            <h2 className="mx-6 text-2xl font-bold text-white">Let's Connect</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent flex-1" />
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed text-center">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-8">
            {/* Contact Info */}
            <FloatingCard className="p-8" delay={0.2}>
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
                      transition={{ delay: 0.2 + index * 0.1 }}
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
            <FloatingCard className="p-8" delay={0.3}>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.button
                      key={index}
                      onClick={() => window.open(social.href, '_blank', 'noopener,noreferrer')}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="w-full flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-5 h-5 text-white group-hover:text-gray-200" />
                        <span className="text-white font-medium">{social.label}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400 text-sm group-hover:text-white">{social.username}</span>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </FloatingCard>

            {/* Availability */}
            <FloatingCard className="p-8 text-center" delay={0.4}>
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
  );
};

export default Contact;