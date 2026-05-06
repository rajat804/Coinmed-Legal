// components/Blog.jsx
import { useState, useEffect } from 'react';
import { assets } from '../assets/js/assets';

const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedId, setExpandedId] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const blogs = [
    {
      id: 1,
      title: "Expert Legal Support for Medical Negligence: Advocating for Fair Compensation and Justice in Malpractice Cases",
      category: "Medical Negligence",
      date: "May 15, 2026",
      readTime: "5 min read",
      image: assets.news18 || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      content: "Medical negligence refers to a condition where the health professional negligence leads to some big problem. The consequences of medical negligence are severe leading to permanent disability, illness, or even death of the patient. At CoinMed Legal, we understand the physical, emotional, and financial toll that medical negligence can take on victims and their families. Our experienced attorneys work tirelessly to hold healthcare providers accountable for their negligence, ensuring that victims receive the compensation they deserve for medical expenses, lost wages, pain and suffering, and rehabilitation costs. We handle cases involving surgical errors, misdiagnosis, birth injuries, medication mistakes, anesthesia errors, and hospital-acquired infections. With a proven track record of successful medical malpractice claims, our team provides compassionate yet aggressive representation to help you navigate this challenging time and secure the justice you deserve."
    },
    {
      id: 2,
      title: "Compassionate Legal Support for Matrimonial Matters: Expert Guidance in Divorce, Child Custody, Alimony, and Prenuptial Agreements",
      category: "Matrimonial Matters",
      date: "May 12, 2026",
      readTime: "6 min read",
      image: assets.news17 || "https://images.unsplash.com/photo-1516589091380-5d8e0c9070d9?w=600&h=400&fit=crop",
      content: "Matrimonial matters are more personal matters which are to be solved by legal guidance but within the law and in a respectful manner. The team understands the privacy and delicate nature of the matrimonial issues and strives to achieve the best possible outcomes for clients and their families. Our comprehensive matrimonial legal services include divorce proceedings (both mutual and contested), child custody and visitation rights, alimony and spousal support, division of marital property and assets, domestic violence protection orders, prenuptial and postnuptial agreements, and adoption and guardianship matters. We emphasize mediation and amicable settlements to reduce conflict and protect family relationships."
    },
    {
      id: 3,
      title: "Expert Criminal Law Defense: Navigating Legal Complexities to Protect Your Rights and Secure Justice",
      category: "Criminal Law",
      date: "May 10, 2026",
      readTime: "7 min read",
      image: assets.news16 || "https://images.unsplash.com/photo-1589578228447-e1a4e481c6e8?w=600&h=400&fit=crop",
      content: "Working and organizing a firm is a legal affair, and it has thousands of rules and regulations regarding the various sectors. Among these, the government or any individual can form accusations against the firm's activities. Our criminal defense team provides aggressive and strategic representation for individuals and businesses facing criminal charges. We handle cases involving white-collar crimes (fraud, embezzlement, cyber crimes), drug offenses, assault, theft, DUI, and other serious criminal matters. Our approach includes thorough investigation, identifying weaknesses in the prosecution's case, negotiating favorable plea agreements when appropriate, and providing zealous courtroom representation."
    },
    {
      id: 4,
      title: "Comprehensive General Insurance Solutions for Life Uncertainties: Safeguarding Your Future with Tailored Coverage and Expert Guidance",
      category: "General Insurance",
      date: "May 8, 2026",
      readTime: "5 min read",
      image: assets.news15 || "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
      content: "The general insurance facility of the firm is one of the biggest and broad categories of insurance policy that provides protection against different measures of loss and damage caused by life events. Our insurance law experts help clients navigate complex insurance claims, policy interpretations, and dispute resolutions. We represent policyholders in disputes with insurance companies over denied claims, delayed payments, and underpayments. Our services include health insurance claims, life insurance beneficiaries disputes, property and casualty insurance, business interruption insurance, and liability coverage."
    },
    {
      id: 5,
      title: "Google illegally maintains monopoly over internet search, judge rules",
      category: "Tech Law",
      date: "May 5, 2026",
      readTime: "4 min read",
      image: assets.news19 || "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&h=400&fit=crop",
      content: "WASHINGTON - A judge on Monday ruled that Google's ubiquitous search engine has been illegally exploiting its dominance to squash competition and stifle innovation. This seismic decision could fundamentally alter the way millions of Americans get information online. The ruling represents a major victory for antitrust regulators who have spent years building a case against the tech giant. Judge Amit Mehta of the U.S. District Court for the District of Columbia found that Google had violated Section 2 of the Sherman Act by maintaining its monopoly through exclusive distribution agreements with browser developers, smartphone manufacturers, and wireless carriers."
    },
    {
      id: 6,
      title: "Comprehensive Legal Services for the Digital Age: Safeguarding Your Business in Cybersecurity, Data Privacy, and Intellectual Property",
      category: "Information Technology",
      date: "May 3, 2026",
      readTime: "6 min read",
      image: assets.news20 || "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      content: "The firm offers complete legal services that are specifically designed to meet the opportunities and difficulties in this digital era. This covers compliance with cybersecurity, rapidly evolving regulations, data protection laws, and intellectual property rights in the digital space. Our technology law practice helps businesses navigate complex legal issues including GDPR compliance, India's Digital Personal Data Protection Act, software licensing agreements, cloud computing contracts, SaaS agreements, e-commerce regulations, domain name disputes, and cybercrime incident response."
    },
    
  ];

  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(blogs.length / cardsPerSlide);

  // Auto-slide functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying && totalSlides > 1) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        setExpandedId(null);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToPrevious = () => {
    if (totalSlides <= 1) return;
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
    setExpandedId(null);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    if (totalSlides <= 1) return;
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
    setExpandedId(null);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setExpandedId(null);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const toggleReadMore = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Get current blogs to display
  const startIndex = currentIndex * cardsPerSlide;
  const visibleBlogs = blogs.slice(startIndex, startIndex + cardsPerSlide);

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 rounded-full mb-3 md:mb-4">
            OUR BLOG
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            See All Our Updated and Latest Blogs
          </h2>
          <div className="w-16 md:w-24 h-1 bg-yellow-500 mx-auto my-4 md:my-6"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Expert insights and legal updates from our experienced attorneys
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Blog Cards Grid - 3 per slide */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {visibleBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative h-48 md:h-52 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-yellow-500 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 md:p-5 flex flex-col flex-grow">
                  {/* Date and Read Time */}
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 line-clamp-2 min-h-[56px]">
                    {blog.title}
                  </h3>
                  
                  {/* Content Preview */}
                  <div className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {expandedId === blog.id ? (
                      <p className="text-xs md:text-sm">{blog.content}</p>
                    ) : (
                      <p className="line-clamp-3 text-xs md:text-sm">
                        {blog.content.substring(0, 120)}...
                      </p>
                    )}
                  </div>

                  {/* Read More Button */}
                  <button
                    onClick={() => toggleReadMore(blog.id)}
                    className="mt-4 text-yellow-600 font-semibold text-sm hover:text-yellow-700 transition-colors flex items-center gap-1 group"
                  >
                    {expandedId === blog.id ? 'Read Less' : 'Read More'}
                    <span className="transition-transform group-hover:translate-x-1 inline-block">
                      {expandedId === blog.id ? '↑' : '→'}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Only show if more than 1 slide */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 bg-white hover:bg-yellow-500 text-gray-800 hover:text-white p-2 md:p-3 rounded-full shadow-lg transition-all z-10 focus:outline-none"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 bg-white hover:bg-yellow-500 text-gray-800 hover:text-white p-2 md:p-3 rounded-full shadow-lg transition-all z-10 focus:outline-none"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        {totalSlides > 1 && (
          <div className="flex justify-center gap-2 md:gap-3 mt-8 md:mt-10">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 focus:outline-none ${
                  currentIndex === index
                    ? 'w-8 md:w-10 h-2 bg-yellow-500 rounded-full'
                    : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-yellow-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Auto-Play Indicator & Counter */}
        {totalSlides > 1 && (
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <p className="text-gray-500 text-sm">
                {isAutoPlaying ? 'Auto-sliding' : 'Paused'} • {currentIndex + 1} / {totalSlides} Slides
              </p>
            </div>
          </div>
        )}

        {/* View All Blogs Button */}
        <div className="text-center mt-10">
          <button className="bg-gray-900 hover:bg-yellow-500 text-white font-semibold py-3 px-8 md:py-3 md:px-10 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
            View All Blogs
          </button>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .grid > div {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default BlogSection;