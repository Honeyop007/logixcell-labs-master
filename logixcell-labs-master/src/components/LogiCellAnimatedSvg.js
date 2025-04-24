import React, { useEffect, useRef } from 'react';

export default function LogiCellAnimatedSvg() {
  const svgRef = useRef(null);
  
  useEffect(() => {
    // Animation for floating effect
    const elements = svgRef.current.querySelectorAll('.float');
    
    elements.forEach((el, index) => {
      // Create smooth floating animation
      const duration = 3 + Math.random() * 2;
      const delay = index * 0.3;
      const distance = 4 + Math.random() * 3;
      
      el.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
      
      // Add keyframes for floating animation
      const keyframes = `
        @keyframes float {
          0% { transform: translateY(0); }
          100% { transform: translateY(-${distance}px); }
        }
      `;
      
      const style = document.createElement('style');
      style.textContent = keyframes;
      document.head.appendChild(style);
      
      return () => {
        document.head.removeChild(style);
      };
    });
  }, []);

  return (
    <div className="hidden md:block relative">
      <svg 
        ref={svgRef}
        viewBox="0 0 800 600" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Website section */}
        <g className="float" style={{transformOrigin: 'center'}}>
          <rect x="120" y="150" width="200" height="150" rx="10" fill="#1E1E1E" stroke="#8A8A8A" strokeWidth="1" />
          <rect x="140" y="170" width="160" height="20" rx="4" fill="#333333" />
          <rect x="140" y="200" width="100" height="10" rx="2" fill="#444444" />
          <rect x="140" y="220" width="140" height="10" rx="2" fill="#444444" />
          <rect x="140" y="240" width="120" height="10" rx="2" fill="#444444" />
          <rect x="140" y="270" width="60" height="20" rx="4" fill="#6366F1" />
        </g>
        
        {/* Data section */}
        <g className="float" style={{transformOrigin: 'center'}}>
          <circle cx="480" cy="200" r="80" fill="#111111" stroke="#444444" strokeWidth="1" />
          <circle cx="480" cy="200" r="60" fill="#1A1A1A" stroke="#333333" strokeWidth="1" />
          <circle cx="480" cy="200" r="40" fill="#222222" stroke="#555555" strokeWidth="1" />
          <circle cx="480" cy="200" r="20" fill="#6366F1" />
          
          {/* Data points and connections */}
          <circle cx="520" cy="150" r="5" fill="#AAAAAA" />
          <circle cx="530" cy="240" r="5" fill="#AAAAAA" />
          <circle cx="440" cy="260" r="5" fill="#AAAAAA" />
          <circle cx="420" cy="150" r="5" fill="#AAAAAA" />
          
          <line x1="480" y1="200" x2="520" y2="150" stroke="#6366F1" strokeWidth="1.5" opacity="0.7" />
          <line x1="480" y1="200" x2="530" y2="240" stroke="#6366F1" strokeWidth="1.5" opacity="0.7" />
          <line x1="480" y1="200" x2="440" y2="260" stroke="#6366F1" strokeWidth="1.5" opacity="0.7" />
          <line x1="480" y1="200" x2="420" y2="150" stroke="#6366F1" strokeWidth="1.5" opacity="0.7" />
        </g>
        
        {/* AI section */}
        <g className="float" style={{transformOrigin: 'center'}}>
          <path d="M320 400 Q400 320 480 400 T640 400" stroke="#6366F1" strokeWidth="2" fill="none" />
          <circle cx="320" cy="400" r="8" fill="#222222" stroke="#6366F1" strokeWidth="1.5" />
          <circle cx="400" cy="350" r="8" fill="#222222" stroke="#6366F1" strokeWidth="1.5" />
          <circle cx="480" cy="400" r="8" fill="#222222" stroke="#6366F1" strokeWidth="1.5" />
          <circle cx="560" cy="350" r="8" fill="#222222" stroke="#6366F1" strokeWidth="1.5" />
          <circle cx="640" cy="400" r="8" fill="#222222" stroke="#6366F1" strokeWidth="1.5" />
          
          {/* Brain-like connections */}
          <line x1="320" y1="400" x2="400" y2="350" stroke="#555555" strokeWidth="1" />
          <line x1="400" y1="350" x2="480" y2="400" stroke="#555555" strokeWidth="1" />
          <line x1="480" y1="400" x2="560" y2="350" stroke="#555555" strokeWidth="1" />
          <line x1="560" y1="350" x2="640" y2="400" stroke="#555555" strokeWidth="1" />
          <line x1="320" y1="400" x2="480" y2="400" stroke="#444444" strokeWidth="1" opacity="0.5" />
          <line x1="400" y1="350" x2="560" y2="350" stroke="#444444" strokeWidth="1" opacity="0.5" />
        </g>
        
        {/* Connection lines between sections */}
        <line x1="220" y1="250" x2="400" y2="350" stroke="#6366F1" strokeWidth="1" strokeDasharray="5,5" opacity="0.4" />
        <line x1="480" y1="200" x2="400" y2="350" stroke="#6366F1" strokeWidth="1" strokeDasharray="5,5" opacity="0.4" />
        
        {/* Small floating particles */}
        <circle className="float" cx="300" cy="300" r="3" fill="#6366F1" opacity="0.7" />
        <circle className="float" cx="350" cy="200" r="2" fill="#AAAAAA" opacity="0.7" />
        <circle className="float" cx="600" cy="350" r="2" fill="#6366F1" opacity="0.7" />
        <circle className="float" cx="500" cy="450" r="3" fill="#AAAAAA" opacity="0.7" />
        <circle className="float" cx="400" cy="150" r="2" fill="#6366F1" opacity="0.7" />
        
        {/* Code/text elements */}
        <g className="float" style={{transformOrigin: 'center'}}>
          <rect x="600" y="180" width="80" height="12" rx="2" fill="#444444" />
          <rect x="620" y="200" width="60" height="8" rx="1" fill="#333333" />
          <rect x="610" y="215" width="70" height="8" rx="1" fill="#333333" />
          <rect x="630" y="230" width="50" height="8" rx="1" fill="#333333" />
          <rect x="600" y="245" width="40" height="8" rx="1" fill="#6366F1" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}