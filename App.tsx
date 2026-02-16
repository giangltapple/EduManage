
import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import AttendanceTracker from './components/AttendanceTracker';
import AIAssistant from './components/AIAssistant';
import { MOCK_CLASSES } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard classes={MOCK_CLASSES} />;
      case 'attendance':
        return <AttendanceTracker />;
      case 'ai-assistant':
        return <AIAssistant />;
      case 'classes':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_CLASSES.map(cls => (
              <div key={cls.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <div className={`w-12 h-12 rounded-xl ${cls.color} flex items-center justify-center text-white text-xl font-bold mb-4 group-hover:scale-110 transition-transform`}>
                  {cls.name.charAt(0)}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">{cls.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{cls.subject} • {cls.teacher}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                    {cls.studentCount} học sinh
                  </div>
                  <div className="text-xs font-medium text-indigo-600">
                    {cls.schedule}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'students':
        return (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-400">
            Tính năng đang phát triển. Vui lòng quay lại sau!
          </div>
        );
      default:
        return <Dashboard classes={MOCK_CLASSES} />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default App;
