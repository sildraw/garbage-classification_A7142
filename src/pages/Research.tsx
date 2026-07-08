import { motion } from "framer-motion";
import ReactECharts from "echarts-for-react";
import { FileText, Download, TrendingUp, Target, Users, MapPin } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import Counter from "@/components/common/Counter";
import { researchData } from "@/data/research";

const barOption = {
  tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
  grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
  xAxis: {
    type: "category",
    data: researchData.charts.awarenessByCategory.data.map((d) => d.name),
    axisLine: { lineStyle: { color: "#8FB39C" } },
    axisLabel: { color: "#4D7B5A", fontSize: 12 },
  },
  yAxis: {
    type: "value",
    max: 100,
    axisLine: { show: false },
    axisLabel: { color: "#8FB39C", formatter: "{value}%" },
    splitLine: { lineStyle: { color: "#F0F5F1" } },
  },
  series: [
    {
      type: "bar",
      data: researchData.charts.awarenessByCategory.data.map((d) => ({
        value: d.value,
        itemStyle: {
          color: ["#1E88E5", "#E53935", "#43A047", "#757575"][0],
        },
      })),
      barWidth: "50%",
      itemStyle: {
        borderRadius: [8, 8, 0, 0],
        color: function (params: { dataIndex: number }) {
          const colors = ["#1E88E5", "#E53935", "#43A047", "#757575"];
          return colors[params.dataIndex];
        },
      },
      label: {
        show: true,
        position: "top",
        formatter: "{c}%",
        color: "#1A2E1A",
        fontSize: 13,
        fontWeight: "bold",
      },
    },
  ],
};

const pieOption = {
  tooltip: { trigger: "item", formatter: "{b}: {c}人 ({d}%)" },
  legend: {
    orient: "vertical",
    right: "5%",
    top: "center",
    textStyle: { color: "#4D7B5A", fontSize: 13 },
  },
  series: [
    {
      type: "pie",
      radius: ["45%", "70%"],
      center: ["38%", "50%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 8,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: true,
        formatter: "{d}%",
        fontSize: 14,
        fontWeight: "bold",
        color: "#1A2E1A",
      },
      data: researchData.charts.behaviorHabits.data.map((d, i) => ({
        ...d,
        itemStyle: {
          color: ["#2D5F3F", "#7BC47F", "#F4C430", "#E53935"][i],
        },
      })),
    },
  ],
};

export default function Research() {
  return (
    <div className="pt-20">
      {/* 页面头部 */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-700 to-forest-900" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-sprout/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative text-cream">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 mb-4 text-xs font-mono tracking-widest uppercase text-sprout-light bg-sprout/15 rounded-full">
              RESEARCH FINDINGS
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              调研成果与数据分析
            </h1>
            <p className="text-lg text-cream/80 max-w-2xl leading-relaxed">
              通过312份问卷的统计分析，呈现垃圾分类现状的真实图景
            </p>
          </motion.div>
        </div>
      </section>

      {/* 数据概览 */}
      <section className="py-12 -mt-12 relative z-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: FileText,
                value: researchData.overview.totalSamples,
                suffix: "份",
                label: "问卷总样本",
                color: "#2D5F3F",
              },
              {
                icon: MapPin,
                value: researchData.overview.coverageAreas,
                suffix: "处",
                label: "覆盖区域",
                color: "#1E88E5",
              },
              {
                icon: TrendingUp,
                value: researchData.overview.awarenessRate,
                suffix: "%",
                decimals: 1,
                label: "分类认知率",
                color: "#F4C430",
              },
              {
                icon: Target,
                value: researchData.overview.participationRate,
                suffix: "%",
                decimals: 1,
                label: "实际参与率",
                color: "#E53935",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card"
              >
                <item.icon
                  className="w-7 h-7 mb-3"
                  style={{ color: item.color }}
                />
                <div className="text-3xl font-mono font-bold text-charcoal mb-1">
                  <Counter
                    value={item.value}
                    suffix={item.suffix}
                    decimals={item.decimals || 0}
                  />
                </div>
                <p className="text-sm text-forest-500">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 图表展示 */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionTitle
            eyebrow="DATA VISUALIZATION"
            title="调研数据可视化"
            subtitle="通过图表直观呈现垃圾分类的认知度与行为习惯"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 认知度柱状图 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-soft"
            >
              <div className="mb-4">
                <span className="text-xs font-mono tracking-wider uppercase text-forest-400">
                  CHART 01
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal mt-1">
                  四类垃圾认知度对比
                </h3>
                <p className="text-sm text-forest-500 mt-1">
                  受访者对四类垃圾分类标准的认知比例
                </p>
              </div>
              <ReactECharts
                option={barOption}
                style={{ height: "320px", width: "100%" }}
              />
            </motion.div>

            {/* 行为习惯饼图 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-soft"
            >
              <div className="mb-4">
                <span className="text-xs font-mono tracking-wider uppercase text-forest-400">
                  CHART 02
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal mt-1">
                  日常分类行为习惯
                </h3>
                <p className="text-sm text-forest-500 mt-1">
                  受访者日常垃圾分类执行频率分布
                </p>
              </div>
              <ReactECharts
                option={pieOption}
                style={{ height: "320px", width: "100%" }}
              />
            </motion.div>
          </div>

          {/* 痛点词云（简化为标签云） */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-soft mt-6"
          >
            <div className="mb-6">
              <span className="text-xs font-mono tracking-wider uppercase text-forest-400">
                CHART 03
              </span>
              <h3 className="font-serif text-xl font-bold text-charcoal mt-1">
                垃圾分类痛点词云
              </h3>
              <p className="text-sm text-forest-500 mt-1">
                受访者反映的垃圾分类主要障碍（字号反映提及频率）
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 py-6">
              {researchData.charts.painPoints.data.map((word, index) => {
                const size = 14 + (word.value / 100) * 24;
                const opacity = 0.5 + (word.value / 100) * 0.5;
                return (
                  <motion.span
                    key={word.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="font-serif font-bold text-forest-700 hover:text-forest-900 transition-colors cursor-default"
                    style={{ fontSize: `${size}px` }}
                  >
                    {word.name}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 核心结论 */}
      <section className="section-padding bg-forest-50/50">
        <div className="container mx-auto">
          <SectionTitle
            eyebrow="KEY FINDINGS"
            title="核心调研结论"
            subtitle="基于312份问卷数据的深度分析发现"
          />

          <div className="space-y-4">
            {researchData.conclusions.map((conclusion, index) => (
              <motion.div
                key={conclusion.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-soft border-l-4 border-forest-600"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-forest-700 text-cream rounded-xl font-mono font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                      {conclusion.title}
                    </h3>
                    <p className="text-forest-600 leading-relaxed">
                      {conclusion.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 报告下载 */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-forest-800 to-forest-900 rounded-3xl p-10 md:p-12 text-cream text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-sprout/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cream/10 rounded-2xl mb-4">
                <FileText className="w-8 h-8 text-sprout-light" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">
                完整调研报告
              </h2>
              <p className="text-cream/70 mb-6 max-w-xl mx-auto">
                下载不少于1500字的完整调研报告，包含现状分析、问题诊断与改进建议
              </p>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2 px-7 py-3 bg-sprout text-forest-900 rounded-full font-medium hover:bg-sprout-light transition-colors"
              >
                <Download className="w-4 h-4" />
                下载调研报告 PDF
              </a>
              <p className="text-xs text-cream/50 mt-4">
                报告将在实践完成后（8月1日后）提供下载
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
