"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Edit, Trash2, Eye, Plus, ToggleLeft, ToggleRight } from "lucide-react";

const AdminTestimonials = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      childName: "Aarav",
      childClass: "Nursery",
      rating: 5,
      review: "Sanvi Pre School has been a blessing for our family. Aarav has become so confident and loves going to school every day.",
      date: "2024-06-15",
      published: true
    },
    {
      id: 2,
      name: "Rahul Verma",
      childName: "Ananya",
      childClass: "Jr. KG",
      rating: 5,
      review: "The attention to detail and individual care each child receives is remarkable.",
      date: "2024-06-14",
      published: true
    },
    {
      id: 3,
      name: "Sneha Patel",
      childName: "Kabir",
      childClass: "Playgroup",
      rating: 5,
      review: "As a first-time parent, I was nervous about sending Kabir to preschool. The staff made the transition so smooth.",
      date: "2024-06-13",
      published: false
    }
  ];

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
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Testimonials</h1>
          <p className="text-gray-600 mt-2">Manage parent testimonials and reviews</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>Add Testimonial</span>
        </button>
      </motion.div>

      {/* Add Form */}
      {showAddForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <h3 className="text-lg font-semibold mb-4">Add New Testimonial</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Parent Name" className="px-4 py-2 border border-gray-300 rounded-lg" />
            <input type="text" placeholder="Child Name" className="px-4 py-2 border border-gray-300 rounded-lg" />
            <input type="text" placeholder="Child Class" className="px-4 py-2 border border-gray-300 rounded-lg" />
            <select className="px-4 py-2 border border-gray-300 rounded-lg">
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
            </select>
          </div>
          <textarea
            placeholder="Review text..."
            rows={4}
            className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg"
          />
          <div className="flex space-x-2 mt-4">
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90">Save</button>
            <button
              onClick={() => setShowAddForm(false)}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </motion.div>
      )}

      {/* Testimonials List */}
      <div className="space-y-4">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.childName} • {testimonial.childClass}
                    </p>
                  </div>
                  <StarRating rating={testimonial.rating} />
                </div>
                <p className="text-gray-700 mb-3">"{testimonial.review}"</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{testimonial.date}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    testimonial.published 
                      ? "bg-green-100 text-green-800" 
                      : "bg-gray-100 text-gray-800"
                  }`}>
                    {testimonial.published ? "Published" : "Draft"}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                  <Edit size={16} />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-50 rounded">
                  {testimonial.published ? <ToggleRight size={16} /> : <ToggleLeft size={16} />}
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminTestimonials;
