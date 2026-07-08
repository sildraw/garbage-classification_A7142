// 垃圾分类科普网站 - 类型定义

export type CategoryId = "recyclable" | "hazardous" | "kitchen" | "other";

export interface Category {
  id: CategoryId;
  name: string;
  color: string;
  icon: string;
  description: string;
  requirements: string;
  commonItems: string[];
  process: string[];
  notes: string[];
}

export interface ConfusingItem {
  id: string;
  name: string;
  wrongCategory: CategoryId;
  correctCategory: CategoryId;
  reason: string;
}

export interface ReductionTip {
  id: string;
  scene: string;
  tip: string;
  icon: string;
}

export interface KnowledgeData {
  categories: Category[];
  confusingItems: ConfusingItem[];
  reductionTips: ReductionTip[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: { label: string; value: CategoryId }[];
  correctAnswer: CategoryId;
  explanation: string;
}

export interface QuizData {
  questions: QuizQuestion[];
}

export interface ChartDataItem {
  name: string;
  value: number;
}

export interface ChartData {
  type: "bar" | "pie" | "line";
  data: ChartDataItem[];
}

export interface WordCloudData {
  data: ChartDataItem[];
}

export interface Conclusion {
  id: number;
  title: string;
  content: string;
}

export interface ResearchData {
  overview: {
    totalSamples: number;
    coverageAreas: number;
    awarenessRate: number;
    participationRate: number;
  };
  charts: {
    awarenessByCategory: ChartData;
    behaviorHabits: ChartData;
    painPoints: WordCloudData;
  };
  conclusions: Conclusion[];
}

export interface Member {
  id: string;
  name: string;
  role: string;
  gender: string;
  college: string;
  className: string;
  phone: string;
  responsibility: string;
}

export interface ScheduleItem {
  date: string;
  location: string;
  content: string;
  members: string;
}

export interface Advisor {
  name: string;
  phone: string;
  unit: string;
  title: string;
}

export interface Contact {
  email: string;
  leaderPhone: string;
}

export interface TeamData {
  teamName: string;
  theme: string;
  members: Member[];
  schedule: ScheduleItem[];
  advisor: Advisor;
  contact: Contact;
}
