import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Leaf,
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  Recycle,
  AlertTriangle,
  Apple,
  Trash2,
  Sparkles,
  ChevronDown,
  FileText,
  Video,
  ClipboardList,
} from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import Counter from "@/components/common/Counter";
import { researchData } from "@/data/research";
import { knowledgeData } from "@/data/knowledge";
import { teamData } from "@/data/team";

const categoryConfig = [
  {
    id: "recyclable",
    name: "可回收物",
    icon: Recycle,
    color: "#1E88E5",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    id: "hazardous",
    name: "有害垃圾",
    icon: AlertTriangle,
    color: "#E53935",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    id: "kitchen",
    name: "厨余垃圾",
    icon: Apple,
    color: "#43A047",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    id: "other",
    name: "其他垃圾",
    icon: Trash2,
    color: "#757575",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200",
  },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* 背景层 */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-50 via-cream to-sprout-light/20" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />

        {/* 漂浮装饰叶子 */}
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-[15%] opacity-20"
        >
          <Leaf className="w-32 h-32 text-forest-600" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-[10%] opacity-15"
        >
          <Leaf className="w-24 h-24 text-sprout-dark" />
        </motion.div>

        {/* 内容 */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 pt-20">
          <div className="max-w-5xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-mono tracking-widest uppercase text-forest-700 bg-forest-50/80 backdrop-blur rounded-full border border-forest-200"
            >
              <Sparkles className="w-3 h-3" />
              2026 暑期社会实践 · 环保A7142小分队
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal leading-[1.05] mb-6 text-balance"
            >
              垃圾分类
              <br />
              <span className="bg-gradient-to-r from-forest-700 via-sprout-dark to-forest-600 bg-clip-text text-transparent">
                就是新时尚
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-forest-600 leading-relaxed mb-10 max-w-2xl"
            >
              响应"绿水青山就是金山银山"理念，普及垃圾分类知识，
              <br className="hidden md:block" />
              让每一次正确投放都成为守护地球的行动。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/knowledge"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-forest-700 text-cream rounded-full font-medium shadow-card hover:shadow-card-hover hover:bg-forest-800 transition-all"
              >
                探索分类知识
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/quiz"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-cream/80 backdrop-blur text-forest-700 rounded-full font-medium border border-forest-200 hover:bg-cream transition-all"
              >
                参与互动测试
              </Link>
            </motion.div>
          </div>
        </div>

        {/* 滚动指示器 */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-forest-500"
        >
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </section>

      {/* 实践概览 */}
      <section className="section-padding bg-cream/50">
        <div className="container mx-auto">
          <SectionTitle
            eyebrow="PROJECT OVERVIEW"
            title="实践概览"
            subtitle="中国矿业大学2026年暑期社会实践，为期18天的垃圾分类科普行动"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Calendar,
                label: "实践时间",
                value: "2026.7.15 - 8.1",
                desc: "为期18天",
              },
              {
                icon: MapPin,
                label: "实践地点",
                value: "线上 + 南湖校区",
                desc: "线上线下结合",
              },
              {
                icon: Users,
                label: "团队成员",
                value: "4人小队",
                desc: "计算机类2025-5班",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group bg-white rounded-3xl p-8 shadow-soft hover:shadow-card-hover transition-all border border-forest-100"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-sprout/5 rounded-bl-full rounded-tr-3xl" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-forest-50 rounded-2xl mb-5 group-hover:bg-forest-100 transition-colors">
                    <item.icon className="w-7 h-7 text-forest-700" />
                  </div>
                  <p className="text-xs font-mono tracking-widest text-forest-400 uppercase mb-2">
                    {item.label}
                  </p>
                  <p className="font-serif text-2xl font-bold text-charcoal mb-1">
                    {item.value}
                  </p>
                  <p className="text-sm text-forest-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 实践形式 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6 bg-gradient-to-br from-forest-800 to-forest-900 rounded-3xl p-8 md:p-12 text-cream relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-sprout/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="relative">
              <p className="text-xs font-mono tracking-widest text-sprout-light mb-3 uppercase">
                PRACTICE FORM
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                多维并举的科普实践形式
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "查阅资料学习",
                  "问卷调查统计",
                  "宣传视频制作",
                  "科普海报设计",
                  "科普网站开发",
                  "调研报告撰写",
                ].map((form) => (
                  <div
                    key={form}
                    className="flex items-center gap-2 text-sm text-cream/90"
                  >
                    <span className="w-1.5 h-1.5 bg-sprout rounded-full" />
                    {form}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 核心数据看板 */}
      <section className="section-padding relative">
        <div className="container mx-auto">
          <SectionTitle
            eyebrow="DATA HIGHLIGHTS"
            title="核心数据看板"
            subtitle="用数据说话，看见垃圾分类调研的真实图景"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: researchData.overview.totalSamples,
                suffix: "份",
                label: "问卷回收量",
                desc: "线上线下累计",
              },
              {
                value: researchData.overview.coverageAreas,
                suffix: "处",
                label: "覆盖社区数",
                desc: "含校园投放点",
              },
              {
                value: researchData.overview.awarenessRate,
                suffix: "%",
                decimals: 1,
                label: "分类认知率",
                desc: "受访者了解四分类",
              },
              {
                value: researchData.overview.participationRate,
                suffix: "%",
                decimals: 1,
                label: "实际参与率",
                desc: "每次分类的受访者",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white rounded-3xl p-8 shadow-soft border border-forest-100 group hover:shadow-card-hover transition-all"
              >
                <div className="text-4xl md:text-5xl font-mono font-bold text-forest-700 mb-3">
                  <Counter
                    value={item.value}
                    suffix={item.suffix}
                    decimals={item.decimals || 0}
                  />
                </div>
                <p className="font-medium text-charcoal mb-1">{item.label}</p>
                <p className="text-xs text-forest-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 四分类快捷导航 */}
      <section className="section-padding bg-forest-50/50">
        <div className="container mx-auto">
          <SectionTitle
            eyebrow="FOUR CATEGORIES"
            title="四大垃圾类别"
            subtitle="点击卡片了解每个类别的详细分类指南"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {categoryConfig.map((cat, index) => {
              const data = knowledgeData.categories[index];
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to="/knowledge"
                    className={`group relative block bg-white rounded-3xl p-6 border-2 ${cat.borderColor} hover:shadow-card-hover transition-all overflow-hidden h-full`}
                  >
                    <div
                      className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"
                      style={{ backgroundColor: cat.color }}
                    />
                    <div className="relative">
                      <div
                        className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
                        style={{ backgroundColor: `${cat.color}15` }}
                      >
                        <cat.icon
                          className="w-7 h-7"
                          style={{ color: cat.color }}
                        />
                      </div>
                      <h3
                        className="font-serif text-xl font-bold mb-2"
                        style={{ color: cat.color }}
                      >
                        {cat.name}
                      </h3>
                      <p className="text-sm text-forest-600 leading-relaxed mb-4">
                        {data.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-forest-500 group-hover:gap-2 transition-all">
                        查看详情 <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* 附加导航 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
            {[
              {
                to: "/quiz",
                icon: ClipboardList,
                title: "互动测试",
                desc: "10道题检验你的分类知识",
                color: "from-amber to-amber-light",
              },
              {
                to: "/research",
                icon: FileText,
                title: "调研成果",
                desc: "312份问卷揭示分类现状",
                color: "from-forest-600 to-forest-800",
              },
              {
                to: "/gallery",
                icon: Video,
                title: "宣传作品",
                desc: "视频与海报视觉呈现",
                color: "from-sprout-dark to-forest-700",
              },
            ].map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  className={`group relative block bg-gradient-to-br ${item.color} rounded-3xl p-8 text-cream overflow-hidden hover:shadow-card-hover transition-all`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4" />
                  <div className="relative">
                    <item.icon className="w-8 h-8 mb-4 opacity-90" />
                    <h3 className="font-serif text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-cream/80 mb-4">{item.desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium group-hover:gap-2 transition-all">
                      立即访问 <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 团队使命 */}
      <section className="section-padding relative overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-cream rounded-[2.5rem] p-10 md:p-16 border border-forest-100 overflow-hidden"
          >
            <div className="absolute inset-0 bg-leaf-texture" />
            <div className="relative max-w-4xl">
              <span className="inline-block px-4 py-1 mb-5 text-xs font-mono tracking-widest uppercase text-forest-700 bg-forest-100 rounded-full">
                OUR MISSION
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 leading-tight text-balance">
                "垃圾分类工作就是新时尚"
              </h2>
              <p className="text-base md:text-lg text-forest-600 leading-relaxed mb-8">
                {teamData.theme}。我们通过查阅资料、问卷调查、海报制作、视频拍摄、网站开发等多种形式，
                将垃圾分类知识转化为可感知、可互动的科普内容，
                让环保理念在校园与社区落地生根，为建设美丽中国贡献青春力量。
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-forest-700 text-cream rounded-full font-medium hover:bg-forest-800 transition-colors"
              >
                了解团队故事 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
