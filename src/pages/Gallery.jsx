// components/Gallery.jsx
import { useState } from 'react';

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('all');

    const galleryImages = {
        all: [
            // Lawyers at Work Images
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&h=300&fit=crop",
            // Court Room Images
            "https://images.unsplash.com/photo-1589578228447-e1a4e481c6e8?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1589391886645-d0ba5a8cc4fa?w=400&h=300&fit=crop",
            // Miami Conference Images
            "https://images.unsplash.com/photo-1515187029135-8ee3e6df8a50?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1560523159-4a9692d222ef?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=400&h=300&fit=crop"
        ],
        lawyers: [
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f", // lawyer with justice scale
            "https://images.unsplash.com/photo-1555374018-13a8994ab246", // legal documents
            "https://images.unsplash.com/photo-1605664041952-68e3c0c4c9c4", // courtroom
            "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7", // business lawyer
            "https://images.unsplash.com/photo-1589216532372-1c2a367900d9", // law books
            "https://images.unsplash.com/photo-1521791136064-7986c2920216", // lawyer discussion
            "https://images.unsplash.com/photo-1562564055-71e051d33c19", // legal handshake
            "https://images.unsplash.com/photo-1600267165600-3f0a2f7a7f72", // judge hammer
            "https://images.unsplash.com/photo-1556155092-8707de31f9c4", // office lawyer
            "https://images.unsplash.com/photo-1593113598332-cd288d649433"  // law consultation
        ],
        work: [
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=400&h=300&fit=crop"
        ],
        courtroom: [
            "https://images.unsplash.com/photo-1589578228447-e1a4e481c6e8?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1589391886645-d0ba5a8cc4fa?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop"
        ],
        conference: [
            "https://images.unsplash.com/photo-1515187029135-8ee3e6df8a50?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1560523159-4a9692d222ef?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1541746972996-4fdd1b4c5c9b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop"
        ]
    };

    const getCurrentImages = () => {
        if (activeTab === 'all') return galleryImages.all;
        if (activeTab === 'lawyers') return galleryImages.lawyers;
        if (activeTab === 'work') return galleryImages.work;
        if (activeTab === 'courtroom') return galleryImages.courtroom;
        if (activeTab === 'conference') return galleryImages.conference;
        return galleryImages.all;
    };

    const currentImages = getCurrentImages();

    return (
        <section className="py-12 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 rounded-full mb-3 md:mb-4">
                        OUR GALLERY
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
                        Photo <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500">Gallery</span>
                    </h2>
                    <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto my-4 md:my-6 rounded-full"></div>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                        Explore our memorable moments and achievements
                    </p>
                </div>

                {/* Tab Buttons */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'all'
                                ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg transform scale-105'
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setActiveTab('lawyers')}
                        className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'lawyers'
                                ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg transform scale-105'
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        LAWYERS
                    </button>
                    <button
                        onClick={() => setActiveTab('work')}
                        className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'work'
                                ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg transform scale-105'
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        LAWYERS AT WORK
                    </button>
                    <button
                        onClick={() => setActiveTab('courtroom')}
                        className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'courtroom'
                                ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg transform scale-105'
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        COURT ROOM
                    </button>
                    <button
                        onClick={() => setActiveTab('conference')}
                        className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'conference'
                                ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg transform scale-105'
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                            }`}
                    >
                        MIAMI CONFERENCE
                    </button>
                </div>

                {/* Gallery Grid - Only Images, No Content */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                    {currentImages.map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        >
                            <img
                                src={image}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-40 sm:h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />

                            {/* Overlay Effect on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Zoom Icon on Hover */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image Count */}
                <div className="text-center mt-10 md:mt-12">
                    <p className="text-gray-500 text-sm">
                        Showing {currentImages.length} images
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

export default Gallery;