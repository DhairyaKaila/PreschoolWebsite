"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, X, Eye, Trash2, Image as ImageIcon } from "lucide-react";

const AdminGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isUploading, setIsUploading] = useState(false);

  const categories = ["all", "classroom", "events", "activities", "facilities"];
  
  const galleryImages = [
    { id: 1, category: "classroom", name: "Classroom 1", date: "2024-06-15" },
    { id: 2, category: "events", name: "Annual Day 2024", date: "2024-06-10" },
    { id: 3, category: "activities", name: "Art & Craft", date: "2024-06-08" },
    { id: 4, category: "facilities", name: "Playground", date: "2024-06-05" },
    { id: 5, category: "classroom", name: "Classroom 2", date: "2024-06-03" },
    { id: 6, category: "activities", name: "Music Class", date: "2024-06-01" },
  ];

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
        <p className="text-gray-600 mt-2">Manage school gallery images</p>
      </motion.div>

      {/* Upload Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
          <Upload size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Images</h3>
          <p className="text-gray-600 mb-4">Drag and drop images here, or click to select files</p>
          <button
            onClick={() => setIsUploading(true)}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Select Files
          </button>
        </div>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <ImageIcon size={48} className="text-gray-400" />
                </div>
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center space-x-2">
                <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                  <Eye size={16} />
                </button>
                <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                  <Trash2 size={16} className="text-red-500" />
                </button>
              </div>
              <div className="mt-2">
                <p className="font-medium text-gray-900">{image.name}</p>
                <p className="text-sm text-gray-500">{image.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AdminGallery;
