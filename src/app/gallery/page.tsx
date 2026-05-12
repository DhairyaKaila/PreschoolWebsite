"use client";

import { motion, Variants } from "framer-motion";
import { Camera, Heart, MessageCircle, Share2 } from "lucide-react";
import Link from "next/link";

const GalleryPage = () => {
  const galleryImages = [
    { id: 1, title: "Learning Time", category: "classroom", height: "h-64" },
    { id: 2, title: "Art & Craft", category: "activities", height: "h-80" },
    { id: 3, title: "Annual Day", category: "events", height: "h-56" },
    { id: 4, title: "Play Time", category: "outdoor", height: "h-72" },
    { id: 5, title: "Music Class", category: "music", height: "h-60" },
    { id: 6, title: "Story Time", category: "classroom", height: "h-96" },
    { id: 7, title: "Science Fun", category: "activities", height: "h-64" },
    { id: 8, title: "Sports Day", category: "events", height: "h-80" },
    { id: 9, title: "Nature Walk", category: "outdoor", height: "h-56" },
    { id: 10, title: "Dance Performance", category: "music", height: "h-72" },
    { id: 11, title: "Circle Time", category: "classroom", height: "h-64" },
    { id: 12, title: "Puzzle Time", category: "activities", height: "h-88" },
    { id: 13, title: "Birthday Celebration", category: "events", height: "h-60" },
    { id: 14, title: "Garden Play", category: "outdoor", height: "h-80" },
    { id: 15, title: "Instrument Fun", category: "music", height: "h-56" },
    { id: 16, title: "Reading Corner", category: "classroom", height: "h-72" },
    { id: 17, title: "Painting Session", category: "activities", height: "h-64" },
    { id: 18, title: "Cultural Program", category: "events", height: "h-96" },
    { id: 19, title: "Swimming Fun", category: "outdoor", height: "h-60" },
    { id: 20, title: "Rhyme Time", category: "music", height: "h-80" },
    { id: 21, title: "Math Games", category: "classroom", height: "h-56" },
    { id: 22, title: "Clay Modeling", category: "activities", height: "h-72" },
    { id: 23, title: "Festival Celebration", category: "events", height: "h-64" },
    { id: 24, title: "Sand Play", category: "outdoor", height: "h-88" }
  ];

  const blurInVariant: Variants = {
    hidden: { opacity: 0, filter: "blur(12px)", y: 40 },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  const containerVariant: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <img 
                src="/images/sanviprischoollogo.png" 
                alt="Sanvi Pre School Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="font-nunito font-bold text-lg" style={{ color: '#54131d' }}>
                Sanvi Pre School
              </span>
            </Link>
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={blurInVariant}
          className="text-center mb-12"
        >
          <h1 className="font-nunito font-bold text-4xl md:text-5xl text-text mb-4">
            Complete Gallery
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Explore all the precious moments and memories from Sanvi Pre School
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Pinterest-style Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariant}
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={blurInVariant}
              whileHover={{ 
                y: -4,
              }}
              transition={{ duration: 0.3 }}
              className="break-inside-avoid group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg mb-3">
                {/* Image Placeholder */}
                <div className={`${image.height} bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center`}>
                  <Camera size={48} className="text-primary/30" />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-semibold text-lg mb-2">{image.title}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-200 capitalize">{image.category}</span>
                      <div className="flex space-x-3">
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                          <Heart size={16} />
                        </button>
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                          <MessageCircle size={16} />
                        </button>
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                          <Share2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryPage;
