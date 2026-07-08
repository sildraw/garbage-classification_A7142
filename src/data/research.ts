import type { ResearchData } from "@/types";

export const researchData: ResearchData = {
  overview: {
    totalSamples: 312,
    coverageAreas: 6,
    awarenessRate: 68.5,
    participationRate: 52.3,
  },
  charts: {
    awarenessByCategory: {
      type: "bar",
      data: [
        { name: "可回收物", value: 82 },
        { name: "有害垃圾", value: 76 },
        { name: "厨余垃圾", value: 65 },
        { name: "其他垃圾", value: 51 },
      ],
    },
    behaviorHabits: {
      type: "pie",
      data: [
        { name: "每次分类", value: 35 },
        { name: "经常分类", value: 28 },
        { name: "偶尔分类", value: 22 },
        { name: "从不分类", value: 15 },
      ],
    },
    painPoints: {
      data: [
        { name: "标准不清", value: 100 },
        { name: "设施不足", value: 78 },
        { name: "监督缺失", value: 65 },
        { name: "意识薄弱", value: 58 },
        { name: "分类麻烦", value: 52 },
        { name: "混装混运", value: 45 },
        { name: "知识欠缺", value: 38 },
        { name: "时间紧张", value: 30 },
      ],
    },
  },
  conclusions: [
    {
      id: 1,
      title: "认知与行动存在落差",
      content:
        "虽然68.5%的受访者表示了解垃圾分类，但实际每次都分类的仅占35%，存在明显的知行不一现象。受访者普遍反映分类标准难以记忆，尤其是易混淆物品的判断。",
    },
    {
      id: 2,
      title: "有害垃圾识别率较高",
      content:
        "在四类垃圾中，有害垃圾识别率最高（76%），但仍有24%的受访者不清楚药品、灯管等有害垃圾的正确投放方式，存在随意丢弃风险。",
    },
    {
      id: 3,
      title: "设施与监督是关键瓶颈",
      content:
        "78%的受访者反映分类设施不足或标识不清，65%认为缺乏有效监督。建议完善社区分类设施布局，增设智能分类设备，建立长效监督机制。",
    },
    {
      id: 4,
      title: "青年群体需重点引导",
      content:
        "调查显示18-25岁青年群体分类意愿较高但知识储备不足，建议通过新媒体、科普网站、互动测试等青年喜闻乐见的形式加强宣传教育。",
    },
  ],
};