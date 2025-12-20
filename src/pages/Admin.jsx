import React, { useState, useEffect } from 'react';

// Mock Data
const MOCK_USERS = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav@example.com",
    userType: "premium",
    seeking: "Investment Opportunities",
    interests: ["Artificial Intelligence", "Sustainable Energy", "Fintech"],
    languages: ["English", "Hindi", "German"],
    growthPath: ["Wants to scale current startup by 200%", "Looking for strategic partnerships in Europe", "Aims to mentor early-stage founders"]
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    email: "sarah.j@company.org",
    userType: "waitlist",
    seeking: "Mentorship",
    interests: ["UX Design", "Product Management"],
    languages: ["English", "French"],
    growthPath: ["Transitioning from engineering to product leadership", "Building a personal brand in the tech space"]
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "m.chen@tech.io",
    userType: "premium",
    seeking: "Co-founder",
    interests: ["SaaS", "Web3"],
    languages: ["English", "Mandarin"],
    growthPath: ["Building the next generation of social apps"]
  }
];

const Admin = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [selectedUser, setSelectedUser] = useState(null);

  // Statistics Calculation
  const totalUsers = MOCK_USERS.length;
  const premiumCount = MOCK_USERS.filter(u => u.userType === 'premium').length;
  const waitlistCount = MOCK_USERS.filter(u => u.userType === 'waitlist').length;

  useEffect(() => {
    if (selectedUser) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [selectedUser]);

  const filteredUsers = MOCK_USERS.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || user.userType === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#F2F2F2] font-sans p-4 md:p-12">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP STATS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-[30px] shadow-sm border border-gray-100">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Total Users</p>
            <h3 className="text-3xl font-bold text-[#111111]">{totalUsers}</h3>
          </div>
          <div className="bg-white p-6 rounded-[30px] shadow-sm border border-gray-100">
            <p className="text-xs font-black text-[#29C28C] uppercase tracking-widest mb-1">Paid (Premium)</p>
            <h3 className="text-3xl font-bold text-[#111111]">{premiumCount}</h3>
          </div>
          <div className="bg-white p-6 rounded-[30px] shadow-sm border border-gray-100">
            <p className="text-xs font-black text-[#94BD1C] uppercase tracking-widest mb-1">Waitlist</p>
            <h3 className="text-3xl font-bold text-[#111111]">{waitlistCount}</h3>
          </div>
        </div>

        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <div className="w-full md:w-auto">
            <h1 className="text-4xl font-bold text-[#111111] tracking-tight">Community Admin</h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input 
              type="text" 
              placeholder="Search users..." 
              className="px-6 py-3.5 rounded-2xl bg-white shadow-sm border-none focus:ring-2 focus:ring-[#94BD1C] outline-none flex-1 md:w-64"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select 
              className="px-6 py-3.5 rounded-2xl bg-white shadow-sm border-none focus:ring-2 focus:ring-[#29C28C] outline-none cursor-pointer font-bold text-sm"
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All Users</option>
              <option value="premium">Premium Only</option>
              <option value="waitlist">Waitlist Only</option>
            </select>
          </div>
        </div>

        {/* Main Table Card */}
        <div className="bg-white rounded-[40px] shadow-sm overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase tracking-widest">User Profile</th>
                  <th className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase tracking-widest hidden md:table-cell">Membership</th>
                  <th className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase tracking-widest text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-[#F9FBF7] transition-all group">
                    <td className="px-8 py-6">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#111111] text-[17px]">{user.name}</span>
                          {/* MOBILE ONLY BADGE */}
                          <span className={`md:hidden px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-tighter border ${
                            user.userType === 'premium' 
                            ? 'bg-[#D4EFC7] text-[#4A6D34] border-[#B6E39D]' 
                            : 'bg-gray-100 text-gray-500 border-gray-200'
                          }`}>
                            {user.userType}
                          </span>
                        </div>
                        <span className="text-sm text-[#888888] font-medium">{user.email}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 hidden md:table-cell">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                        user.userType === 'premium' 
                        ? 'bg-[#D4EFC7] text-[#4A6D34] border-[#B6E39D]' 
                        : 'bg-gray-100 text-gray-500 border-gray-200'
                      }`}>
                        {user.userType}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button 
                        onClick={() => setSelectedUser(user)}
                        className="p-3 md:px-5 md:py-2.5 rounded-xl bg-white border-2 border-gray-100 text-[#94BD1C] font-bold text-sm hover:border-[#94BD1C] hover:bg-[#94BD1C] hover:text-white transition-all shadow-sm"
                      >
                        <span className="hidden md:inline">View Details</span>
                        <span className="md:hidden">→</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* MODAL - Standardized Popup */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSelectedUser(null)}></div>
          <div className="relative w-full max-w-4xl bg-white rounded-[40px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-8 md:p-10 border-b border-gray-50 flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#111111]">{selectedUser.name}</h2>
                <p className="text-[#666666] font-bold text-sm uppercase tracking-widest text-[#94BD1C] mt-1">{selectedUser.userType} Access</p>
              </div>
              <button onClick={() => setSelectedUser(null)} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">✕</button>
            </div>
            {/* Modal Body */}
            <div className="p-8 md:p-10 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Seeking</h4>
                    <p className="text-xl font-bold text-[#111111]">{selectedUser.seeking}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedUser.interests.map((item, i) => (
                        <span key={i} className="px-4 py-2 bg-[#F8FAF6] border border-[#D4EFC7] rounded-xl text-sm font-bold text-[#111111]">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Languages</h4>
                    <p className="text-[#111111] font-bold">{selectedUser.languages.join(', ')}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Growth Vision</h4>
                    {selectedUser.growthPath.map((path, i) => (
                      <p key={i} className="text-sm text-[#666666] italic mb-3 pl-4 border-l-2 border-[#29C28C]">"{path}"</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;