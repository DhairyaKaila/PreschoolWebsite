"use client";

import { motion, Variants } from "framer-motion";
import { Camera } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const GallerySection = () => {
  const galleryImages = [
    { id: 1, title: "Study Time", image: "/images/NurseryProgram.png" },
    { id: 2, title: "Learning Together", image: "/images/JuniorKindergarten.png" },
    { id: 3, title: "Classroom Study", image: "/images/SeniorKindergarten.png" },
    { id: 4, title: "Group Learning", image: "/images/playgropprogram.png" }
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
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-background to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={blurInVariant}
          className="text-center mb-16"
        >
          <h2 className="font-nunito font-bold text-3xl md:text-4xl text-text mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Capturing precious moments of learning, growth, and joy at Sanvi Pre School
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariant}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={blurInVariant}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                {/* Actual Image */}
                <div className="aspect-square">
                  <Image
                    src={image.image}
                    alt={image.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-semibold text-lg">{image.title}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={blurInVariant}
          className="text-center"
        >
          <Link 
            href="/gallery" 
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200 hover-lift"
          >
            View All
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
