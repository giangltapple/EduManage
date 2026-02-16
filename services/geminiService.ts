
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateLessonPlan = async (subject: string, topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Hãy lập một kế hoạch bài giảng chi tiết cho môn học: ${subject}, với chủ đề: ${topic}. Kết quả trả về bằng tiếng Việt, định dạng Markdown rõ ràng, bao gồm: Mục tiêu, Kiến thức trọng tâm, Hoạt động trên lớp và Bài tập về nhà.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Không thể khởi tạo kế hoạch bài giảng lúc này. Vui lòng thử lại sau.";
  }
};

export const getAttendanceInsights = async (attendanceSummary: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Dựa trên dữ liệu điểm danh sau: ${attendanceSummary}, hãy đưa ra 3 nhận xét ngắn gọn và 1 lời khuyên giáo dục để cải thiện sĩ số lớp học.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              content: { type: Type.STRING },
              type: { type: Type.STRING, description: 'suggestion, alert, or info' }
            },
            required: ["title", "content", "type"]
          }
        }
      }
    });
    return JSON.parse(response.text || "[]");
  } catch (error) {
    console.error("Gemini Error:", error);
    return [];
  }
};
