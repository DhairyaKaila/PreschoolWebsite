"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 2 },
        "(min-width: 1024px)": { slidesToScroll: 3 },
      },
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      childName: "Aarav",
      childClass: "Nursery",
      rating: 5,
      review: "Sanvi Pre School has been a blessing for our family. Aarav has become so confident and loves going to school every day. The teachers are incredibly caring and the curriculum is perfect for his age.",
      avatar: "👩"
    },
    {
      id: 2,
      name: "Rahul Verma",
      childName: "Ananya",
      childClass: "Jr. KG",
      rating: 5,
      review: "The attention to detail and individual care each child receives is remarkable. Ananya has developed amazing social skills and her language development has exceeded our expectations.",
      avatar: "👨"
    },
    {
      id: 3,
      name: "Sneha Patel",
      childName: "Kabir",
      childClass: "Playgroup",
      rating: 5,
      review: "As a first-time parent, I was nervous about sending Kabir to preschool. The staff made the transition so smooth. He's learned so much and made wonderful friends.",
      avatar: "👩"
    },
    {
      id: 4,
      name: "Amit Kumar",
      childName: "Diya",
      childClass: "Sr. KG",
      rating: 5,
      review: "The holistic approach to education is what sets Sanvi Pre School apart. Diya is not just academically prepared but also emotionally intelligent and confident.",
      avatar: "👨"
    },
    {
      id: 5,
      name: "Neha Gupta",
      childName: "Rohan",
      childClass: "Daycare",
      rating: 5,
      review: "The daycare program is excellent. Rohan loves the activities and the healthy meals. As working parents, we have complete peace of mind knowing he's in safe hands.",
      avatar: "👩"
    },
    {
      id: 6,
      name: "Vikram Singh",
      childName: "Myra",
      childClass: "Nursery",
      rating: 5,
      review: "The facilities are top-notch and the CCTV surveillance gives us great comfort. Myra has blossomed from a shy toddler to a confident little girl.",
      avatar: "👨"
    },
    {
      id: 7,
      name: "Kavita Reddy",
      childName: "Arjun",
      childClass: "Jr. KG",
      rating: 5,
      review: "The activity-based learning approach is fantastic. Arjun comes home excited every day with new things he's learned. The parent-teacher communication is excellent.",
      avatar: "👩"
    },
    {
      id: 8,
      name: "Rajesh Malhotra",
      childName: "Sara",
      childClass: "Sr. KG",
      rating: 5,
      review: "Sanvi Pre School has prepared Sara perfectly for primary school. The foundation they build is strong and the values they instill will last a lifetime.",
      avatar: "👨"
    }
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

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-accent/10 to-background">
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
            What Parents Say
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Join our family of 500+ happy parents who trust us with their little ones
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={blurInVariant}
            className="overflow-hidden"
            ref={emblaRef}
          >
            <div className="flex gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                >
                  <motion.div
                    whileHover={{ 
                      y: -8, 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                    }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full hover-lift"
                  >
                    {/* Quote Icon */}
                    <Quote size={24} className="text-primary/20 mb-4" />

                    {/* Star Rating */}
                    <StarRating rating={testimonial.rating} />

                    {/* Review Text */}
                    <p className="text-text italic leading-relaxed my-4 line-clamp-4">
                      "{testimonial.review}"
                    </p>

                    {/* Parent Info */}
                    <div className="flex items-center space-x-3 mt-auto">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
                        <span className="text-xl">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-text">{testimonial.name}</div>
                        <div className="text-sm text-muted">
                          {testimonial.childName} • {testimonial.childClass}
                        </div>
                      </div>
                    </div>

                    {/* School Badge */}
                    <div className="mt-4 inline-flex items-center space-x-1 bg-accent/10 text-accent px-3 py-1 rounded-full">
                      <span className="text-xs">🏫</span>
                      <span className="text-xs font-medium">Sanvi Pre School</span>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
          >
            <ChevronLeft size={20} className="text-text" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
          >
            <ChevronRight size={20} className="text-text" />
          </button>
        </div>

        {/* Dots Navigation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={blurInVariant}
          className="flex justify-center space-x-2 mt-8"
        >
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-primary w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={blurInVariant}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted">Happy Families</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">5/5</div>
                <div className="text-sm text-muted">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">14+</div>
                <div className="text-sm text-muted">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow mb-2">100%</div>
                <div className="text-sm text-muted">Parent Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
