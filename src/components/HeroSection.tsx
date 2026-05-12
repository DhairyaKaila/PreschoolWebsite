"use client";

import { motion, Variants } from "framer-motion";
import { Calendar, MessageCircle, Star, Users, Shield, Trophy } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  const headline = "Where Little Minds Begin Their Bright Journey";
  const words = headline.split(" ");

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

  const floatingBadges = [
    { icon: <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />, text: "5/5 Rating", position: "top-4 left-4" },
    { icon: <Users className="w-4 h-4 text-blue-500" />, text: "500+ Happy Families", position: "bottom-4 right-4" }
  ];

  const trustPoints = [
    { icon: Shield, text: "CCTV Enabled" },
    { icon: Star, text: "Safe Campus" },
    { icon: Users, text: "Play-Based Learning" },
    { icon: Calendar, text: "Daycare Available" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient and Blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-peach/20 via-background to-sky-blue/20">
        <div className="absolute top-20 left-20 w-96 h-96 blob-shape animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 blob-shape animate-blob" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 blob-shape animate-blob" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariant}
            className="lg:col-span-7"
          >
            {/* Trust Badge */}
            <motion.div variants={blurInVariant} className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
              <Trophy className="w-5 h-5" />
              <span className="text-sm font-medium">Trusted by 500+ Families</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-nunito font-bold text-4xl md:text-5xl lg:text-6xl text-text mb-6 leading-tight">
              <motion.div variants={containerVariant} className="flex flex-wrap">
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={blurInVariant}
                    className="mr-2 mb-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            </h1>

            {/* Subheadline */}
            <motion.p 
              variants={blurInVariant}
              className="text-lg md:text-xl text-muted mb-8 max-w-2xl"
            >
              Safe, joyful and activity-based preschool for children aged 1.5 to 6 years.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={blurInVariant}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a href="#contact" className="flex items-center justify-center space-x-2 bg-black text-white px-8 py-4 rounded-full hover:bg-black/90 transition-all duration-200 hover-lift">
                <Calendar size={20} />
                <span className="font-medium">Book a School Visit</span>
              </a>
              <a href="https://wa.me/919408222614" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-200">
                <MessageCircle size={20} />
                <span className="font-medium">Enquire Now</span>
              </a>
            </motion.div>

            {/* Trust Points */}
            <motion.div 
              variants={blurInVariant}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <point.icon size={16} className="text-primary" />
                  <span className="text-sm text-text">{point.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-img.png"
                alt="Happy Children Learning"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              
              {/* Floating Badges */}
              {floatingBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className={`absolute ${badge.position} bg-white rounded-full shadow-lg px-3 py-2 flex items-center space-x-1 animate-float`}
                >
                  <div className="text-lg">{badge.icon}</div>
                  <span className="text-xs font-medium text-text">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
