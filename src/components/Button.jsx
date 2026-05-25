import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', // 'primary', 'secondary', 'tech', 'outline', 'darkOutline'
  className = '', 
  type = 'button',
  icon
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-display font-semibold text-sm px-7 py-3.5 transition-all duration-300 focus:outline-none select-none cursor-pointer rounded-full spring-transition";
  
  const variants = {
    primary: "bg-brand-navy-deep text-brand-snow hover:bg-brand-navy shadow-lg shadow-brand-navy-deep/10 hover:shadow-brand-navy-deep/20",
    secondary: "bg-brand-green-vibrant text-brand-navy-deep hover:bg-brand-green-dark hover:text-brand-snow shadow-lg shadow-brand-green-vibrant/10 hover:shadow-brand-green-vibrant/30 azucon-button-glow",
    tech: "bg-brand-green-vibrant text-brand-snow hover:bg-brand-green-dark shadow-lg shadow-brand-green-vibrant/20",
    gradient: "bg-gradient-to-r from-brand-navy to-brand-green-vibrant text-brand-snow hover:opacity-95 shadow-md shadow-brand-navy/10 hover:scale-[1.02]",
    outline: "bg-transparent text-brand-navy border-2 border-brand-navy hover:bg-gradient-to-r hover:from-brand-navy hover:to-brand-green-vibrant hover:text-brand-snow hover:border-transparent hover:shadow-lg hover:shadow-brand-navy/20",
    darkOutline: "bg-transparent text-brand-green-vibrant border-2 border-brand-green-vibrant hover:bg-brand-green-vibrant hover:text-brand-navy-deep hover:shadow-lg hover:shadow-brand-green-vibrant/20"
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95, y: 0 }}
      transition={{ type: 'spring', stiffness: 350, damping: 15 }}
    >
      <span className="flex items-center gap-2 relative z-10">
        {children}
        {icon && <span className="flex items-center text-base">{icon}</span>}
      </span>
    </motion.button>
  );
};

export default Button;
