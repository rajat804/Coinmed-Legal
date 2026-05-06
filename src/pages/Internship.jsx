// components/Internship.jsx

const Internship = () => {

  const expectations = [
    {
      title: "Professionalism",
      description: "Maintain a high standard of professionalism in all interactions, both within the firm and outside it. Adhere to the firm's dress code and punctuality requirements."
    },
    {
      title: "Confidentiality",
      description: "Respect and maintain the confidentiality of all client information and sensitive case details. Sign and abide by any confidentiality agreements required by the firm."
    },
    {
      title: "Diligence and Hard Work",
      description: "Demonstrate dedication and a strong work ethic in all assigned tasks. Be proactive in seeking out opportunities to learn and contribute."
    },
    {
      title: "Research and Analysis",
      description: "Conduct thorough legal research and provide well-reasoned analyses on assigned topics. Present findings in a clear, concise, and organized manner."
    },
    {
      title: "Attention to Detail",
      description: "Ensure accuracy and attention to detail in all written work, including legal documents, briefs, and memos. Proofread and review work before submission to supervisors."
    },
    {
      title: "Team Collaboration",
      description: "Work effectively as part of a team, showing respect and support for colleagues. Participate actively in team meetings, discussions, and collaborative projects."
    },
    {
      title: "Communication Skills",
      description: "Exhibit strong written and verbal communication skills. Keep supervisors informed of progress on assignments and any challenges encountered."
    },
    {
      title: "Adaptability and Learning",
      description: "Be open to feedback and willing to make improvements based on constructive criticism. Show a willingness to learn new skills and adapt to the dynamic environment of the firm."
    },
    {
      title: "Time Management",
      description: "Manage time effectively to meet deadlines and handle multiple tasks simultaneously. Prioritize tasks based on urgency and importance."
    }
  ];

  const handleApplyClick = () => {
    window.open('https://docs.google.com/forms/d/1TRY9prWA1wz4SkSP3Wzcsg_-z3J1NR6Bidex32g8IrA/edit', '_blank');
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 rounded-full mb-3 md:mb-4">
            CAREER OPPORTUNITY
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            CoinMed <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500">Legal Internship</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto my-4 md:my-6 rounded-full"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Join our team and gain hands-on experience in the legal field
          </p>
        </div>

        {/* About the Internship */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">About the Internship</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            We are delighted to invite applications from dedicated and enthusiastic law students for our Internship program at <span className="font-semibold text-yellow-600">CoinMed Legal</span>. 
            The Internship offers a unique opportunity to gain hands-on experience in the legal field, work alongside experienced professionals, 
            and develop essential skills for your future career.
          </p>
        </div>

        {/* Eligibility & What We Offer - 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Eligibility */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Eligibility</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Open to law students currently enrolled in a recognized law program.
            </p>
          </div>

          {/* What We Offer */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">What We Offer</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-600">
                <svg className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Exposure to real-world legal practices and casework</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <svg className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Mentorship from seasoned attorneys</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <svg className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Opportunities to participate in client meetings, court visits, and legal research</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <svg className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>A dynamic and supportive learning environment</span>
              </li>
            </ul>
          </div>
        </div>

        {/* What We Expect Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">What We Expect</h3>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            At <span className="font-semibold text-yellow-600">CoinMed Legal</span>, we believe in providing a comprehensive learning experience for our interns. To ensure both personal and professional growth, we have outlined the following expectations:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expectations.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </span>
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          
          <p className="text-gray-600 text-sm italic mt-6 pt-4 border-t border-gray-100">
            By meeting these expectations, interns at <span className="font-semibold">CoinMed Legal</span> will gain valuable experience and contribute meaningfully to the success of the firm. 
            We are committed to supporting our interns in their professional journey and providing a rewarding internship experience.
          </p>
        </div>

        {/* Internship Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Duration */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 text-white text-center">
            <svg className="w-8 h-8 mx-auto mb-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h4 className="font-bold text-lg">Duration</h4>
            <p className="text-sm opacity-90">1 Month (Optionally extendable based on performance)</p>
          </div>
          
          {/* Stipend */}
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-5 text-white text-center">
            <svg className="w-8 h-8 mx-auto mb-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h4 className="font-bold text-lg">Stipend</h4>
            <p className="text-sm opacity-90">No Stipend</p>
          </div>
          
          {/* Mode */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-5 text-white text-center">
            <svg className="w-8 h-8 mx-auto mb-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h4 className="font-bold text-lg">Mode</h4>
            <p className="text-sm opacity-90">2 Physical spots every month (throughout the year) / Online</p>
          </div>
          
          {/* Responsibility */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-5 text-white text-center">
            <svg className="w-8 h-8 mx-auto mb-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h4 className="font-bold text-lg">Responsibility</h4>
            <p className="text-sm opacity-90">Conducting in-depth legal research, drafting in respect of ongoing/new cases</p>
          </div>
        </div>

        {/* Application Procedure */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Application Procedure</h3>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            To apply about this exciting opportunity, send a writeup on any legal topic <span className="font-semibold">(Maximum Word limit up to 300-500 words)</span> and CV via this google form link.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-5 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m1.102-4.768a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l6.586-6.586a4 4 0 00-5.586-5.586l-2.93 2.93" />
                </svg>
                <a 
                  href="https://docs.google.com/forms/d/1TRY9prWA1wz4SkSP3Wzcsg_-z3J1NR6Bidex32g8IrA/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:text-yellow-700 font-semibold break-all"
                >
                  https://docs.google.com/forms/d/1TRY9prWA1wz4SkSP3Wzcsg_-z3J1NR6Bidex32g8IrA/edit
                </a>
              </div>
              <button
                onClick={handleApplyClick}
                className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                Apply Now
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">For further query contact on this email id:</span>
            </div>
            <a 
              href="mailto:internship.insart@gmail.com"
              className="text-yellow-600 hover:text-yellow-700 font-semibold flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              internship.coinmedlegal@gmail.com
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button
            onClick={handleApplyClick}
            className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white font-semibold py-3 px-10 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-lg"
          >
            Apply for Internship
          </button>
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
        .grid > div, .bg-white {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Internship;