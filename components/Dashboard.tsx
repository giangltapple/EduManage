
import React from 'react';
import { Classroom } from '../types';

interface DashboardProps {
  classes: Classroom[];
}

const Dashboard: React.FC<DashboardProps> = ({ classes }) => {
  const stats = [
    { label: 'Tổng số lớp', value: classes.length, icon: '🏫', color: 'bg-blue-50 text-blue-600' },
    { label: 'Tổng học sinh', value: '108', icon: '👥', color: 'bg-emerald-50 text-emerald-600' },
    { label: 'Tỉ lệ chuyên cần', value: '94%', icon: '📈', color: 'bg-indigo-50 text-indigo-600' },
    { label: 'Nhiệm vụ hôm nay', value: '4', icon: '📝', color: 'bg-orange-50 text-orange-600' },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl text-2xl ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Classes & AI Quick Advice */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-800">Lớp học gần đây</h3>
            <button className="text-sm text-indigo-600 font-medium hover:underline">Xem tất cả</button>
          </div>
          <div className="divide-y divide-slate-100">
            {classes.slice(0, 3).map((cls) => (
              <div key={cls.id} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg ${cls.color} flex items-center justify-center text-white font-bold`}>
                    {cls.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{cls.name}</p>
                    <p className="text-xs text-slate-500">{cls.schedule}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">
                  {cls.studentCount} học sinh
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              ✨
            </div>
            <h3 className="font-bold text-lg">Gợi ý từ AI hôm nay</h3>
            <p className="text-indigo-100 text-sm leading-relaxed">
              Dựa trên dữ liệu tuần trước, lớp <b>Lập trình .NET</b> có tỉ lệ vắng mặt tăng 5%. Bạn nên tổ chức một buổi workshop nhỏ để tăng hứng thú.
            </p>
            <button className="w-full py-2 bg-white text-indigo-600 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-colors">
              Xem chi tiết gợi ý
            </button>
          </div>
          {/* Decorative shapes */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-400/20 rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
