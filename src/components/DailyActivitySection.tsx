"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const DailyActivitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const blurInVariant: Variants = {
    hidden: { opacity: 0, filter: "blur(12px)", y: 40 },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  const activities = [
    {
      time: "8:00 AM",
      emoji: "⭕",
      title: "Circle Time",
      description: "Morning greetings, songs, and daily planning",
      color: "from-orange-400 to-orange-500"
    },
    {
      time: "9:00 AM",
      emoji: "🎨",
      title: "Creative Activities",
      description: "Art, craft, and expressive learning",
      color: "from-pink-400 to-pink-500"
    },
    {
      time: "10:00 AM",
      emoji: "🏃",
      title: "Outdoor Play",
      description: "Physical activities and gross motor development",
      color: "from-green-400 to-green-500"
    },
    {
      time: "11:00 AM",
      emoji: "🎵",
      title: "Music & Dance",
      description: "Rhythm, movement, and musical exploration",
      color: "from-purple-400 to-purple-500"
    },
    {
      time: "12:00 PM",
      emoji: "📚",
      title: "Storytelling",
      description: "Interactive stories and language development",
      color: "from-blue-400 to-blue-500"
    },
    {
      time: "1:00 PM",
      emoji: "😴",
      title: "Nap Time",
      description: "Rest and rejuvenation for little ones",
      color: "from-indigo-400 to-indigo-500"
    },
    {
      time: "2:30 PM",
      emoji: "🥗",
      title: "Healthy Snacks",
      description: "Nutritious meals and social dining",
      color: "from-yellow-400 to-yellow-500"
    }
  ];

  return (
    <section id="daily-activities" className="py-20 bg-gradient-to-br from-background to-white">
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
            A Day at Our School
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Structured yet fun — every hour is designed for growth, learning, and happiness
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Activity Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={blurInVariant}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              {/* Time Badge */}
              <div className="bg-white border border-gray-200 rounded-full px-3 py-1 mb-3 shadow-sm inline-block">
                <span className="text-xs font-medium text-muted">{activity.time}</span>
              </div>

              {/* Activity Circle */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className={`w-20 h-20 bg-gradient-to-br ${activity.color} rounded-full flex items-center justify-center mb-3 shadow-lg cursor-pointer mx-auto`}
              >
                <span className="text-2xl">{activity.emoji}</span>
              </motion.div>

              {/* Activity Info */}
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover-lift">
                <h4 className="font-semibold text-text text-sm mb-2">{activity.title}</h4>
                <p className="text-xs text-muted leading-relaxed">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="hidden">
          <div className="relative" ref={ref}>
            {/* Timeline Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute left-8 top-0 w-1 bg-gradient-to-b from-primary to-secondary"
            />

            {/* Activity Nodes */}
            <div className="space-y-8">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ 
                    delay: 0.3 + index * 0.15, 
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="flex items-start space-x-4"
                >
                  {/* Time Badge */}
                  <div className="flex flex-col items-center">
                    <div className="bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm">
                      <span className="text-xs font-medium text-muted">{activity.time}</span>
                    </div>
                    
                    {/* Activity Circle */}
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-full flex items-center justify-center shadow-lg -mt-2`}
                    >
                      <span className="text-xl">{activity.emoji}</span>
                    </motion.div>
                  </div>

                  {/* Activity Info */}
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover-lift">
                    <h4 className="font-semibold text-text mb-2">{activity.title}</h4>
                    <p className="text-sm text-muted leading-relaxed">{activity.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={blurInVariant}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 text-center">
            <h3 className="font-nunito font-bold text-xl text-text mb-3">
              Every Moment is a Learning Opportunity
            </h3>
            <p className="text-muted mb-4">
              Our carefully crafted daily schedule ensures that children get the perfect balance of structured learning, 
              creative play, physical activity, and rest. Each activity is designed to develop specific skills while keeping 
              the joy and wonder of childhood alive.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm text-text">Age-appropriate activities</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span className="text-sm text-text">Flexible scheduling</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-sm text-text">Individual attention</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DailyActivitySection;
