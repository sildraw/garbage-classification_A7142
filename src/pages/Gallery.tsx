import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Newspaper, ExternalLink, Image, FileText } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";

const DOUYIN_URL = "https://v.douyin.com/XPrNs6lI7Xk/";

const posters = [
  {
    id: 1,
    title: "垃圾分类科普海报",
    description: "四分类图示与常见物品指南",
    color: "from-forest-600 to-forest-800",
  },
];

const articles = [
  {
    id: 1,
    title: "垃圾分类暑期社会实践新闻稿",
    source: "新闻稿/推文",
    date: "2026.07",
    excerpt:
      "环保A7142小分队开展垃圾分类科普社会实践，通过问卷调研、知识科普与宣传推广，助力垃圾分类理念传播。",
    icon: Newspaper,
  },
  {
    id: 2,
    title: "大学生垃圾分类现状调研报告",
    source: "调研报告",
    date: "2026.07",
    excerpt:
      "基于312份问卷的数据分析，揭示大学生垃圾分类认知率与参与率现状，提出针对性改进建议。",
    icon: FileText,
  },
];

export default function Gallery() {
  const [selectedPoster, setSelectedPoster] = useState<(typeof posters)[0] | null>(null);

  return (
    <div className="pt-20">
      {/* 页面头部 */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sprout/20 to-forest-50" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 mb-4 text-xs font-mono tracking-widest uppercase text-forest-700 bg-forest-100 rounded-full">
              MEDIA GALLERY
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
              宣传作品集
            </h1>
            <p className="text-lg text-forest-600 max-w-2xl leading-relaxed">
              科普视频、电子海报与新闻稿件，多形式传播垃圾分类理念
            </p>
          </motion.div>
        </div>
      </section>

      {/* 宣传视频 - 抖音链接 */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionTitle
            eyebrow="PROMO VIDEO"
            title="宣传科普视频"
            align="left"
          />

          <motion.a
            href={DOUYIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative block bg-gradient-to-br from-forest-800 to-forest-900 rounded-3xl overflow-hidden aspect-video shadow-card group cursor-pointer"
          >
            <div className="absolute inset-0 bg-leaf-texture opacity-20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-cream">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-cream/15 backdrop-blur rounded-full mb-4 group-hover:bg-sprout/30 transition-colors"
              >
                <Play className="w-10 h-10 md:w-12 md:h-12 text-cream ml-1" fill="currentColor" />
              </motion.div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                垃圾分类知识科普一下
              </h3>
              <p className="text-cream/70 text-sm md:text-base">
                点击在抖音中观看完整视频
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/60 to-transparent">
              <div className="flex items-center gap-2 text-xs text-cream/80">
                <ExternalLink className="w-4 h-4" />
                <span>抖音平台 · 环保A7142小分队出品</span>
              </div>
            </div>
          </motion.a>
        </div>
      </section>

      {/* 电子海报 */}
      <section className="section-padding bg-forest-50/50">
        <div className="container mx-auto">
          <SectionTitle
            eyebrow="POSTER"
            title="电子海报"
            subtitle="四分类图示与常见物品指南"
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start max-w-3xl">
            {posters.map((poster, index) => (
              <motion.div
                key={poster.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedPoster(poster)}
                className={`group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br ${poster.color} shadow-soft hover:shadow-card-hover transition-all`}
              >
                <div className="absolute inset-0 bg-leaf-texture opacity-30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-cream text-center">
                  <Image className="w-12 h-12 mb-4 opacity-80" />
                  <h3 className="font-serif text-2xl font-bold mb-2">
                    {poster.title}
                  </h3>
                  <p className="text-sm text-cream/80">{poster.description}</p>
                </div>

                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors flex items-center justify-center">
                  <span className="px-5 py-2 bg-cream/90 text-forest-700 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    点击放大
                  </span>
                </div>

                <div className="absolute top-4 left-4 w-10 h-10 bg-cream/20 backdrop-blur rounded-full flex items-center justify-center text-cream font-mono text-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 新闻稿/推文 与 调研报告 */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionTitle
            eyebrow="DOCUMENTS"
            title="新闻稿件与调研报告"
            subtitle="团队撰写的新闻推文与调研报告，记录实践全过程"
            align="left"
          />

          <div className="space-y-4">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 md:p-7 shadow-soft hover:shadow-card transition-all border border-forest-100"
              >
                <div className="flex items-start gap-5">
                  <div className="hidden md:flex flex-shrink-0 w-14 h-14 bg-forest-50 rounded-xl items-center justify-center">
                    <article.icon className="w-7 h-7 text-forest-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-forest-400">
                        {article.date}
                      </span>
                      <span className="px-2 py-0.5 bg-sprout/10 text-sprout-dark text-xs rounded-full">
                        {article.source}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg md:text-xl font-bold text-charcoal mb-2 group-hover:text-forest-700 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-forest-600 leading-relaxed mb-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 海报放大弹窗 */}
      <AnimatePresence>
        {selectedPoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPoster(null)}
            className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-md w-full aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br ${selectedPoster.color} shadow-2xl`}
            >
              <div className="absolute inset-0 bg-leaf-texture opacity-30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-cream text-center">
                <Image className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="font-serif text-3xl font-bold mb-3">
                  {selectedPoster.title}
                </h3>
                <p className="text-cream/80">{selectedPoster.description}</p>
              </div>
              <button
                onClick={() => setSelectedPoster(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-cream/20 backdrop-blur rounded-full flex items-center justify-center text-cream hover:bg-cream/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}