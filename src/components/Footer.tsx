"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Camera, Video, Users, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
    { name: "Admissions", href: "#admissions" }
  ];

  const programs = [
    { name: "Playgroup", href: "#programs" },
    { name: "Nursery", href: "#programs" },
    { name: "Jr. KG", href: "#programs" },
    { name: "Sr. KG", href: "#programs" },
    { name: "Daycare", href: "#programs" }
  ];

  const socialLinks = [
    { icon: Users, href: "#", label: "Facebook" },
    { icon: Camera, href: "#", label: "Instagram" },
    { icon: Video, href: "#", label: "YouTube" },
    { icon: MessageCircle, href: "https://wa.me/918012345678", label: "WhatsApp" }
  ];

  return (
    <footer className="bg-[#1E293B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1 - Logo & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <img 
                  src="/images/sanviprischoollogo.png" 
                  alt="Sanvi Pre School Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="font-nunito font-bold text-xl text-white">
                  Sanvi Pre School
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Where little minds begin their bright journey. Nurturing creativity, curiosity, and confidence in every child.
              </p>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-200">Follow Us</p>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors duration-200"
                      title={social.label}
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Column 2 - Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3 - Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-semibold text-lg mb-4">Programs</h3>
              <ul className="space-y-2">
                {programs.map((program, index) => (
                  <li key={index}>
                    <a
                      href={program.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {program.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4 - Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-300">
                      Shree Hari Complex, Madhav Park,<br />
                      Near Bapasitaram Chowk, Madvi<br />
                      Rajkot - 4
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-primary flex-shrink-0" />
                  <a href="tel:9408222614" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">94082 22614</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-primary flex-shrink-0" />
                  <a href="mailto:sanvipreschool2024@gmail.com" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">sanvipreschool2024@gmail.com</a>
                </div>
              </div>
              
              {/* Mini Map */}
              <div className="mt-4 rounded-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={24} className="text-primary mx-auto mb-2" />
                    <p className="text-xs text-gray-300">View Map</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm text-gray-400"
            >
              <p>
                © 2024 Sanvi Pre School. All rights reserved. Made with{" "}
                <Heart size={12} className="inline text-red-500 fill-red-500" />{" "}
                for little learners.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex space-x-6 text-sm"
            >
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
