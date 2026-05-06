// components/FAQ.jsx
import { useState, useRef } from 'react';

const FAQ = () => {
  const [openGeneral, setOpenGeneral] = useState(null);
  const [openTechnical, setOpenTechnical] = useState(null);
  const [activeTab, setActiveTab] = useState('general');
  const tabsRef = useRef(null);

  const generalQuestions = [
    {
      id: 1,
      question: "What Legal Services Does Your Firm Offer?",
      answer: "Our firm specializes in several areas of law, including Intellectual Property Rights, Commercial Recovery, MACT, General Insurance, Criminal Law, Matrimonial Matters, Medical Negligence, and Information Technology. We are committed to providing expert legal advice and representation to meet your specific needs."
    },
    {
      id: 2,
      question: "How Can I Schedule a Consultation?",
      answer: "Scheduling a consultation is simple. You can either call our office directly or send us an email. We strive to accommodate your schedule and provide timely appointments with prompt support."
    },
    {
      id: 3,
      question: "What Should I Bring to My First Meeting with a Lawyer?",
      answer: "For your initial consultation, bring any relevant documents related to your case, such as contracts, correspondence, identification documents, and any prior legal filings. This will help us understand your situation better and provide more accurate advice."
    },
    {
      id: 4,
      question: "Do You Offer Free Consultations?",
      answer: "Yes, we offer a free initial consultation for most of our services. This allows us to understand your needs and provide you with an overview of how we can assist you without any financial obligation."
    }
  ];

  const technicalQuestions = [
    {
      id: 1,
      question: "What Are the Different Types of Intellectual Property Protections?",
      answer: "The main types of intellectual property protections are patents (for inventions), trademarks (for brand names and logos), copyrights (for creative works), and trade secrets (for confidential business information). Each offers different levels of protection and has specific requirements."
    },
    {
      id: 2,
      question: "What Legal Actions Can Be Taken for Debt Recovery?",
      answer: "Legal actions for debt recovery can include sending a formal demand letter, filing a lawsuit, obtaining a court judgment, and, if necessary, enforcing the judgment through garnishment or seizure of assets. Our firm can advise you on the most effective course of action."
    },
    {
      id: 3,
      question: "What Compensation Can I Claim Under MACT?",
      answer: "Under the Motor Accident Claims Tribunal (MACT), you can claim compensation for medical expenses, loss of income, pain and suffering, and other related costs resulting from a motor vehicle accident. The specific amount of compensation will depend on the details of your case."
    },
    {
      id: 4,
      question: "How Does the Claims Process Work for General Insurance?",
      answer: "The general insurance claims process involves notifying your insurance company of the claim, providing necessary documentation, undergoing an assessment of the claim, and receiving compensation if the claim is approved. Our firm can help you navigate this process and ensure your rights are protected."
    },
    {
      id: 5,
      question: "What Should I Do If I Am Arrested?",
      answer: "If you are arrested, remain calm and do not resist. Ask for a lawyer immediately and refrain from answering any questions without legal representation. Our firm can provide you with the legal support you need during this challenging time."
    },
    {
      id: 6,
      question: "How Can I File for Divorce?",
      answer: "To file for divorce, you must meet the residency requirements of your jurisdiction, complete and file the necessary legal forms, serve your spouse with divorce papers, and attend court hearings as required. Our firm can guide you through each step of this process."
    },
    {
      id: 7,
      question: "What Constitutes Medical Negligence?",
      answer: "Medical negligence occurs when a healthcare professional fails to provide the standard of care expected, resulting in harm to the patient. This can include misdiagnosis, surgical errors, medication mistakes, and lack of informed consent."
    },
    {
      id: 8,
      question: "How Can I Prove Medical Negligence?",
      answer: "To prove medical negligence, you must establish that the healthcare provider owed you a duty of care, breached that duty, and caused harm as a result. This typically requires expert testimony and thorough documentation. Our firm can assist you in gathering the necessary evidence."
    },
    {
      id: 9,
      question: "What Legal Issues Are Covered Under Information Technology Law?",
      answer: "Information Technology law covers a wide range of legal issues including data protection, cybersecurity compliance, software licensing, e-commerce regulations, digital signatures, cyber crimes, intellectual property rights in digital content, privacy policies, and terms of service agreements for online platforms."
    }
  ];

  const toggleGeneral = (id) => {
    setOpenGeneral(openGeneral === id ? null : id);
  };

  const toggleTechnical = (id) => {
    setOpenTechnical(openTechnical === id ? null : id);
  };

  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 rounded-full mb-3 md:mb-4">
            KNOWLEDGE BASE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500">Questions</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto my-4 md:my-6 rounded-full"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Find answers to common questions about our legal services
          </p>
        </div>

        {/* Tab Buttons with Horizontal Scroll on Mobile */}
        <div className="relative mb-8 md:mb-12">
          {/* Left Scroll Button - Mobile Only */}
          <button
            onClick={() => scrollTabs('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 md:hidden bg-white shadow-md rounded-full p-2 text-gray-600 hover:bg-yellow-500 hover:text-white transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Tabs Container - Horizontal Scroll on Mobile */}
          <div
            ref={tabsRef}
            className="flex justify-start md:justify-center gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-8 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <button
              onClick={() => setActiveTab('general')}
              className={`flex-shrink-0 px-5 md:px-8 py-2.5 md:py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === 'general'
                  ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              General Questions
            </button>
            <button
              onClick={() => setActiveTab('technical')}
              className={`flex-shrink-0 px-5 md:px-8 py-2.5 md:py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === 'technical'
                  ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Technical Questions
            </button>
          </div>

          {/* Right Scroll Button - Mobile Only */}
          <button
            onClick={() => scrollTabs('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 md:hidden bg-white shadow-md rounded-full p-2 text-gray-600 hover:bg-yellow-500 hover:text-white transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* General Questions Accordion */}
        {activeTab === 'general' && (
          <div className="space-y-4 animate-fade-in">
            {generalQuestions.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleGeneral(item.id)}
                  className="w-full px-4 md:px-6 py-4 md:py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors gap-2"
                >
                  <span className="font-semibold text-gray-800 text-sm md:text-base flex-1">
                    {item.question}
                  </span>
                  <span className={`text-yellow-500 text-lg md:text-2xl transition-transform duration-300 flex-shrink-0 ${
                    openGeneral === item.id ? 'rotate-180' : ''
                  }`}>
                    ↓
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openGeneral === item.id ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-4 md:px-6 pb-4 md:pb-5">
                    <div className="h-px bg-gray-100 mb-3 md:mb-4"></div>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technical Questions Accordion */}
        {activeTab === 'technical' && (
          <div className="space-y-4 animate-fade-in">
            {technicalQuestions.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleTechnical(item.id)}
                  className="w-full px-4 md:px-6 py-4 md:py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors gap-2"
                >
                  <span className="font-semibold text-gray-800 text-sm md:text-base flex-1">
                    {item.question}
                  </span>
                  <span className={`text-yellow-500 text-lg md:text-2xl transition-transform duration-300 flex-shrink-0 ${
                    openTechnical === item.id ? 'rotate-180' : ''
                  }`}>
                    ↓
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openTechnical === item.id ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-4 md:px-6 pb-4 md:pb-5">
                    <div className="h-px bg-gray-100 mb-3 md:mb-4"></div>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Why Us Section */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Why Choose <span className="text-yellow-400">CoinMed Legal?</span>
          </h3>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-6">
            Navigating the legal system can be complex, but having access to detailed and relevant information 
            can make a significant difference. Our firm is dedicated to providing expert legal services across 
            various fields, ensuring you receive the support and guidance you need.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Experienced Lawyers</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Confidential</span>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 md:mt-10 bg-white rounded-2xl p-6 md:p-8 shadow-lg text-center border border-gray-100">
          <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h4>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            For further assistance, please contact us directly
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 text-gray-700">
              <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-xs md:text-sm">+91 82872 29358</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-xs md:text-sm">+91 99991 14284</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xs md:text-sm">james@coinmedlegal.com</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out;
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default FAQ;

