"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Eye, Phone, Mail, Trash2, Check } from "lucide-react";

const AdminEnquiries = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const enquiries = [
    { id: 1, name: "Priya Sharma", childName: "Aarav", age: "3.5", phone: "9876543210", email: "priya@email.com", message: "Looking for nursery admission", date: "2024-06-15", status: "New" },
    { id: 2, name: "Rahul Verma", childName: "Ananya", age: "2.8", phone: "9876543211", email: "rahul@email.com", message: "Interested in daycare program", date: "2024-06-14", status: "Contacted" },
    { id: 3, name: "Sneha Patel", childName: "Kabir", age: "4.2", phone: "9876543212", email: "sneha@email.com", message: "Want to know about Jr. KG", date: "2024-06-13", status: "Admitted" },
    { id: 4, name: "Amit Kumar", childName: "Diya", age: "3.0", phone: "9876543213", email: "amit@email.com", message: "Schedule a school visit", date: "2024-06-12", status: "New" },
    { id: 5, name: "Neha Gupta", childName: "Rohan", age: "2.5", phone: "9876543214", email: "neha@email.com", message: "Fees structure inquiry", date: "2024-06-11", status: "Contacted" },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      New: "bg-green-100 text-green-800",
      Contacted: "bg-yellow-100 text-yellow-800",
      Admitted: "bg-blue-100 text-blue-800"
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {status}
      </span>
    );
  };

  const filteredEnquiries = enquiries.filter(enquiry => {
    const matchesSearch = enquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         enquiry.childName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || enquiry.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">Enquiries</h1>
        <p className="text-gray-600 mt-2">Manage and track all parent enquiries</p>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by parent or child name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Admitted">Admitted</option>
          </select>
        </div>
      </motion.div>

      {/* Enquiries Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">Parent</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">Child</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">Age</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">Contact</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">Message</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">Date</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEnquiries.map((enquiry) => (
                <tr key={enquiry.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div>
                      <div className="font-medium text-gray-900">{enquiry.name}</div>
                      <div className="text-sm text-gray-500">{enquiry.email}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-900">{enquiry.childName}</td>
                  <td className="py-4 px-6 text-gray-600">{enquiry.age}</td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone size={14} className="mr-1" />
                        {enquiry.phone}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail size={14} className="mr-1" />
                        {enquiry.email}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="max-w-xs truncate text-sm text-gray-600">
                      {enquiry.message}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{enquiry.date}</td>
                  <td className="py-4 px-6">{getStatusBadge(enquiry.status)}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                        <Eye size={16} />
                      </button>
                      <button className="p-1 text-green-600 hover:bg-green-50 rounded">
                        <Check size={16} />
                      </button>
                      <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminEnquiries;
