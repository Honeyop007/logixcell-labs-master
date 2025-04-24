import React from 'react'

function About() {
    return (
        <>
              <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="section-header mb-16">
              <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
                ABOUT <span className="text-outline">US</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-transparent mx-auto"></div>
            </div>
            <p className="text-gray-400 text-xl mb-12">
              At LogixCell Labs, we are a team of technology enthusiasts, data scientists, and creative developers 
              committed to pushing the boundaries of what's possible in the digital realm. Founded in 2020, 
              we've quickly established ourselves as pioneers in delivering cutting-edge AI, machine learning, 
              and web development solutions.
            </p>
            <p className="text-gray-400 text-xl mb-12">
              Our mission is to transform complex technological challenges into elegant, efficient solutions 
              that drive real business value. We believe in the power of data and technology to create 
              meaningful change and deliver exceptional experiences.
            </p>
            <div className="values grid grid-cols-2 gap-12 mt-16">
              <div className="value-item text-left">
                <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
                <p className="text-gray-400">We constantly explore new technologies and approaches to solve problems.</p>
              </div>
              <div className="value-item text-left">
                <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
                <p className="text-gray-400">We hold ourselves to the highest standards in everything we create.</p>
              </div>
              <div className="value-item text-left">
                <h3 className="text-2xl font-bold text-white mb-4">Collaboration</h3>
                <p className="text-gray-400">We work closely with clients as true partners in their success.</p>
              </div>
              <div className="value-item text-left">
                <h3 className="text-2xl font-bold text-white mb-4">Impact</h3>
                <p className="text-gray-400">We measure our success by the tangible results we deliver.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default About
