import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import FloatingCard from '../components/ui/FloatingCard';
import { AnimatedSectionHeading } from '../components/ui/AnimatedSectionHeading';

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
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 overflow-x-hidden relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <AnimatedSectionHeading title="Let's Connect" />
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed text-center">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-5 sm:space-y-6 md:space-y-8">
            {/* Contact Info */}
            <FloatingCard className="p-6 md:p-8" delay={0.2}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Get in Touch</h3>
              <div className="space-y-5 md:space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-3 sm:space-x-4 group hover: transition-colors"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center border border-white/20 group-hover:border-white/30 transition-colors">
                        <IconComponent className="w-4 h-4 md:w-5 md:h-5 " />
                      </div>
                      <div>
                        <div className=" text-sm">{info.label}</div>
                        <div className=" font-medium text-sm md:text-base">{info.value}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </FloatingCard>

            {/* Social Links */}
            <FloatingCard className="p-6 md:p-8" delay={0.3}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Follow Me</h3>
              <div className="space-y-3 md:space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.button
                      key={index}
                      onClick={() => window.open(social.href, '_blank', 'noopener,noreferrer')}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.1)', transition: { type: 'spring', stiffness: 400, damping: 10 } }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all group cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-4 h-4 md:w-5 md:h-5 group-hover:" />
                        <span className=" font-medium text-sm md:text-base">{social.label}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className=" text-sm group-hover:">{social.username}</span>
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 group-hover:" />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </FloatingCard>

            {/* Availability */}
            <FloatingCard className="p-6 md:p-8 text-center" delay={0.4}>
              <div className="mb-3 md:mb-4">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-400 rounded-full mx-auto mb-2 md:mb-3 animate-pulse" />
                <h4 className=" font-semibold text-lg md:text-xl">Available for Projects</h4>
                <p className=" text-sm mt-2">
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