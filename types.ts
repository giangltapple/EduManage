
export interface Student {
  id: string;
  name: string;
  email: string;
  avatar: string;
  attendanceStatus: 'present' | 'absent' | 'late' | 'none';
}

export interface Classroom {
  id: string;
  name: string;
  subject: string;
  teacher: string;
  studentCount: number;
  schedule: string;
  color: string;
}

export interface AttendanceRecord {
  date: string;
  students: { studentId: string; status: 'present' | 'absent' | 'late' }[];
}

export interface AIInsight {
  title: string;
  content: string;
  type: 'suggestion' | 'alert' | 'info';
}
