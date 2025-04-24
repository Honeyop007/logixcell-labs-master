import React, { useEffect , useState} from 'react'

function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const sections = React.useMemo(() => ['home', 'services', 'portfolio', 'about', 'contact'], []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      };
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            
            sections.forEach(section => {
              const element = document.getElementById(section);
              if (element) {
                const offsetTop = element.offsetTop;
                const height = element.offsetHeight;
                
                if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + height - 100) {
                  setActiveSection(section);
                }
              }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);


    return (
        <>
          <div className="brackets-animation">
        <div className="bracket bracket-1">{`{`}</div>
        <div className="bracket bracket-2">{`}`}</div>
        <div className="bracket bracket-3">{`{`}</div>
        <div className="bracket bracket-4">{`}`}</div>
        <div className="bracket bracket-5">{`{`}</div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 bg-black bg-opacity-80 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="logo">
            <a href="#home" className="text-white text-2xl font-bold">
              <span className="text-gray-400">LOGIX</span>CELL LABS
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <a 
                key={section} 
                href={`#${section}`} 
                className={`text-sm uppercase tracking-wider ${
                  activeSection === section ? 'text-white' : 'text-gray-400'
                } hover:text-white transition-colors`}
              >
                {section}
              </a>
            ))}
            <a 
              href="#contact" 
              className="ml-4 px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white text-sm uppercase tracking-wider border border-gray-700 hover:border-white transition-all"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-95 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              {sections.map((section) => (
                <a 
                  key={section} 
                  href={`#${section}`} 
                  className={`text-sm uppercase tracking-wider ${
                    activeSection === section ? 'text-white' : 'text-gray-400'
                  } hover:text-white transition-colors`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {section}
                </a>
              ))}
              <a 
                href="#contact" 
                className="px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white text-sm uppercase tracking-wider border border-gray-700 hover:border-white transition-all text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </nav>
        </>
    )
}

export default Navbar
