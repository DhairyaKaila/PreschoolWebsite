"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Clock, Users, Award, PlayCircle } from "lucide-react";
import Image from "next/image";

const ProgramsSection = () => {
  const [activeTab, setActiveTab] = useState("playgroup");

  const tabs = [
    { id: "playgroup", label: "Playgroup" },
    { id: "nursery", label: "Nursery" },
    { id: "jrkg", label: "Jr. KG" },
    { id: "srkg", label: "Sr. KG" },
    { id: "daycare", label: "Daycare" }
  ];

  const programs = {
    playgroup: {
      age: "1.5 - 2.5 years",
      name: "Playgroup Program",
      description: "A gentle introduction to learning through play, music, and movement. Our playgroup focuses on sensory development, social skills, and emotional growth in a nurturing environment.",
      features: [
        "Sensory & Motor Skill Development",
        "Music & Movement Activities",
        "Story Time & Puppet Shows",
        "Art & Craft Exploration",
        "Social Skills Development",
        "Basic Language Introduction"
      ],
      duration: "2 hours/day",
      timing: "9:00 AM - 11:00 AM",
      emoji: "🧸",
      image: "/images/playgropprogram.png"
    },
    nursery: {
      age: "2.5 - 3.5 years",
      name: "Nursery Program",
      description: "Building foundational skills through structured play and guided learning. Children develop pre-reading, pre-writing, and numeracy skills while having fun.",
      features: [
        "Phonics & Pre-Reading Skills",
        "Number Recognition & Counting",
        "Fine Motor Skill Activities",
        "Science & Nature Exploration",
        "Dramatic Play & Role Playing",
        "Basic Computer Skills"
      ],
      duration: "3 hours/day",
      timing: "9:00 AM - 12:00 PM",
      emoji: "🌈",
      image: "/images/NurseryProgram.png"
    },
    jrkg: {
      age: "3.5 - 4.5 years",
      name: "Junior Kindergarten",
      description: "Preparing children for formal schooling with advanced literacy, numeracy, and cognitive skills. Focus on independent thinking and problem-solving.",
      features: [
        "Reading & Writing Readiness",
        "Mathematical Concepts",
        "Environmental Science",
        "Creative Writing & Storytelling",
        "Logical Thinking Activities",
        "Public Speaking & Presentations"
      ],
      duration: "4 hours/day",
      timing: "9:00 AM - 1:00 PM",
      emoji: "📚",
      image: "/images/JuniorKindergarten.png"
    },
    srkg: {
      age: "4.5 - 6 years",
      name: "Senior Kindergarten",
      description: "Comprehensive preparation for primary school with advanced academics, leadership skills, and social-emotional development.",
      features: [
        "Advanced Reading Comprehension",
        "Mathematical Operations",
        "Project-Based Learning",
        "Leadership & Teamwork Skills",
        "Cultural Awareness & Values",
        "School Readiness Program"
      ],
      duration: "4 hours/day",
      timing: "9:00 AM - 1:00 PM",
      emoji: "🎓",
      image: "/images/SeniorKindergarten.png"
    },
    daycare: {
      age: "1.5 - 6 years",
      name: "Daycare Program",
      description: "Extended care program with structured activities, healthy meals, and supervised play. Perfect for working parents seeking quality childcare.",
      features: [
        "Extended Hours Care",
        "Healthy Meals & Snacks",
        "Nap Time & Rest Periods",
        "Homework Assistance",
        "Indoor & Outdoor Play",
        "Weekend Care Available"
      ],
      duration: "Full Day",
      timing: "8:00 AM - 6:00 PM",
      emoji: "🏠",
      image: "/images/DaycareProgram.png"
    }
  };

  const blurInVariant: Variants = {
    hidden: { opacity: 0, filter: "blur(12px)", y: 40 },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  const currentProgram = programs[activeTab as keyof typeof programs];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-accent/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={blurInVariant}
          className="text-center mb-12"
        >
          <h2 className="font-nunito font-bold text-3xl md:text-4xl text-text mb-4">
            Our Programs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={blurInVariant}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-black text-white shadow-lg transform scale-105"
                  : "bg-white text-text hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Program Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-8 p-8">
              {/* Left Side - Content */}
              <div className="space-y-6">
                {/* Age Badge */}
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                  <Users size={16} />
                  <span className="text-sm font-medium">{currentProgram.age}</span>
                </div>

                {/* Program Name */}
                <h3 className="font-nunito font-bold text-2xl md:text-3xl text-text">
                  {currentProgram.name}
                </h3>

                {/* Description */}
                <p className="text-muted leading-relaxed">
                  {currentProgram.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-text mb-4">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentProgram.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Duration & Timing */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <Clock size={20} className="text-primary" />
                    <div>
                      <div className="text-sm text-muted">Duration</div>
                      <div className="font-medium text-text">{currentProgram.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award size={20} className="text-primary" />
                    <div>
                      <div className="text-sm text-muted">Timing</div>
                      <div className="font-medium text-text">{currentProgram.timing}</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full sm:w-auto bg-black text-white px-8 py-3 rounded-full hover:bg-black/90 transition-colors duration-200 font-medium border-none">
                  Enquire Now
                </button>
              </div>

              {/* Right Side - Illustration */}
              <div className="relative flex items-center justify-center">
                <div className="relative">
                  {currentProgram.image ? (
                    <Image
                      src={currentProgram.image}
                      alt={currentProgram.name}
                      width={300}
                      height={300}
                      className="w-full h-auto object-cover rounded-2xl shadow-lg"
                    />
                  ) : (
                    <>
                      {/* Background Circle */}
                      <div className="w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-8xl mb-4">{currentProgram.emoji}</div>
                          <p className="text-muted font-medium">{currentProgram.name}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProgramsSection;
