// components/BlogPage.jsx
import { useState } from 'react';
import CtaSection from '../components/CtaSection';

const BlogPage = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogs = [
    {
      id: 1,
      title: "Comprehensive General Insurance Solutions for Life Uncertainties: Safeguarding Your Future with Tailored Coverage and Expert Guidance",
      category: "General Insurance",
      date: "12-08-2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
      content: "The general insurance facility of the firm is one of the biggest and broad categories of insurance policy that provides protection against different measures of loss and damage caused by life events. Our insurance law experts help clients navigate complex insurance claims, policy interpretations, and dispute resolutions. We represent policyholders in disputes with insurance companies over denied claims, delayed payments, and underpayments. Our services include health insurance claims, life insurance beneficiaries disputes, property and casualty insurance, business interruption insurance, and liability coverage. With decades of combined experience, our team has successfully recovered millions of dollars in insurance proceeds for clients. We understand insurance company tactics and know how to counter them effectively. Whether you're filing a claim, appealing a denial, or litigating a bad faith insurance case, we provide the expertise and determination needed to secure the coverage you paid for."
    },
    {
      id: 2,
      title: "Expert Criminal Law Defense: Navigating Legal Complexities to Protect Your Rights and Secure Justice",
      category: "Criminal Law",
      date: "12-08-2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6e8?w=600&h=400&fit=crop",
      content: "Working and organizing a firm is a legal affair, and it has thousands of rules and regulations regarding the various sectors. Among these, the government or any individual can form accusations against the firm's activities. Our criminal defense team provides aggressive and strategic representation for individuals and businesses facing criminal charges. We handle cases involving white-collar crimes (fraud, embezzlement, cyber crimes), drug offenses, assault, theft, DUI, and other serious criminal matters. Our approach includes thorough investigation, identifying weaknesses in the prosecution's case, negotiating favorable plea agreements when appropriate, and providing zealous courtroom representation. We believe in the presumption of innocence and fight tirelessly to protect your constitutional rights, your reputation, and your freedom."
    },
    {
      id: 3,
      title: "Compassionate Legal Support for Matrimonial Matters: Expert Guidance in Divorce, Child Custody, Alimony, and Prenuptial Agreements",
      category: "Matrimonial Matters",
      date: "12-08-2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1516589091380-5d8e0c9070d9?w=600&h=400&fit=crop",
      content: "Matrimonial matters are more personal matters which are to be solved by legal guidance but within the law and in a respectful manner. The team understands the privacy and delicate nature of the matrimonial issues and strives to achieve the best possible outcomes for clients and their families. Our comprehensive matrimonial legal services include divorce proceedings (both mutual and contested), child custody and visitation rights, alimony and spousal support, division of marital property and assets, domestic violence protection orders, prenuptial and postnuptial agreements, and adoption and guardianship matters. We emphasize mediation and amicable settlements to reduce conflict and protect family relationships. Our family law attorneys provide personalized attention to each case, understanding that every family's situation is unique."
    },
    {
      id: 4,
      title: "Expert Legal Support for Medical Negligence: Advocating for Fair Compensation and Justice in Malpractice Cases",
      category: "Medical Negligence",
      date: "12-08-2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      content: "Medical negligence refers to a condition where the health professional negligence leads to some big problem. The consequences of medical negligence are severe leading to permanent disability, illness, or even death of the patient. At CoinMed Legal, we understand the physical, emotional, and financial toll that medical negligence can take on victims and their families. Our experienced attorneys work tirelessly to hold healthcare providers accountable for their negligence, ensuring that victims receive the compensation they deserve for medical expenses, lost wages, pain and suffering, and rehabilitation costs. We handle cases involving surgical errors, misdiagnosis, birth injuries, medication mistakes, anesthesia errors, and hospital-acquired infections. With a proven track record of successful medical malpractice claims, our team provides compassionate yet aggressive representation to help you navigate this challenging time and secure the justice you deserve."
    },
    {
      id: 5,
      title: "Comprehensive Legal Services for the Digital Age: Safeguarding Your Business in Cybersecurity, Data Privacy, and Intellectual Property",
      category: "Information Technology",
      date: "12-08-2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      content: "The firm offers complete legal services that are specifically designed to meet the opportunities and difficulties in this digital era. This covers compliance with cybersecurity, rapidly evolving regulations, data protection laws, and intellectual property rights in the digital space. Our technology law practice helps businesses navigate complex legal issues including GDPR compliance, India's Digital Personal Data Protection Act, software licensing agreements, cloud computing contracts, SaaS agreements, e-commerce regulations, domain name disputes, and cybercrime incident response. We also assist with technology transfers, joint ventures, and intellectual property protection for software, databases, and digital content. As technology continues to transform how businesses operate, our attorneys stay at the forefront of emerging legal issues in artificial intelligence, blockchain, cryptocurrency, and the Internet of Things."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'General Insurance', name: 'General Insurance' },
    { id: 'Criminal Law', name: 'Criminal Law' },
    { id: 'Matrimonial Matters', name: 'Matrimonial Matters' },
    { id: 'Medical Negligence', name: 'Medical Negligence' },
    { id: 'Information Technology', name: 'Information Technology' }
  ];

  const filteredBlogs = selectedCategory === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  const toggleReadMore = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 rounded-full mb-3 md:mb-4">
            OUR BLOG
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500">Articles</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto my-4 md:my-6 rounded-full"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Expert insights and legal updates from our experienced attorneys
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative h-52 md:h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 md:p-6 flex flex-col flex-grow">
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
                    <p className="text-sm">{blog.content}</p>
                  ) : (
                    <p className="line-clamp-3 text-sm">
                      {blog.content.substring(0, 150)}...
                    </p>
                  )}
                </div>

                {/* Read More Button */}
                <button
                  onClick={() => toggleReadMore(blog.id)}
                  className="mt-4 text-yellow-600 font-semibold text-sm hover:text-yellow-700 transition-colors flex items-center gap-1 group/btn"
                >
                  {expandedId === blog.id ? 'Read Less' : 'Read More'}
                  <span className="transition-transform group-hover/btn:translate-x-1 inline-block">
                    {expandedId === blog.id ? '↑' : '→'}
                  </span>
                </button>

                {/* Divider */}
                <div className="border-t border-gray-100 my-4"></div>

                {/* Author */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    CM
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-700">CoinMed Legal</p>
                    <p className="text-xs text-gray-400">Legal Experts</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blogs found in this category.</p>
          </div>
        )}

        {/* cta  section*/}
        <CtaSection />
      </div>

      <style jsx>{`
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
        .grid > div {
          animation: fadeIn 0.5s ease-out;
        }
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
      `}</style>
    </section>
  );
};

export default BlogPage;