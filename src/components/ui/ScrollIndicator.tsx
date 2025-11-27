import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  targetId: string;
  className?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ targetId, className = '' }) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className={`scroll-indicator ${className}`}
      onClick={scrollToSection}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <ChevronDown size={32} />
    </motion.div>
  );
};

export default ScrollIndicator;
