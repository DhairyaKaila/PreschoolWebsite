"use client";

import { motion, Variants } from "framer-motion";
import { Heart, Shield, Lightbulb, Palette, Sprout, BookOpen } from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
  const blurInVariant: Variants = {
    hidden: { opacity: 0, filter: "blur(12px)", y: 40 },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  const slideLeftVariant: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  const slideRightVariant: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  const keyPoints = [
    {
      icon: Heart,
      title: "Child-First Learning Approach",
      description: "Every child's unique needs and interests are at the heart of our teaching methodology."
    },
    {
      icon: Shield,
      title: "Safe, Nurturing Environment",
      description: "CCTV-enabled campus with trained staff ensuring complete safety and emotional security."
    },
    {
      icon: Lightbulb,
      title: "Focus on Emotional & Academic Development",
      description: "Balanced curriculum that nurtures both cognitive growth and emotional intelligence."
    },
    {
      icon: Palette,
      title: "Activity-Based Curriculum",
      description: "Hands-on learning experiences that make education fun and memorable."
    }
  ];

  const teamCards = [
    {
      type: "Founder",
      name: "Mrs. Ananya Sharma",
      message: "Every child is a seed of potential. With the right environment and care, they blossom into extraordinary individuals.",
      icon: <Sprout className="w-8 h-8 text-green-500" />
    },
    {
      type: "Principal",
      name: "Dr. Rajesh Kumar",
      message: "Education is not about filling a bucket, but lighting a fire of curiosity that lasts a lifetime.",
      icon: <BookOpen className="w-8 h-8 text-blue-500" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Video */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideLeftVariant}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about.png"
                alt="About Sanvi Pre School"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideRightVariant}
            className="space-y-8"
          >
            {/* Section Label */}
            <motion.div variants={blurInVariant} className="inline-block">
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">About Us</span>
              <div className="h-0.5 bg-gradient-to-r from-primary to-secondary w-full mt-1"></div>
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={blurInVariant} className="font-nunito font-bold text-3xl md:text-4xl text-text leading-tight">
              A Place Where Every Child Feels at Home
            </motion.h2>

            {/* Introduction */}
            <motion.p variants={blurInVariant} className="text-lg text-muted leading-relaxed">
              At Sanvi Pre School, we believe that early childhood is a magical time of discovery, growth, and wonder. 
              Our nurturing environment is designed to spark curiosity, build confidence, and create a lifelong love for learning. 
              We understand that each child is unique, and our dedicated team works tirelessly to provide personalized attention 
              that helps every little one flourish.
            </motion.p>

            {/* Key Points */}
            <motion.div variants={blurInVariant} className="space-y-4">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <point.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-1">{point.title}</h4>
                    <p className="text-sm text-muted">{point.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Team Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={blurInVariant}
          className="grid md:grid-cols-2 gap-6 mt-16"
        >
          {teamCards.map((card, index) => (
            <motion.div
              key={index}
              variants={blurInVariant}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-background to-white border border-gray-100 rounded-2xl p-6 shadow-sm hover-lift"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">{card.icon}</div>
                <div>
                  <div className="text-sm font-medium text-primary">{card.type}</div>
                  <div className="font-semibold text-text">{card.name}</div>
                </div>
              </div>
              <p className="text-sm text-muted italic">"{card.message}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
