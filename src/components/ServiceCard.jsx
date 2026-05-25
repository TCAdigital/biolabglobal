import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  subtitle, 
  description, 
  icon: Icon, 
  parameters = [],
  regulation,
  onClick
}) => {
  const cardRef = useRef(null);

  // Motion values for the dynamic 3D Parallax effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse coordinate ratios to rotation degrees (-15 to 15deg)
  const rotateX = useTransform(y, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-12, 12]);

  // Spring physics for smooth movement
  const springConfig = { damping: 25, stiffness: 200, mass: 0.8 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to the card center (-0.5 to 0.5 ratio)
    const mouseX = (event.clientX - rect.left) / width - 0.5;
    const mouseY = (event.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    // Return rotation to zero with smooth spring physics
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
      }}
      className="azucon-card h-full p-8 md:p-10 cursor-pointer flex flex-col justify-between relative group select-none card-parallax spring-transition bg-white border border-brand-gray-med hover:bg-brand-navy hover:border-brand-green-vibrant/30 overflow-hidden"
    >
      {/* Immersive glow background effect on hover */}
      <div className="absolute inset-0 bg-radial-gradient from-brand-green-vibrant/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div>
        {/* Top Header - Icon & Arrow */}
        <div className="flex items-center justify-between mb-8">
          <div className="p-4 bg-brand-gray-light text-brand-navy rounded-2xl group-hover:bg-brand-green-vibrant group-hover:text-brand-navy-deep group-hover:shadow-lg group-hover:shadow-brand-green-vibrant/20 transition-all duration-500 border border-brand-gray-med group-hover:border-transparent">
            {Icon && <Icon size={24} />}
          </div>
          <div className="text-brand-gray-dark/40 group-hover:text-brand-green-vibrant group-hover:bg-white/5 p-2 rounded-full transition-all duration-500">
            <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-500" size={22} />
          </div>
        </div>

        {/* Text details */}
        <span className="text-[11px] uppercase font-mono tracking-widest text-brand-green-vibrant font-bold block mb-2 group-hover:text-brand-green-vibrant transition-colors duration-500">
          {subtitle}
        </span>
        <h3 className="text-xl md:text-2xl font-display font-extrabold text-brand-navy mb-4 group-hover:text-brand-snow transition-colors duration-500 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-brand-gray-dark/70 group-hover:text-brand-snow/80 leading-relaxed mb-8 transition-colors duration-500">
          {description}
        </p>

        {/* Parameters pill list */}
        {parameters.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {parameters.map((param, idx) => (
              <span 
                key={idx} 
                className="text-[10px] font-mono uppercase tracking-wider bg-brand-gray-light border border-brand-gray-med px-3 py-1.5 text-brand-gray-dark rounded-full group-hover:bg-white/10 group-hover:border-white/10 group-hover:text-brand-snow transition-all duration-500"
              >
                {param}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Regulation bar - Essential for AI and Search SEO */}
      {regulation && (
        <div className="border-t border-brand-gray-med group-hover:border-white/10 pt-5 mt-auto transition-colors duration-500">
          <span className="text-[10px] font-mono uppercase tracking-wider text-brand-navy/60 group-hover:text-brand-green-vibrant/70 font-semibold block transition-colors duration-500">
            Normativa: {regulation}
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default ServiceCard;
