import type { QuizData } from "@/types";

export const quizData: QuizData = {
  questions: [
    {
      id: 1,
      question: "用过的纸巾属于哪类垃圾？",
      options: [
        { label: "可回收物", value: "recyclable" },
        { label: "有害垃圾", value: "hazardous" },
        { label: "厨余垃圾", value: "kitchen" },
        { label: "其他垃圾", value: "other" },
      ],
      correctAnswer: "other",
      explanation: "纸巾遇水即溶且使用后受污染，无法回收再利用，属其他垃圾。",
    },
    {
      id: 2,
      question: "大棒骨（猪骨、牛骨）应该投入哪个垃圾桶？",
      options: [
        { label: "可回收物", value: "recyclable" },
        { label: "有害垃圾", value: "hazardous" },
        { label: "厨余垃圾", value: "kitchen" },
        { label: "其他垃圾", value: "other" },
      ],
      correctAnswer: "other",
      explanation: "大棒骨质地坚硬，难以腐烂分解，易损坏厨余处理设备，属其他垃圾。",
    },
    {
      id: 3,
      question: "纽扣电池属于哪类垃圾？",
      options: [
        { label: "可回收物", value: "recyclable" },
        { label: "有害垃圾", value: "hazardous" },
        { label: "厨余垃圾", value: "kitchen" },
        { label: "其他垃圾", value: "other" },
      ],
      correctAnswer: "hazardous",
      explanation: "纽扣电池含汞、银等重金属，对人体和环境有危害，属有害垃圾。",
    },
    {
      id: 4,
      question: "喝完的饮料塑料瓶应该如何处理？",
      options: [
        { label: "可回收物", value: "recyclable" },
        { label: "有害垃圾", value: "hazardous" },
        { label: "厨余垃圾", value: "kitchen" },
        { label: "其他垃圾", value: "other" },
      ],
      correctAnswer: "recyclable",
      explanation: "塑料瓶材质单一，可循环利用，清洁后拧紧瓶盖属可回收物。",
    },
    {
      id: 5,
      question: "过期的感冒药及其包装属于什么垃圾？",
      options: [
        { label: "可回收物", value: "recyclable" },
        { label: "有害垃圾", value: "hazardous" },
        { label: "厨余垃圾", value: "kitchen" },
        { label: "其他垃圾", value: "other" },
      ],
      correctAnswer: "hazardous",
      explanation: "过期药品含化学成分，需连同包装投放至有害垃圾收集点。",
    },
    {
      id: 6,
      question: "西瓜皮应该投入哪个垃圾桶？",
      options: [
        { label: "可回收物", value: "recyclable" },
        { label: "有害垃圾", value: "hazardous" },
        { label: "厨余垃圾", value: "kitchen" },
        { label: "其他垃圾", value: "other" },
      ],
      correctAnswer: "kitchen",
      explanation: "瓜果皮属易腐烂的生物质废弃物，可堆肥处理，属厨余垃圾。",
    },
    {
      id: 7,
      question: "陶瓷碎片应该归入哪类垃圾？",
      options: [
        { label: "可回收物", value: "recyclable" },
        { label: "有害垃圾", value: "hazardous" },
        { label: "厨余垃圾", value: "kitchen" },
        { label: "其他垃圾", value: "other" },
      ],
      correctAnswer: "other",
      explanation: "陶瓷碎片无回收价值且易伤人，需包裹后投放至其他垃圾桶。",
    },
    {
      id: 8,
      question: "5号干电池（已用完）属于哪类垃圾？",
      options: [
        { label: "可回收物", value: "recyclable" },
        { label: "有害垃圾", value: "hazardous" },
        { label: "厨余垃圾", value: "kitchen" },
        { label: "其他垃圾", value: "other" },
      ],
      correctAnswer: "other",
      explanation: "目前市售5号、7号干电池已达到无汞标准，可作为其他垃圾处理。",
    },
    {
      id: 9,
      question: "旧衣服、旧床单应该如何分类？",
      options: [
        { label: "可回收物", value: "recyclable" },
        { label: "有害垃圾", value: "hazardous" },
        { label: "厨余垃圾", value: "kitchen" },
        { label: "其他垃圾", value: "other" },
      ],
      correctAnswer: "recyclable",
      explanation: "旧织物可回收再利用或捐赠，清洁后属可回收物。",
    },
    {
      id: 10,
      question: "荧光灯管（节能灯）属于哪类垃圾？",
      options: [
        { label: "可回收物", value: "recyclable" },
        { label: "有害垃圾", value: "hazardous" },
        { label: "厨余垃圾", value: "kitchen" },
        { label: "其他垃圾", value: "other" },
      ],
      correctAnswer: "hazardous",
      explanation: "荧光灯管含汞蒸气，破损会污染环境，属有害垃圾。",
    },
  ],
};