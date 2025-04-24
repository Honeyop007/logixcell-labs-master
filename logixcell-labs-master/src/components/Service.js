import React from "react";

function Service() {
  const services = [
    {
      title: "Web Development",
      desc: "From lightweight MVPs to complex web-based products, our experts can help make your vision a reality, while relieving you of all technical concerns.",
      icon: "https://techoverflow.io/wp-content/uploads/2023/06/Image.png",
    },
    {
      title: "Mobile Development",
      desc: "From lightweight MVPs to complex web-based products, our experts can help make your vision a reality, while relieving you of all technical concerns.",
      icon: "https://techoverflow.io/wp-content/uploads/2023/06/Imagejkhfc.png",
    },
    {
      title: "Web Designing",
      desc: "Our experts create extraordinary Web design ideas consistent with the latest trends and technologies across the globe.",
      icon: "https://techoverflow.io/wp-content/uploads/2023/06/Imaged.png",
    },
    {
      title: "Custom Development",
      desc: "We can turn even the most complicated of your business ideas into reality with advanced open-source development technology.",
      icon: "https://techoverflow.io/wp-content/uploads/2023/06/Frame-1.png",
    },
    {
      title: "Chat bot development and integration",
      desc: "We Techoverflow is a leading web development company, offering robust, secure, agile, scalable, and high-quality web development services.",
      icon: "https://techoverflow.io/wp-content/uploads/2023/06/Image-2.png",
    },
    {
      title: "data analysis and eda",
      desc: "We Techoverflow is a leading QA testing company that offers high-quality, dependable, scalable, and cost-effective QA testing.",
      icon: "https://techoverflow.io/wp-content/uploads/2023/06/Frame-2.png",
    },
  ];

  return (
    <section id="services" className=" py-20 px-4 text-white">
      <div className="container mx-auto max-w-screen-xl">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          OUR <span className="text-outline">SERVICES</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0f0f0f] border border-gray-700 hover:border-cyan-400 transition-all rounded-xl p-6 shadow-md hover:shadow-xl"
            >
             <div className="flex items-center justify-center mb-6 text-5xl">
              <img src={service.icon} alt="icon" ></img>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 text-center text-base">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .text-outline {
          -webkit-text-stroke: 1px white;
          color: transparent;
        }
      `}</style>
    </section>
  );
}

export default Service;
