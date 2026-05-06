// components/Footer.jsx

const Footer = () => {
  const latestNews = [
    {
      id: 1,
      title: "Google illegally maintains monopoly over internet search, judge rules",
      date: "May 15, 2026",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=60&h=60&fit=crop"
    },
    {
      id: 2,
      title: "Comprehensive Legal Services for the Digital Age: Safeguarding Your Business in Cybersecurity",
      date: "May 12, 2026",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=60&h=60&fit=crop"
    },
    {
      id: 3,
      title: "Expert Legal Support for Medical Negligence Advocating for Fair Compensation",
      date: "May 10, 2026",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=60&h=60&fit=crop"
    }
  ];

  const popularNews = [
    {
      id: 1,
      title: "Comprehensive Legal Services for the Digital Age: Safeguarding Your Business in Cybersecurity",
      views: "2.5K views",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=60&h=60&fit=crop"
    },
    {
      id: 2,
      title: "Expert Legal Support for Medical Negligence Advocating for Fair Compensation",
      views: "2.1K views",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=60&h=60&fit=crop"
    },
    {
      id: 3,
      title: "Expert Criminal Law Defense Navigating Legal Complexities to Protect Your Rights",
      views: "1.8K views",
      image: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6e8?w=60&h=60&fit=crop"
    }
  ];

  const quickLinks = [
    "About Us",
    "Our Services", 
    "Expert Attorneys",
    "Blog",
    "Contact Us",
    "FAQ",
    "Gallery",
    "Privacy Policy"
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          
          {/* Column 1 - About CoinMed Legal */}
          <div>
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                CoinMed<span className="text-yellow-500">Legal</span>
              </h3>
              <div className="w-12 h-0.5 bg-yellow-500"></div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Founded in <span className="text-yellow-500 font-semibold">2017</span>, CoinMed Legal stands as a premier full-service, 
              multi-disciplinary Indian law firm specializing in IT, IP, commercial recovery, 
              consumer law, MACT, insurance, medical negligence, and criminal matters.
            </p>
            
            <div className="flex gap-3">
              <a href="#" className="bg-gray-800 hover:bg-yellow-500 hover:text-white p-2 rounded-full transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-yellow-500 hover:text-white p-2 rounded-full transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.563-11.87c0-.213-.005-.425-.015-.636A10.065 10.065 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-yellow-500 hover:text-white p-2 rounded-full transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/>
                </svg>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-yellow-500 hover:text-white p-2 rounded-full transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Latest News */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 pb-2 border-b border-gray-700 inline-block">
              Latest News
            </h3>
            <div className="space-y-4 mt-4">
              {latestNews.map((news) => (
                <div key={news.id} className="group cursor-pointer flex gap-3">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-12 h-12 rounded-lg object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-300 group-hover:text-yellow-500 transition-colors line-clamp-2">
                      {news.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{news.date}</p>
                  </div>
                </div>
              ))}
              <button className="text-yellow-500 hover:text-yellow-400 text-sm font-semibold mt-2 inline-flex items-center gap-1">
                View All News →
              </button>
            </div>
          </div>

          {/* Column 3 - Popular News */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 pb-2 border-b border-gray-700 inline-block">
              Popular News
            </h3>
            <div className="space-y-4 mt-4">
              {popularNews.map((news) => (
                <div key={news.id} className="group cursor-pointer flex gap-3">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-12 h-12 rounded-lg object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-300 group-hover:text-yellow-500 transition-colors line-clamp-2">
                      {news.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="text-xs text-gray-500">{news.views}</span>
                    </div>
                  </div>
                </div>
              ))}
              <button className="text-yellow-500 hover:text-yellow-400 text-sm font-semibold mt-2 inline-flex items-center gap-1">
                View Popular News →
              </button>
            </div>
          </div>

          {/* Column 4 - Contact & Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 pb-2 border-b border-gray-700 inline-block">
              Contact Us
            </h3>
            
            {/* Address */}
            <div className="flex gap-3 mb-4">
              <svg className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-gray-400 text-sm leading-relaxed">
                A-1/270, Ground Floor, Sector-4, Rohini, New Delhi 110085
              </p>
            </div>

            {/* Phone */}
            <div className="flex gap-3 mb-4">
              <svg className="w-5 h-5 text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="text-gray-400 text-sm">+91 80097 92188</p>
                <p className="text-gray-500 text-xs">Mon - Sat, 10 AM - 7 PM</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-3 mb-6">
              <svg className="w-5 h-5 text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-gray-400 text-sm">contact@coinmedlegal.com</p>
                <p className="text-gray-500 text-xs">support@coinmedlegal.com</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-white mb-3">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <a key={index} href="#" className="text-gray-400 text-sm hover:text-yellow-500 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center">
              © 2024 CoinMedLegal. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-yellow-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-yellow-500 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-yellow-500 text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </footer>
  );
};

export default Footer;