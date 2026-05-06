// components/Services.jsx
import { useState } from 'react';
import { assets } from '../assets/js/assets';

const Services = () => {
  const [expandedId, setExpandedId] = useState(null);

  const services = [
    {
      id: 1,
      title: "Intellectual Property Rights",
      image: assets.service4 || "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
      description: "Our attorneys work closely with clients to develop customized strategies to protect their intellectual property assets and help them achieve their business goals. We guide developing and managing IP portfolios, including conducting IP audits and providing advice on registration and enforcement of IP rights."
    },
    {
      id: 2,
      title: "General Insurance",
      image: assets.service7 || "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
      description: "Our insurance lawyers work closely with clients to understand their insurance needs and objectives and develop legal strategies that help them achieve their goals. We have experience working with clients in a wide range of industries. We also represent policyholders in disputes with insurance companies and have successfully recovered millions of dollars in insurance coverage for our clients."
    },
    {
      id: 3,
      title: "Medical Negligence",
      image: assets.service8 || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      description: "We provide expert legal representation for those who have suffered due to medical errors and faced challenges in receiving fair compensation. Medical negligence claims arise when healthcare professionals fail to meet the correct standard of care, causing harm to the patient."
    },
    {
      id: 4,
      title: "Information Technology",
      image: assets.service9 || "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      description: "Our mission is to help companies leverage technology safely and legally, safeguarding their digital assets while fostering growth and innovation. Our legal support covers a wide range of issues, including compliance with cybersecurity regulations, software licensing, data protection, data breaches, privacy, and intellectual property rights."
    },
    {
      id: 5,
      title: "MACT",
      image: assets.service10 || "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
      description: "Our firm specializes in the judicial protection of MACT claims, addressing incidents involving motor vehicle accidents. We stand firmly with victims, ensuring they receive the financial relief they deserve. At CoinMed Legal, every client receives personalized legal support to comprehend their case and secure appropriate compensation."
    },
    {
      id: 6,
      title: "Criminal Law",
      image: assets.service11 || "https://images.unsplash.com/photo-1589578228447-e1a4e481c6e8?w=600&h=400&fit=crop",
      description: "Our criminal law services include advising clients on criminal law matters, representing clients in court, negotiating plea agreements, and conducting investigations. As a full-service law firm, CoinMed Legal is committed to providing the highest quality legal services to our clients."
    },
    {
      id: 7,
      title: "Matrimonial Matters",
      image: assets.service12 || "https://images.unsplash.com/photo-1516589091380-5d8e0c9070d9?w=600&h=400&fit=crop",
      description: "Our firm is deeply committed to providing comprehensive and passionate legal services to our clients. We understand the privacy and delicate nature of matrimonial matters, striving to achieve the best possible outcomes for clients and their families."
    },
    {
      id: 8,
      title: "Commercial Recovery",
      image: assets.service13 || "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      description: "The firm excels in overseeing operations from start to finish, adeptly navigating unexpected business challenges. Recognizing that many unpaid dues are often written off due to fears of prolonged litigation, our legal professionals understand the complexities of financial difficulties and the urgent need for recovery."
    }
  ];

  const toggleReadMore = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-12 px-4 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 rounded-full mb-3 md:mb-4">
            WHAT WE OFFER
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Our Services
          </h2>
          <div className="w-16 md:w-24 h-1 bg-yellow-600 mx-auto my-4 md:my-6"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            We Are Here to Provide You Awesome Service Always
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Image */}
              <div className="h-48 md:h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop";
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {service.title}
                </h3>
                
                {/* Description */}
                <div className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow">
                  {expandedId === service.id ? (
                    <p>{service.description}</p>
                  ) : (
                    <p>
                      {service.description.length > 120 
                        ? service.description.substring(0, 120) + '...' 
                        : service.description}
                    </p>
                  )}
                </div>

                {/* Read More Button */}
                <button
                  onClick={() => toggleReadMore(service.id)}
                  className="mt-4 text-yellow-600 font-semibold text-sm md:text-base hover:text-yellow-700 transition-colors text-left flex items-center gap-1 group"
                >
                  {expandedId === service.id ? 'Read Less' : 'Read More'}
                  <span className="text-lg transition-transform group-hover:translate-x-1 inline-block">
                    {expandedId === service.id ? '↑' : '→'}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 md:mt-16">
          <button className="bg-gray-900 hover:bg-yellow-600 text-white font-semibold py-3 px-8 md:py-3 md:px-10 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;