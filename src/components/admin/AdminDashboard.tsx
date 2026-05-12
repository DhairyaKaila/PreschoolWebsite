"use client";

import { motion } from "framer-motion";
import { Users, FileText, Image as ImageIcon, BookOpen, TrendingUp, TrendingDown } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const AdminDashboard = () => {
  // Sample data for charts
  const monthlyData = [
    { month: "Jan", enquiries: 45 },
    { month: "Feb", enquiries: 52 },
    { month: "Mar", enquiries: 48 },
    { month: "Apr", enquiries: 61 },
    { month: "May", enquiries: 58 },
    { month: "Jun", enquiries: 67 },
  ];

  const sourceData = [
    { name: "Website", value: 45, color: "#FF7043" },
    { name: "Walk-in", value: 30, color: "#42A5F5" },
    { name: "WhatsApp", value: 15, color: "#66BB6A" },
    { name: "Referral", value: 10, color: "#FFCA28" },
  ];

  const recentEnquiries = [
    { id: 1, name: "Priya Sharma", childName: "Aarav", age: "3.5", phone: "9876543210", date: "2024-06-15", status: "New" },
    { id: 2, name: "Rahul Verma", childName: "Ananya", age: "2.8", phone: "9876543211", date: "2024-06-14", status: "Contacted" },
    { id: 3, name: "Sneha Patel", childName: "Kabir", age: "4.2", phone: "9876543212", date: "2024-06-13", status: "Admitted" },
    { id: 4, name: "Amit Kumar", childName: "Diya", age: "3.0", phone: "9876543213", date: "2024-06-12", status: "New" },
    { id: 5, name: "Neha Gupta", childName: "Rohan", age: "2.5", phone: "9876543214", date: "2024-06-11", status: "Contacted" },
  ];

  const statsCards = [
    {
      title: "Total Enquiries",
      value: "128",
      change: "+14",
      changeType: "increase",
      icon: FileText,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "New This Week",
      value: "14",
      change: "+3",
      changeType: "increase",
      icon: Users,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Gallery Photos",
      value: "64",
      change: "+8",
      changeType: "increase",
      icon: ImageIcon,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Active Programs",
      value: "5",
      change: "0",
      changeType: "neutral",
      icon: BookOpen,
      color: "from-orange-500 to-orange-600"
    }
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

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening at Sanvi Pre School today.</p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon size={24} className="text-white" />
                </div>
                <div className={`flex items-center space-x-1 text-sm ${
                  stat.changeType === "increase" ? "text-green-600" : 
                  stat.changeType === "decrease" ? "text-red-600" : "text-gray-600"
                }`}>
                  {stat.changeType === "increase" && <TrendingUp size={16} />}
                  {stat.changeType === "decrease" && <TrendingDown size={16} />}
                  <span className="font-medium">{stat.change}</span>
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.title}</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Enquiries Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Enquiries</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="enquiries" fill="#FF7043" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Enquiry Source Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Enquiry Sources</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sourceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {sourceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Enquiries Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Enquiries</h3>
          <button className="text-primary hover:text-primary/80 text-sm font-medium">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Child</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Age</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Phone</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentEnquiries.map((enquiry) => (
                <tr key={enquiry.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-900">{enquiry.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{enquiry.childName}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{enquiry.age}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{enquiry.phone}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{enquiry.date}</td>
                  <td className="py-3 px-4">{getStatusBadge(enquiry.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
