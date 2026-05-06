// components/Attorneys.jsx
import { useState } from 'react';
import CtaSection from '../components/CtaSection';

const Attorneys = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const attorneys = [
    {
      id: 1,
      name: "Adv. Abhijeet Sharma",
      designation: "Senior Partner & Founder",
      experience: "25+ Years Experience",
      specialization: "Intellectual Property Rights, Corporate Law",
      education: "LL.M. from Harvard Law School",
      awards: "Top 10 Lawyers in India - 2023",
      category: "senior",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
      email: "abhijeet@coinmedlegal.com",
      phone: "+91 80097 92188",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Adv. Priya Mehta",
      designation: "Managing Partner",
      experience: "20+ Years Experience",
      specialization: "Criminal Law, Matrimonial Matters",
      education: "LL.B. from Delhi University",
      awards: "Women Achiever in Law - 2022",
      category: "senior",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
      email: "priya@coinmedlegal.com",
      phone: "+91 80097 92189",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Adv. Rajesh Kumar",
      designation: "Senior Attorney",
      experience: "18+ Years Experience",
      specialization: "Medical Negligence, MACT",
      education: "LL.M. from National Law School",
      awards: "Best Litigator Award - 2021",
      category: "senior",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=500&fit=crop",
      email: "rajesh@coinmedlegal.com",
      phone: "+91 80097 92190",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "Adv. Neha Singh",
      designation: "Legal Consultant",
      experience: "15+ Years Experience",
      specialization: "Information Technology, Commercial Recovery",
      education: "LL.B. from Mumbai University",
      awards: "Rising Star in Cyber Law - 2023",
      category: "associate",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&h=500&fit=crop",
      email: "neha@coinmedlegal.com",
      phone: "+91 80097 92191",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 5,
      name: "Adv. Vikram Singh",
      designation: "Senior Counsel",
      experience: "22+ Years Experience",
      specialization: "General Insurance, Commercial Disputes",
      education: "LL.M. from Cambridge University",
      awards: "Insurance Law Expert - 2020",
      category: "senior",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      email: "vikram@coinmedlegal.com",
      phone: "+91 80097 92192",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 6,
      name: "Adv. Anjali Desai",
      designation: "Associate Partner",
      experience: "12+ Years Experience",
      specialization: "Matrimonial Matters, Family Law",
      education: "LL.B. from Symbiosis Pune",
      awards: "Family Law Specialist - 2023",
      category: "associate",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
      email: "anjali@coinmedlegal.com",
      phone: "+91 80097 92193",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 7,
      name: "Adv. Rohan Verma",
      designation: "Criminal Defense Lawyer",
      experience: "10+ Years Experience",
      specialization: "Criminal Law, Cyber Crime",
      education: "LL.M. from NLU Delhi",
      awards: "Criminal Law Expert - 2022",
      category: "associate",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
      email: "rohan@coinmedlegal.com",
      phone: "+91 80097 92194",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 8,
      name: "Adv. Sneha Kapoor",
      designation: "IPR Specialist",
      experience: "8+ Years Experience",
      specialization: "Intellectual Property, Trademark, Patent",
      education: "LL.M. from Oxford University",
      awards: "IPR Young Achiever - 2023",
      category: "associate",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop",
      email: "sneha@coinmedlegal.com",
      phone: "+91 80097 92195",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Attorneys' },
    { id: 'senior', name: 'Senior Partners' },
    { id: 'associate', name: 'Associate Attorneys' }
  ];

  const filteredAttorneys = selectedCategory === 'all' 
    ? attorneys 
    : attorneys.filter(attorney => attorney.category === selectedCategory);

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 rounded-full mb-3 md:mb-4">
            OUR LEGAL TEAM
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Our Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500">Attorneys</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto my-4 md:my-6 rounded-full"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Meet our team of experienced and dedicated legal professionals
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Attorneys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredAttorneys.map((attorney) => (
            <div
              key={attorney.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={attorney.image}
                  alt={attorney.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Icons Overlay */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3 pb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <a 
                    href={attorney.social.linkedin}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-yellow-500 hover:scale-110 transition-all"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href={attorney.social.twitter}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-yellow-500 hover:scale-110 transition-all"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.563-11.87c0-.213-.005-.425-.015-.636A10.065 10.065 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 md:p-6">
                <div className="mb-3">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {attorney.designation}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                  {attorney.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{attorney.experience}</span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <p className="text-gray-600 text-sm">{attorney.specialization}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <p className="text-gray-600 text-sm">{attorney.education}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
                  <a 
                    href={`mailto:${attorney.email}`}
                    className="flex items-center gap-1 bg-gray-100 hover:bg-yellow-500 hover:text-white text-gray-700 font-semibold py-1.5 px-3 rounded-lg transition-all text-xs"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </a>
                  <a 
                    href={`tel:${attorney.phone}`}
                    className="flex items-center gap-1 bg-gray-100 hover:bg-yellow-500 hover:text-white text-gray-700 font-semibold py-1.5 px-3 rounded-lg transition-all text-xs"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call
                  </a>
                  <button className="ml-auto bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1.5 px-4 rounded-lg transition-all text-xs">
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredAttorneys.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No attorneys found in this category.</p>
          </div>
        )}

        {/* CTA Section */}
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
      `}</style>
    </section>
  );
};

export default Attorneys;