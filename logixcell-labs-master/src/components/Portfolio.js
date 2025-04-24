import React from 'react'

function Portfolio() {
    return (
        <>
         <section id="portfolio" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="section-header mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
              RECENT <span className="text-outline">CASES</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-transparent"></div>
          </div>

          <div className="portfolio-showcase relative overflow-hidden">
            <div className="portfolio-collage grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="aspect-w-1 aspect-h-1 col-span-2 row-span-2 relative overflow-hidden">
                <img src="https://picsum.photos/800/800" alt="Portfolio Showcase" className="w-full h-full object-cover" />
                <div className="overlay absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center p-6">
                  <h3 className="text-4xl font-bold text-white text-center mb-6">Our Portfolio</h3>
                  <p className="text-gray-300 text-center max-w-lg mb-8">
                    Explore our diverse range of projects spanning AI, machine learning, web development, and data analysis solutions.
                  </p>
                  <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-medium uppercase tracking-wider border border-gray-700 hover:border-white transition-all">
                    Start Your Project
                  </a>
                </div>
              </div>
              <div>
                <img src="https://picsum.photos/401/400" alt="Project 1" className="w-full h-full object-cover" />
              </div>
              <div>
                <img src="https://picsum.photos/402/400" alt="Project 2" className="w-full h-full object-cover" />
              </div>
              <div>
                <img src="https://picsum.photos/403/400" alt="Project 3" className="w-full h-full object-cover" />
              </div>
              <div>
                <img src="https://picsum.photos/404/400" alt="Project 4" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Portfolio
