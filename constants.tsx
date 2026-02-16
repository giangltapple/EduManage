
import React from 'react';

export const MOCK_CLASSES = [
  { id: '1', name: 'Toán Cao Cấp', subject: 'Toán học', teacher: 'Nguyễn Văn A', studentCount: 35, schedule: 'Thứ 2, 4 (08:00)', color: 'bg-blue-500' },
  { id: '2', name: 'Lập trình .NET', subject: 'CNTT', teacher: 'Trần Thị B', studentCount: 28, schedule: 'Thứ 3, 5 (13:30)', color: 'bg-purple-500' },
  { id: '3', name: 'Tiếng Anh Giao Tiếp', subject: 'Ngoại ngữ', teacher: 'Lê Văn C', studentCount: 20, schedule: 'Thứ 7 (09:00)', color: 'bg-emerald-500' },
  { id: '4', name: 'Thiết kế UI/UX', subject: 'Đồ họa', teacher: 'Phạm Thị D', studentCount: 25, schedule: 'Thứ 6 (15:00)', color: 'bg-orange-500' },
];

export const MOCK_STUDENTS = [
  { id: 's1', name: 'Lê Hoàng Long', email: 'long.le@edu.vn', avatar: 'https://picsum.photos/id/64/100/100', attendanceStatus: 'none' },
  { id: 's2', name: 'Trần Minh Tâm', email: 'tam.tran@edu.vn', avatar: 'https://picsum.photos/id/65/100/100', attendanceStatus: 'none' },
  { id: 's3', name: 'Nguyễn Bích Vy', email: 'vy.nguyen@edu.vn', avatar: 'https://picsum.photos/id/66/100/100', attendanceStatus: 'none' },
  { id: 's4', name: 'Đặng Quốc Anh', email: 'anh.dang@edu.vn', avatar: 'https://picsum.photos/id/67/100/100', attendanceStatus: 'none' },
  { id: 's5', name: 'Vũ Thu Hà', email: 'ha.vu@edu.vn', avatar: 'https://picsum.photos/id/68/100/100', attendanceStatus: 'none' },
];

export const Icons = {
  Dashboard: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
  ),
  Classes: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M8 7h6"/><path d="M8 11h8"/></svg>
  ),
  Users: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  Calendar: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
  ),
  Brain: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z"/></svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  ),
  X: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  )
};
