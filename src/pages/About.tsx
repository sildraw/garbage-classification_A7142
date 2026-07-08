import { motion } from "framer-motion";
import { MapPin, Calendar, Leaf } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { teamData } from "@/data/team";

export default function About() {
  return (
    <div className="pt-20">
      {/* 页面头部 */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-50 via-cream to-sprout-light/10" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 mb-4 text-xs font-mono tracking-widest uppercase text-forest-700 bg-forest-100 rounded-full">
              ABOUT US
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
              关于环保A7142小分队
            </h1>
            <p className="text-lg text-forest-600 max-w-2xl leading-relaxed">
              {teamData.theme}——一支致力于垃圾分类科普的青春环保力量
            </p>
          </motion.div>
        </div>
      </section>

      {/* 团队简介 */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-cream to-forest-50/50 rounded-3xl p-10 md:p-14 shadow-soft border border-forest-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-sprout/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-forest-700 rounded-2xl">
                  <Leaf className="w-7 h-7 text-sprout-light" />
                </div>
                <div>
                  <p className="text-xs font-mono tracking-widest text-forest-400 uppercase">
                    TEAM
                  </p>
                  <h2 className="font-serif text-2xl font-bold text-charcoal">
                    {teamData.teamName}
                  </h2>
                </div>
              </div>
              <p className="text-base md:text-lg text-forest-600 leading-relaxed mb-4">
                {teamData.theme}
              </p>
              <p className="text-sm text-forest-500 leading-relaxed">
                我们是来自中国矿业大学的暑期社会实践团队，希望通过查阅资料、问卷调查、海报制作、视频拍摄、网站开发等多种形式，
                将垃圾分类知识转化为可感知、可互动的科普内容，让环保理念在校园与社区落地生根，为建设美丽中国贡献青春力量。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 日程安排 */}
      <section className="section-padding bg-forest-50/50">
        <div className="container mx-auto">
          <SectionTitle
            eyebrow="SCHEDULE"
            title="实践日程安排"
            subtitle="7月15日至8月1日，18天的系统化实践计划"
          />

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-forest-200 md:-translate-x-1/2" />

            <div className="space-y-8">
              {teamData.schedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-start gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-forest-700 rounded-full ring-4 ring-cream md:-translate-x-1/2 mt-6 z-10" />

                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-5 shadow-soft border border-forest-100">
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          index % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        <Calendar className="w-4 h-4 text-forest-500" />
                        <span className="text-sm font-mono text-forest-700 font-medium">
                          {item.date}
                        </span>
                      </div>
                      <div
                        className={`flex items-center gap-1.5 mb-2 text-xs text-forest-500 ${
                          index % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </div>
                      <p className="text-sm text-charcoal leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}