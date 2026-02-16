
import React, { useState } from 'react';
import { generateLessonPlan } from '../services/geminiService';
import { Icons } from '../constants';

const AIAssistant: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!subject || !topic) return;
    setLoading(true);
    const plan = await generateLessonPlan(subject, topic);
    setResult(plan);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
            <Icons.Brain />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">Soạn giáo án thông minh</h3>
            <p className="text-sm text-slate-500">Nhập môn học và chủ đề, Gemini AI sẽ hỗ trợ bạn lập kế hoạch.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Môn học</label>
            <input 
              type="text" 
              placeholder="Vd: Lập trình .NET"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Chủ đề bài giảng</label>
            <input 
              type="text" 
              placeholder="Vd: Entity Framework Core"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <button 
          onClick={handleGenerate}
          disabled={loading || !subject || !topic}
          className={`w-full py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-100 flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          ) : <Icons.Brain />}
          {loading ? 'Đang xử lý...' : 'Bắt đầu tạo kế hoạch'}
        </button>
      </div>

      {result && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-bold text-slate-800 text-lg">Kết quả đề xuất</h4>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(result);
                alert('Đã sao chép vào bộ nhớ tạm!');
              }}
              className="text-indigo-600 text-sm font-medium hover:underline flex items-center gap-1"
            >
              <Icons.Check /> Sao chép nội dung
            </button>
          </div>
          <div className="prose max-w-none text-slate-700 whitespace-pre-wrap leading-relaxed">
            {result}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
