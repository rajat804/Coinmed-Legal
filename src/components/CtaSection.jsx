const CtaSection = () => {
  return (
    <>
      <div className="relative mt-12 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&h=400&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10 py-12 md:py-16 px-6 md:px-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us help you navigate your legal challenges with expert guidance and personalized solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Schedule Consultation
              </button>
              <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
    </>
  )
}

export default CtaSection
