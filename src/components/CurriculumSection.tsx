"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Microscope, Rocket, BookOpen, Book, Palette, Music, Star } from "lucide-react";

const CurriculumSection = () => {
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

  const curriculumCards = [
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Activity-Based Learning",
      description: "Hands-on experiences that make learning fun and memorable through exploration and discovery.",
      color: "from-orange-400 to-orange-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "STEAM Learning",
      description: "Integrating Science, Technology, Engineering, Arts, and Mathematics for holistic development.",
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Phonics",
      description: "Systematic phonics instruction to build strong reading and language foundations.",
      color: "from-green-400 to-green-500"
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Storytelling",
      description: "Developing imagination, language skills, and emotional intelligence through stories.",
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Art & Craft",
      description: "Creative expression through various art mediums enhancing fine motor skills and creativity.",
      color: "from-pink-400 to-pink-500"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Dance & Music",
      description: "Rhythm, movement, and musical activities for physical coordination and emotional expression.",
      color: "from-indigo-400 to-indigo-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Life Skills",
      description: "Essential life skills including independence, social skills, and emotional regulation.",
      color: "from-yellow-400 to-yellow-500"
    }
  ];

  return (
    <section id="curriculum" className="py-20 bg-white">
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
            What Your Child Will Learn
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A holistic curriculum designed for whole-child development, nurturing every aspect of your little one's growth
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Curriculum Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariant}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {curriculumCards.map((card, index) => (
            <motion.div
              key={index}
              variants={blurInVariant}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover-lift group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, 0]
                }}
                transition={{ duration: 0.5 }}
                className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="text-white">{card.icon}</div>
              </motion.div>

              {/* Title */}
              <h3 className="font-semibold text-text text-lg mb-3 group-hover:text-primary transition-colors duration-200">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted leading-relaxed">
                {card.description}
              </p>

              {/* Decorative Element */}
              <div className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section - Additional Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={blurInVariant}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-nunito font-bold text-2xl text-text mb-4">
                  Our Teaching Philosophy
                </h3>
                <p className="text-muted mb-6">
                  We believe that every child learns differently. Our curriculum is designed to adapt to individual learning styles, 
                  ensuring that each child progresses at their own pace while building confidence and independence.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-text">Child-centered approach with individual attention</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-text">Balance between academic and social-emotional learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-text">Regular assessments and parent communication</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/ourteching.png"
                  alt="Our Teaching Philosophy"
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurriculumSection;
