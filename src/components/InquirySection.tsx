"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Camera, Video, Users } from "lucide-react";

const InquirySection = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    phoneNumber: "",
    email: "",
    message: ""
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Thank you for your inquiry! We'll contact you soon.");
    setFormData({
      parentName: "",
      childName: "",
      childAge: "",
      phoneNumber: "",
      email: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "School Address",
      value: "Shree Hari Complex, Madhav Park, Near Bapasitaram Chowk, Madvi, Rajkot - 4",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone Number",
      value: "94082 22614",
      href: "tel:9408222614",
      color: "text-secondary"
    },
    {
      icon: Mail,
      label: "Email",
      value: "sanvipreschool2024@gmail.com",
      href: "mailto:sanvipreschool2024@gmail.com",
      color: "text-accent"
    },
    {
      icon: Clock,
      label: "School Hours",
      value: "Mon-Sat 8AM - 6PM",
      color: "text-yellow"
    }
  ];

  const socialLinks = [
    { icon: Users, href: "#", color: "hover:text-blue-600", label: "Facebook" },
    { icon: Camera, href: "#", color: "hover:text-pink-600", label: "Instagram" },
    { icon: Video, href: "#", color: "hover:text-red-600", label: "YouTube" },
    { icon: MessageCircle, href: "https://wa.me/918012345678", color: "hover:text-green-600", label: "WhatsApp" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
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
            Come Visit Us!
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            We'd love to show you around our beautiful campus and answer all your questions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info & Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideLeftVariant}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={blurInVariant}
                  className="flex items-start space-x-4"
                >
                  <div className={`w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <info.icon size={20} className={info.color} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-1">{info.label}</h4>
                    {info.href ? (
                      <a href={info.href} className="text-muted hover:text-primary transition-colors duration-200">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              variants={blurInVariant}
              className="relative rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-primary mx-auto mb-4" />
                  <p className="text-muted font-medium">Interactive Map</p>
                  <p className="text-sm text-muted mt-2">Shree Hari Complex, Madhav Park, Rajkot</p>
                </div>
              </div>
              {/* Overlay for actual map integration */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-200 cursor-pointer flex items-center justify-center">
                <button className="bg-white text-primary px-4 py-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-200">
                  View on Google Maps
                </button>
              </div>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              variants={blurInVariant}
              className="space-y-4"
            >
              <h4 className="font-semibold text-text">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 ${social.color} transition-colors duration-200`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideRightVariant}
          >
            <div className="lg:bg-gradient-to-br lg:from-primary/5 lg:to-secondary/5 lg:rounded-3xl lg:p-8 lg:shadow-lg p-0">
              <h3 className="font-nunito font-bold text-2xl text-text mb-6">
                Book a Free School Visit
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Parent Name */}
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-text mb-2">
                    Parent Name *
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Child Name */}
                <div>
                  <label htmlFor="childName" className="block text-sm font-medium text-text mb-2">
                    Child Name *
                  </label>
                  <input
                    type="text"
                    id="childName"
                    name="childName"
                    value={formData.childName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white"
                    placeholder="Enter your child's name"
                  />
                </div>

                {/* Child Age */}
                <div>
                  <label htmlFor="childAge" className="block text-sm font-medium text-text mb-2">
                    Child Age *
                  </label>
                  <select
                    id="childAge"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white"
                  >
                    <option value="">Select age group</option>
                    <option value="1.5-2.5">1.5 - 2.5 years</option>
                    <option value="2.5-3.5">2.5 - 3.5 years</option>
                    <option value="3.5-4.5">3.5 - 4.5 years</option>
                    <option value="4.5-6">4.5 - 6 years</option>
                  </select>
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-text mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white"
                    placeholder="94082 22614"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white resize-none"
                    placeholder="Tell us about your requirements or any questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Book School Visit</span>
                </motion.button>

                {/* Privacy Note */}
                <p className="text-xs text-muted text-center">
                  By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
