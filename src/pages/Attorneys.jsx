// components/Attorneys.jsx
import { useState } from 'react';
import CtaSection from '../components/CtaSection';
import { assets } from '../assets/js/assets';

const Attorneys = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAttorney, setSelectedAttorney] = useState(null);

  const attorneys = [
    {
      id: 1,
      name: "Mr. James Mukkattukavunkal",
      designation: "Managing Partner",
      experience: "25+ Years Experience",
      specialization: "Intellectual Property Rights, Corporate Law",
      education: "LL.M. from Harvard Law School",
      awards: "Top 10 Lawyers in India - 2023",
      image: assets.attorney14,
      email: "legal.support@coinmedlegal.com",
      phone: "+91 98702 77495",
      social: {
        linkedin: "#",
        twitter: "#"
      },
      category: "senior",
      about: "Mr. James Mukkattukavunkal, a seasoned legal advisor and attorney with 25+ years of experience, deftly navigates the realms of Information Technology, Intellectual Property, Commercial Recovery Practice, MACT, Insurance, Medical Negligence, and Criminal Law. Throughout his illustrious career, he co-founded Enhelion, an online education platform, where he led the Academic Programmes division. Additionally, he served as a partner at Scriboard - Advocates and Legal Consultants, spearheading the Digital Brand Management Team. Mr. Mukkattukavunkal's academic journey includes a B.A. (Hons) in Philosophy from St. Stephen's College, Delhi University, followed by a law degree from Campus Law Centre. His multifaceted expertise and leadership have made significant contributions to the legal field. After earning his LLB degree, he embarked on his legal journey, practicing in the district courts, High Court, and Supreme Court under the mentorship of senior counsels. He then joined the esteemed banking and finance law firm, S.N. Gupta. Following three years of legal practice, he pursued further studies at Queen Mary & Westfield College, University of London, where he obtained a master's degree in Intellectual Property Laws. A sought-after guest speaker, he has contributed to workshops such as 'The Workshop on Intellectual Property for MSMEs of Agricultural Implements' hosted by the Ministry of Micro, Small & Medium Enterprises, and 'Interactive Sessions with Custom Officials on IPR Enforcement - Best Practices' and with Police Officials on IPR Enforcement – Best Practices hosted by the Confederation of Indian Industries. His professional portfolio includes advising Fortune 500 companies on digital brand management and overseeing their portfolios. He has played a pivotal role in advising various organizations on their sexual harassment policies and has been a key faculty member for Enhelion, educating on anti-sexual harassment measures. Additionally, he has served as an advisor to the National Internet Exchange of India (NIXI) and is a member of NIXI's panel of independent and neutral arbitrators. As a regular guest faculty member at numerous colleges, he imparts knowledge in contract drafting, intellectual property, and information technology. Currently, he serves as a consulting counsel for companies such as Netgains India Internet Private Limited, Shisham Digital Media Private Limited, and Access Health International Inc. In this role, he handles legal compliances, drafts and vets agreements, and sensitizes employees as required under the Prevention of Sexual Harassment at the Workplace Act 2013. He also regularly appears in various courts and tribunals across India, continuing his dedication to the legal profession.",
      address: "A-1/270, Ground Floor, Sector 4, Rohini New Delhi, 110085",
      contactPhone: "N/A",
      contactEmail: "legal.support@coinmedlegal.com"
    },
    {
      id: 2,
      name: "Ms. Deepa Chacko",
      designation: "Senior Partner",
      experience: "18+ Years Experience",
      specialization: "Medical Negligence, MACT",
      education: "LL.M. from National Law School",
      awards: "Best Litigator Award - 2021",
      image: assets.attorney15,
      email: "legal.support@coinmedlegal.com",
      phone: "+91 99991 14284, +91 88262 79589",
      social: {
        linkedin: "#",
        twitter: "#"
      },
      category: "senior",
      about: "Deepa Chacko stands as a seasoned litigator and counselor, wielding over 30 years of expertise in insurance and consumer laws. An alumna of Jesus and Mary College, she pursued her legal studies at Campus Law Centre, Delhi University. Deepa has actively championed general insurance and consumer matters, earning appointments as Amicus Curiae in numerous cases by the National Commission and State Commission Delhi, a testament to her profound knowledge in insurance laws. Her litigation experience spans trial courts, various state tribunals, High Courts, and the Supreme Court. Deepa has provided counsel to prominent general insurance companies such as TATA AIG General Insurance Co. Ltd and Bharti AXA General Insurance Company Ltd, along with successfully advising high-profile clients like Prestige Soya Industries, Karam Industries, and Atlas Exports. Her contributions have been pivotal in landmark judgments, including the notable TATA AIG General Insurance Co. Ltd v. Gulzari Singh case concerning the No Claim Bonus, widely recognized by the National Commission. Deepa's extensive litigation experience and specialized knowledge have rendered her an invaluable and trusted member of this law firm, where her contributions are immeasurable.",
      address: "A-1/270, Ground Floor, Sector- 4, Rohini New Delhi, 110085.",
      contactPhone: "N/A",
      contactEmail: "deepachackoadv@gmail.com"
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

  const openAttorneyDetails = (attorney) => {
    setSelectedAttorney(attorney);
  };

  const closeModal = () => {
    setSelectedAttorney(null);
  };

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
              onClick={() => openAttorneyDetails(attorney)}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
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
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href={attorney.social.twitter}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-yellow-500 hover:scale-110 transition-all"
                    onClick={(e) => e.stopPropagation()}
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
                    <p className="text-gray-600 text-sm line-clamp-2">{attorney.specialization}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <p className="text-gray-600 text-sm line-clamp-1">{attorney.education}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
                  <a 
                    href={`mailto:${attorney.email}`}
                    className="flex items-center gap-1 bg-gray-100 hover:bg-yellow-500 hover:text-white text-gray-700 font-semibold py-1.5 px-3 rounded-lg transition-all text-xs"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </a>
                  <a 
                    href={`tel:${attorney.phone.split(',')[0]}`}
                    className="flex items-center gap-1 bg-gray-100 hover:bg-yellow-500 hover:text-white text-gray-700 font-semibold py-1.5 px-3 rounded-lg transition-all text-xs"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call
                  </a>
                  <button 
                    className="ml-auto bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1.5 px-4 rounded-lg transition-all text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                      openAttorneyDetails(attorney);
                    }}
                  >
                    Details
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

      {/* Modal for Full Details */}
      {selectedAttorney && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={closeModal}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="sticky top-4 float-right bg-white/90 hover:bg-red-500 hover:text-white rounded-full p-2 shadow-lg transition-all z-10 mr-4 mt-4"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-6 md:p-8 pt-0">
              {/* Header */}
              <div className="flex flex-col md:flex-row gap-6 mb-8 pb-6 border-b border-gray-200">
                <div className="md:w-1/3">
                  <img 
                    src={selectedAttorney.image} 
                    alt={selectedAttorney.name}
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {selectedAttorney.designation}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {selectedAttorney.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{selectedAttorney.experience}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Specialization</p>
                      <p className="font-semibold text-gray-800">{selectedAttorney.specialization}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Education</p>
                      <p className="font-semibold text-gray-800">{selectedAttorney.education}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Awards</p>
                      <p className="font-semibold text-gray-800">{selectedAttorney.awards}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Professional Background
                </h3>
                <div className="prose prose-sm max-w-none text-gray-600">
                  <p className="whitespace-pre-line leading-relaxed">{selectedAttorney.about}</p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mb-8 p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600 text-sm">{selectedAttorney.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600 text-sm">{selectedAttorney.contactPhone || selectedAttorney.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <a href={`mailto:${selectedAttorney.contactEmail || selectedAttorney.email}`} className="text-yellow-600 hover:text-yellow-700 text-sm">
                        {selectedAttorney.contactEmail || selectedAttorney.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-end pt-4 border-t border-gray-200">
                <a 
                  href={`mailto:${selectedAttorney.contactEmail || selectedAttorney.email}`}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-yellow-500 hover:text-white text-gray-700 font-semibold py-2 px-6 rounded-lg transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Attorney
                </a>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-8 rounded-lg transition-all">
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Attorneys;