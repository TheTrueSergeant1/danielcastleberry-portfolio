import React from 'react';

const BentoCard = ({ title, desc, icon: Icon, colSpan = 1, rowSpan = 1 }) => {
  return (
    <div 
      className={`
        group relative overflow-hidden rounded-3xl border border-cyber-border 
        bg-cyber-card p-8 transition-all duration-500 
        
        /* Hover Effects */
        hover:border-cyber-accent/50
        hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.3)]
        
        /* Flex Layout */
        flex flex-col justify-between
        
        /* Dynamic Spanning */
        ${colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1'}
        ${rowSpan === 2 ? 'md:row-span-2' : 'md:row-span-1'}
        
        /* GSAP Initial State Class (targeted by ScrollTrigger in parent) */
        bento-item opacity-0 translate-y-10 
      `}
    >
      {/* --- Background Gradient Blob --- */}
      {/* This creates the subtle lighting effect in the top-right corner */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyber-accent/5 blur-[100px] transition-all duration-500 group-hover:bg-cyber-accent/10" />
      
      {/* --- Icon Section --- */}
      <div className="relative z-10 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-2xl text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-cyber-accent group-hover:text-black">
        {/* Render the icon component passed as a prop */}
        {Icon && <Icon />}
      </div>

      {/* --- Text Content --- */}
      <div className="relative z-10">
        <h3 className="mb-2 text-xl font-semibold tracking-tight text-white">
          {title}
        </h3>
        <p className="text-sm text-neutral-400 transition-colors group-hover:text-neutral-200">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default BentoCard;