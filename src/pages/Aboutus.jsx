// components/AboutUs.jsx
import { useEffect, useRef, useState } from 'react';
import CtaSection from '../components/CtaSection';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    {
      id: 1,
      value: "8+",
      label: "Years of Excellence",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      value: "5000+",
      label: "Cases Handled",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      value: "2000+",
      label: "Happy Clients",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.586a1 1 0 00-.707.293l-5.414 5.414a1 1 0 00-.293.707V19a2 2 0 002 2h10" />
        </svg>
      ),
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      value: "50+",
      label: "Expert Attorneys",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-orange-500 to-orange-600"
    }
  ];

  const specializations = [
    "Information Technology",
    "Intellectual Property",
    "Commercial Recovery",
    "Consumer Law",
    "MACT (Motor Accident Claims Tribunal)",
    "General Insurance",
    "Medical Negligence",
    "Criminal Matters"
  ];

  const values = [
    {
      title: "Excellence",
      description: "Striving for excellence in every case we handle, ensuring the best possible outcomes.",
      icon: "🏆",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      title: "Integrity",
      description: "Operating with complete transparency and honesty, building trust with every client.",
      icon: "🤝",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Innovation",
      description: "Embracing new technologies and innovative approaches to legal problem-solving.",
      icon: "💡",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "Client First",
      description: "Our clients' needs come first in everything we do, from strategy to execution.",
      icon: "👥",
      gradient: "from-rose-500 to-pink-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Decorative Elements */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          
          {/* Section Header */}
          <div className="relative text-center mb-12 md:mb-20">
            <span className="inline-block bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-xs md:text-sm font-semibold px-4 md:px-6 py-2 rounded-full mb-4 shadow-lg">
              Welcome to CoinMed Legal
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              Know More About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500"> Our Firm</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto my-6 rounded-full"></div>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Premier full-service, multi-disciplinary Indian law firm
            </p>
          </div>
        </div>

        {/* Main Content - Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          {/* Left Column - About Text with Animation */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-100 rounded-full opacity-50"></div>
              <h3 className="relative text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500">CoinMed Legal</span>
              </h3>
            </div>
            
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p className="text-base md:text-lg">
                <span className="font-bold text-yellow-600">CoinMed Legal</span> is a law firm that provides comprehensive legal services to clients across a wide range of industries. Our team of experienced lawyers is dedicated to helping our clients achieve their goals in an efficient and cost-effective manner.
              </p>
              <p className="text-base md:text-lg">
                We believe in providing <span className="font-semibold">practical, business-oriented advice</span> that takes into account the unique circumstances of each client's business. Whether you are an individual, small start-up or a large multinational corporation, we have the knowledge and expertise to help you navigate complex legal issues.
              </p>
              <p className="text-base md:text-lg">
                At CoinMed Legal, we understand that every client is different, and we pride ourselves on our ability to provide <span className="font-semibold">customized legal solutions</span> that are tailored to each client's specific needs and objectives.
              </p>
            </div>

            {/* Signature */}
            <div className="flex items-center gap-4 pt-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-500 to-transparent"></div>
              <p className="text-gray-500 italic">— Trusted Legal Partner Since 2017</p>
            </div>
          </div>

          {/* Right Column - Founded Card with Stats */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-10 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Established</p>
                  <h3 className="text-4xl md:text-5xl font-bold text-white">2017</h3>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                CoinMed Legal stands as a premier full-service, multi-disciplinary Indian law firm. With its head office in <span className="text-yellow-400 font-semibold">New Delhi</span>, the firm offers expert counsel to a diverse clientele, including domestic and international corporations, banks, financial institutions, and public sector entities.
              </p>

              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                We Specialize In:
              </h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {specializations.map((item, index) => (
                  <span key={index} className="bg-white/10 hover:bg-yellow-500 text-gray-200 hover:text-white text-xs md:text-sm px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer">
                    {item}
                  </span>
                ))}
              </div>

              <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-xl p-4 border border-yellow-500/30">
                <p className="text-gray-200 text-sm italic">
                  "Contact us today to learn more about how we can help you achieve your legal and business objectives."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Vision Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 p-8 md:p-10 text-white transform hover:scale-105 transition-all duration-500 shadow-xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Founded with the vision of enhancing client service and delivering commercially viable legal advice, our firm is committed to providing exceptional representation across all sectors. We have successfully established a distinct identity beyond our origins, tackling complex domestic and international matters with remarkable depth.
              </p>
              <p className="text-gray-200 leading-relaxed mt-4">
                Our team of highly qualified and knowledgeable lawyers infuses entrepreneurial enthusiasm into their work, guided by shared principles.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500 p-8 md:p-10 text-gray-900 transform hover:scale-105 transition-all duration-500 shadow-xl">
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/20 rounded-full -ml-20 -mb-20 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-800 leading-relaxed font-medium">
                To provide exceptional legal services that are practical, business-oriented, and tailored to each client's unique needs while maintaining the highest standards of professionalism, integrity, and client satisfaction.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Client-centric approach</span>
                </div>
                <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Excellence in legal representation</span>
                </div>
                <div className="flex items-center gap-3 bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Innovative legal solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section with Animation */}
        <div ref={statsRef} className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${stat.color} p-6 text-white text-center transform hover:scale-105 transition-all duration-300 shadow-lg group ${
                  isVisible ? 'animate-scale-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-3">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                      {stat.icon}
                    </div>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                  <p className="text-white/80 text-sm mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500">Values</span>
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-500 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <CtaSection />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-scale-up {
          animation: scaleUp 0.5s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;