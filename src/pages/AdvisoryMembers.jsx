// components/AdvisoryMembers.jsx
import { useState } from 'react';

const AdvisoryMembers = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const advisoryMembers = [
    {
      id: 1,
      name: "Dr. Rajiv Khanna",
      designation: "Chairman - Advisory Board",
      expertise: "Constitutional Law, Corporate Governance",
      experience: "35+ Years Experience",
      education: "Ph.D. in Law from Harvard University",
      achievements: "Former Supreme Court Judge, Padma Shri Awardee",
      category: "chairman",
      image: "https://images.unsplash.com/photo-1537368910025-700350df46b5?w=400&h=500&fit=crop",
      email: "rajiv.khanna@coinmedlegal.com",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 2,
      name: "Ms. Anita Sharma",
      designation: "Senior Advisory Member",
      expertise: "International Law, Trade Law",
      experience: "28+ Years Experience",
      education: "LL.M. from Cambridge University",
      achievements: "Former UN Legal Counsel, International Trade Expert",
      category: "senior",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop",
      email: "anita.sharma@coinmedlegal.com",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 3,
      name: "Mr. Vikram Mehta",
      designation: "Advisory Member",
      expertise: "Corporate Law, Mergers & Acquisitions",
      experience: "25+ Years Experience",
      education: "LL.B. from Delhi University, MBA from IIM Ahmedabad",
      achievements: "Top Corporate Lawyer of India - 2019, 2020, 2021",
      category: "member",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=500&fit=crop",
      email: "vikram.mehta@coinmedlegal.com",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 4,
      name: "Dr. Neena Gupta",
      designation: "Legal Advisor",
      expertise: "Intellectual Property Rights, Patent Law",
      experience: "22+ Years Experience",
      education: "Ph.D. in IPR from Stanford University",
      achievements: "IPR Expert of the Year - 2022, Author of 5 Books on IPR",
      category: "advisor",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&h=500&fit=crop",
      email: "neena.gupta@coinmedlegal.com",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 5,
      name: "Mr. Sanjay Kapoor",
      designation: "Senior Advisory Member",
      expertise: "Criminal Law, White Collar Crimes",
      experience: "30+ Years Experience",
      education: "LL.M. from National Law School",
      achievements: "Former Director of CBI, Criminal Law Specialist",
      category: "senior",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      email: "sanjay.kapoor@coinmedlegal.com",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 6,
      name: "Prof. Meera Desai",
      designation: "Academic Advisor",
      expertise: "Legal Education, Research Methodology",
      experience: "20+ Years Experience",
      education: "Ph.D. in Law from Oxford University",
      achievements: "Dean - National Law University, Published 50+ Research Papers",
      category: "advisor",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
      email: "meera.desai@coinmedlegal.com",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 7,
      name: "Mr. Arjun Reddy",
      designation: "Advisory Member",
      expertise: "Technology Law, Cyber Security, Data Privacy",
      experience: "18+ Years Experience",
      education: "LL.M. in Cyber Law from MIT",
      achievements: "Cyber Law Expert of the Year - 2023",
      category: "member",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
      email: "arjun.reddy@coinmedlegal.com",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 8,
      name: "Dr. Sunita Verma",
      designation: "Medical Legal Advisor",
      expertise: "Medical Negligence, Healthcare Law",
      experience: "25+ Years Experience",
      education: "M.D. + LL.B. from AIIMS & Delhi University",
      achievements: "Pioneer in Medical Law in India",
      category: "advisor",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop",
      email: "sunita.verma@coinmedlegal.com",
      linkedin: "#",
      twitter: "#"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Members' },
    { id: 'chairman', name: 'Chairman' },
    { id: 'senior', name: 'Senior Advisors' },
    { id: 'member', name: 'Advisory Members' },
    { id: 'advisor', name: 'Legal Advisors' }
  ];

  const filteredMembers = selectedCategory === 'all' 
    ? advisoryMembers 
    : advisoryMembers.filter(member => member.category === selectedCategory);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 rounded-full mb-3 md:mb-4">
            OUR ADVISORY BOARD
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Advisory <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500">Members</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto my-4 md:my-6 rounded-full"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Meet our distinguished advisory board members who guide us with their expertise
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

        {/* Advisory Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Icons Overlay */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3 pb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <a 
                    href={member.linkedin}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-yellow-500 hover:scale-110 transition-all"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href={member.twitter}
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
                <div className="mb-2">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {member.designation}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                
                <div className="space-y-2 mb-4 mt-3">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <p className="text-gray-600 text-sm">{member.expertise}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600 text-sm">{member.experience}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <p className="text-gray-600 text-sm">{member.education}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700 text-xs font-medium">{member.achievements}</p>
                  </div>
                </div>

                <a 
                  href={`mailto:${member.email}`}
                  className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-yellow-500 hover:text-white text-gray-700 font-semibold py-2 px-4 rounded-lg transition-all w-full text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Member
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No advisory members found in this category.</p>
          </div>
        )}

        {/* Statistics Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-yellow-500">8+</p>
              <p className="text-gray-300 text-sm mt-1">Advisory Members</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-yellow-500">250+</p>
              <p className="text-gray-300 text-sm mt-1">Combined Years of Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-yellow-500">50+</p>
              <p className="text-gray-300 text-sm mt-1">Awards & Recognitions</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-yellow-500">15+</p>
              <p className="text-gray-300 text-sm mt-1">Countries Represented</p>
            </div>
          </div>
        </div>

        {/* Advisory Board Description */}
        <div className="mt-10 bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Our Advisory Board</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Our distinguished advisory board comprises eminent legal experts, academicians, and industry leaders who bring 
            decades of experience and invaluable insights. They guide our firm's strategic direction, ensure compliance with 
            the highest professional standards, and help us stay at the forefront of legal innovation. Their collective wisdom 
            and expertise enable us to provide exceptional legal services to our clients across diverse practice areas.
          </p>
        </div>
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

export default AdvisoryMembers;