
import React, { useState } from 'react';
import { Icons, MOCK_STUDENTS } from '../constants';
import { Student } from '../types';

const AttendanceTracker: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(MOCK_STUDENTS);
  const [selectedClass, setSelectedClass] = useState('1');

  const updateStatus = (id: string, status: Student['attendanceStatus']) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, attendanceStatus: status } : s));
  };

  const getStatusColor = (status: Student['attendanceStatus']) => {
    switch(status) {
      case 'present': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'absent': return 'bg-red-100 text-red-700 border-red-200';
      case 'late': return 'bg-orange-100 text-orange-700 border-orange-200';
      default: return 'bg-slate-100 text-slate-500 border-slate-200';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl border border-slate-200">
        <div className="flex items-center gap-4">
          <label className="text-sm font-semibold text-slate-700">Lớp:</label>
          <select 
            value={selectedClass} 
            onChange={(e) => setSelectedClass(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="1">Toán Cao Cấp</option>
            <option value="2">Lập trình .NET</option>
          </select>
        </div>
        <div className="text-sm font-medium text-slate-500">
          Hôm nay: <span className="text-slate-900 font-bold">{new Date().toLocaleDateString('vi-VN')}</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 text-sm">
            <tr>
              <th className="px-6 py-4 font-semibold">Học sinh</th>
              <th className="px-6 py-4 font-semibold text-center">Trạng thái</th>
              <th className="px-6 py-4 font-semibold text-right">Thao tác nhanh</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={student.avatar} alt="" className="w-10 h-10 rounded-full border border-slate-200" />
                    <div>
                      <p className="font-semibold text-slate-900">{student.name}</p>
                      <p className="text-xs text-slate-500">{student.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(student.attendanceStatus)} uppercase tracking-wider`}>
                    {student.attendanceStatus === 'none' ? 'Chưa điểm danh' : 
                     student.attendanceStatus === 'present' ? 'Có mặt' : 
                     student.attendanceStatus === 'absent' ? 'Vắng mặt' : 'Đi muộn'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      onClick={() => updateStatus(student.id, 'present')}
                      className={`p-2 rounded-lg transition-all ${student.attendanceStatus === 'present' ? 'bg-emerald-500 text-white' : 'hover:bg-emerald-50 text-emerald-600'}`}
                      title="Có mặt"
                    >
                      <Icons.Check />
                    </button>
                    <button 
                      onClick={() => updateStatus(student.id, 'absent')}
                      className={`p-2 rounded-lg transition-all ${student.attendanceStatus === 'absent' ? 'bg-red-500 text-white' : 'hover:bg-red-50 text-red-600'}`}
                      title="Vắng mặt"
                    >
                      <Icons.X />
                    </button>
                    <button 
                      onClick={() => updateStatus(student.id, 'late')}
                      className={`p-2 rounded-lg transition-all ${student.attendanceStatus === 'late' ? 'bg-orange-500 text-white' : 'hover:bg-orange-50 text-orange-600'}`}
                      title="Đi muộn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end gap-4">
        <button className="px-6 py-2 border border-slate-200 rounded-xl font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
          Hủy bỏ
        </button>
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold shadow-md shadow-indigo-200 hover:bg-indigo-700 transition-colors">
          Lưu điểm danh
        </button>
      </div>
    </div>
  );
};

export default AttendanceTracker;
