import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Newspaper, ExternalLink, Image } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";

// 海报数据（使用 SVG 占位，实际可替换为真实海报图片）
const posters = [
  {
    id: 1,
    title: "四分类图示海报",
    description: "清晰呈现四类垃圾的标识与代表物品",
    color: "from-forest-600 to-forest-800",
  },
  {
    id: 2,
    title: "易混清单海报",
    description: "8种常见易混物品的正确分类指南",
    color: "from-amber to-amber-light",
  },
  {
    id: 3,
    title: "减量技巧海报",
    description: "6个生活场景的源头减量小妙招",
    color: "from-sprout-dark to-forest-700",
  },
];

const newsArticles = [
  {
    id: 1,
    title: "环保A7142小分队启动垃圾分类暑期社会实践",
    source: "团队新闻稿",
    date: "2026.07.15",
    excerpt:
      "中国矿业大学计算机类2025-5班4名同学组成环保A7142小分队，正式开启为期18天的垃圾分类科普社会实践...",
  },
  {
    id: 2,
    title: "312份问卷揭示大学生垃圾分类现状",
    source: "调研纪实",
    date: "2026.07.18",
    excerpt:
      "团队在学校周边社区与校内投放点完成问卷调研，数据显示受访者认知率68.5%，但实际参与率仅52.3%...",
  },
  {
    id: 3,
    title: "垃圾分类科普网站上线，让分类知识触手可及",
    source: "成果发布",
    date: "2026.07.22",
    excerpt:
      "由团队自主开发的垃圾分类科普网站正式上线，集知识科普、互动测试、数据可视化于一体...",
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

      {/* 宣传视频 */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionTitle
            eyebrow="PROMO VIDEO"
            title="宣传科普视频"
            align="left"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-forest-800 to-forest-900 rounded-3xl overflow-hidden aspect-video shadow-card"
          >
            <video
              className="w-full h-full object-cover"
              controls
            >
              <source src="https://cdn.jsdelivr.net/gh/sildraw/garbage-classification_A7142@main/public/videos/promo-video.mp4" type="video/mp4" />
              您的浏览器不支持视频播放，请升级浏览器或更换设备查看。
            </video>
          </motion.div>
        </div>
      </section>

      {/* 电子海报画廊 */}
      <section className="section-padding bg-forest-50/50">
        <div className="container mx-auto">
          <SectionTitle
            eyebrow="POSTERS"
            title="电子海报画廊"
            subtitle="至少3张科普海报，覆盖分类图示、易混清单与减量技巧"
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                {/* 海报内容占位 */}
                <div className="absolute inset-0 bg-leaf-texture opacity-30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-cream text-center">
                  <Image className="w-12 h-12 mb-4 opacity-80" />
                  <h3 className="font-serif text-2xl font-bold mb-2">
                    {poster.title}
                  </h3>
                  <p className="text-sm text-cream/80">{poster.description}</p>
                </div>

                {/* Hover 遮罩 */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors flex items-center justify-center">
                  <span className="px-5 py-2 bg-cream/90 text-forest-700 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    点击放大
                  </span>
                </div>

                {/* 编号 */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-cream/20 backdrop-blur rounded-full flex items-center justify-center text-cream font-mono text-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 新闻稿件 */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionTitle
            eyebrow="PRESS RELEASES"
            title="新闻稿件"
            subtitle="团队撰写的新闻稿与调研纪实，记录实践全过程"
            align="left"
          />

          <div className="space-y-4">
            {newsArticles.map((article, index) => (
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
                    <Newspaper className="w-7 h-7 text-forest-700" />
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
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="inline-flex items-center gap-1 text-sm font-medium text-forest-600 hover:text-forest-800 transition-colors"
                    >
                      阅读全文
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-cream rounded-2xl text-center border border-forest-100"
          >
            <p className="text-sm text-forest-500">
              更多新闻稿件将在实践过程中持续更新，并投稿至校园媒体与相关平台
            </p>
          </motion.div>
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
