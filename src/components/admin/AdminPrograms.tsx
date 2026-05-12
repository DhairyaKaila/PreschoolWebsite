"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Edit, Eye, ToggleLeft, ToggleRight, Plus } from "lucide-react";

const AdminPrograms = () => {
  const [editingProgram, setEditingProgram] = useState<number | null>(null);

  const programs = [
    {
      id: 1,
      name: "Playgroup",
      ageRange: "1.5 - 2.5 years",
      duration: "2 hours/day",
      timing: "9:00 AM - 11:00 AM",
      fees: "₹8,000/month",
      description: "A gentle introduction to learning through play, music, and movement.",
      features: ["Sensory Development", "Music & Movement", "Social Skills"],
      active: true
    },
    {
      id: 2,
      name: "Nursery",
      ageRange: "2.5 - 3.5 years",
      duration: "3 hours/day",
      timing: "9:00 AM - 12:00 PM",
      fees: "₹12,000/month",
      description: "Building foundational skills through structured play and guided learning.",
      features: ["Phonics", "Number Recognition", "Fine Motor Skills"],
      active: true
    },
    {
      id: 3,
      name: "Jr. KG",
      ageRange: "3.5 - 4.5 years",
      duration: "4 hours/day",
      timing: "9:00 AM - 1:00 PM",
      fees: "₹15,000/month",
      description: "Preparing children for formal schooling with advanced literacy and numeracy skills.",
      features: ["Reading Readiness", "Math Concepts", "Logical Thinking"],
      active: true
    },
    {
      id: 4,
      name: "Sr. KG",
      ageRange: "4.5 - 6 years",
      duration: "4 hours/day",
      timing: "9:00 AM - 1:00 PM",
      fees: "₹18,000/month",
      description: "Comprehensive preparation for primary school with advanced academics.",
      features: ["Advanced Reading", "Math Operations", "Project Learning"],
      active: true
    },
    {
      id: 5,
      name: "Daycare",
      ageRange: "1.5 - 6 years",
      duration: "Full Day",
      timing: "8:00 AM - 6:00 PM",
      fees: "₹20,000/month",
      description: "Extended care program with structured activities and healthy meals.",
      features: ["Extended Hours", "Healthy Meals", "Homework Help"],
      active: false
    }
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Programs</h1>
          <p className="text-gray-600 mt-2">Manage preschool programs and curriculum</p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2">
          <Plus size={20} />
          <span>Add Program</span>
        </button>
      </motion.div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {programs.map((program) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: program.id * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{program.name}</h3>
                  <p className="text-gray-600 mt-1">{program.ageRange}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                    <Eye size={16} />
                  </button>
                  <button 
                    onClick={() => setEditingProgram(editingProgram === program.id ? null : program.id)}
                    className="p-2 text-gray-600 hover:bg-gray-50 rounded"
                  >
                    <Edit size={16} />
                  </button>
                  <button className="p-2 text-gray-600 hover:bg-gray-50 rounded">
                    {program.active ? <ToggleRight size={16} /> : <ToggleLeft size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium text-gray-900">{program.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Timing</p>
                    <p className="font-medium text-gray-900">{program.timing}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Fees</p>
                  <p className="font-medium text-gray-900">{program.fees}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Description</p>
                  <p className="text-gray-700 mt-1">{program.description}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Key Features</p>
                  <div className="flex flex-wrap gap-2">
                    {program.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    program.active 
                      ? "bg-green-100 text-green-800" 
                      : "bg-gray-100 text-gray-800"
                  }`}>
                    {program.active ? "Active" : "Inactive"}
                  </span>
                </div>
              </div>

              {/* Edit Form (shown when editing) */}
              {editingProgram === program.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-6 pt-6 border-t border-gray-100 space-y-4"
                >
                  <h4 className="font-medium text-gray-900">Edit Program</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      defaultValue={program.name}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="Program Name"
                    />
                    <input
                      type="text"
                      defaultValue={program.ageRange}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="Age Range"
                    />
                    <input
                      type="text"
                      defaultValue={program.duration}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="Duration"
                    />
                    <input
                      type="text"
                      defaultValue={program.timing}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      placeholder="Timing"
                    />
                  </div>
                  <textarea
                    defaultValue={program.description}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="Description"
                  />
                  <div className="flex space-x-2">
                    <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary/90">
                      Save Changes
                    </button>
                    <button
                      onClick={() => setEditingProgram(null)}
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminPrograms;
