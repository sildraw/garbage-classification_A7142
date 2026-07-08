import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Recycle,
  AlertTriangle,
  Apple,
  Trash2,
  Search,
  Check,
  X,
  Utensils,
  ShoppingBag,
  Package,
  Briefcase,
  RefreshCw,
  Coffee,
  ChevronRight,
} from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { knowledgeData } from "@/data/knowledge";
import type { CategoryId } from "@/types";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  recycle: Recycle,
  "alert-triangle": AlertTriangle,
  apple: Apple,
  "trash-2": Trash2,
  utensils: Utensils,
  "shopping-bag": ShoppingBag,
  package: Package,
  briefcase: Briefcase,
  "refresh-cw": RefreshCw,
  coffee: Coffee,
};

const categoryMeta: Record<
  CategoryId,
  { color: string; bgColor: string; icon: typeof Recycle }
> = {
  recyclable: { color: "#1E88E5", bgColor: "bg-blue-50", icon: Recycle },
  hazardous: { color: "#E53935", bgColor: "bg-red-50", icon: AlertTriangle },
  kitchen: { color: "#43A047", bgColor: "bg-green-50", icon: Apple },
  other: { color: "#757575", bgColor: "bg-gray-50", icon: Trash2 },
};

export default function Knowledge() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("recyclable");
  const [searchQuery, setSearchQuery] = useState("");

  const currentCategory = knowledgeData.categories.find(
    (c) => c.id === activeCategory
  )!;

  // 智能搜索：从所有类别的常见物品和易混物品中检索
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    const results: { name: string; category: CategoryId; reason?: string }[] =
      [];

    knowledgeData.categories.forEach((cat) => {
      cat.commonItems.forEach((item) => {
        if (item.toLowerCase().includes(query)) {
          results.push({ name: item, category: cat.id });
        }
      });
    });

    knowledgeData.confusingItems.forEach((item) => {
      if (item.name.toLowerCase().includes(query)) {
        results.push({
          name: item.name,
          category: item.correctCategory as CategoryId,
          reason: item.reason,
        });
      }
    });

    return results.slice(0, 8);
  }, [searchQuery]);

  return (
    <div className="pt-20">
      {/* 页面头部 */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-50 to-cream" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 mb-4 text-xs font-mono tracking-widest uppercase text-forest-700 bg-forest-100 rounded-full">
              KNOWLEDGE BASE
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
              垃圾分类知识库
            </h1>
            <p className="text-lg text-forest-600 max-w-2xl leading-relaxed">
              了解四分类标准，掌握易混物品区分，学习源头减量技巧，让每一次投放都精准正确。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 智能搜索 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-forest-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索物品名称，如：纸巾、电池、瓜果皮..."
                className="w-full pl-14 pr-5 py-4 bg-cream rounded-full border-2 border-forest-100 focus:border-forest-400 focus:outline-none text-charcoal placeholder:text-forest-400 transition-colors"
              />
            </div>

            <AnimatePresence>
              {searchResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-card border border-forest-100 overflow-hidden z-20"
                >
                  {searchResults.map((result, index) => {
                    const meta = categoryMeta[result.category];
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between px-5 py-3 hover:bg-cream transition-colors border-b border-forest-50 last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-charcoal font-medium">
                            {result.name}
                          </span>
                          {result.reason && (
                            <span className="text-xs text-forest-400">
                              易混物品
                            </span>
                          )}
                        </div>
                        <span
                          className="px-3 py-1 rounded-full text-xs font-medium text-white"
                          style={{ backgroundColor: meta.color }}
                        >
                          {knowledgeData.categories.find(
                            (c) => c.id === result.category
                          )?.name}
                        </span>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 四分类导览 */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionTitle
            eyebrow="FOUR CATEGORIES"
            title="四大垃圾类别"
            subtitle="点击下方色块查看每个类别的详细分类指南"
          />

          {/* 类别选择器 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {knowledgeData.categories.map((cat, index) => {
              const meta = categoryMeta[cat.id];
              const isActive = activeCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "relative group p-6 rounded-2xl border-2 transition-all text-left overflow-hidden",
                    isActive
                      ? "bg-white shadow-card"
                      : "bg-white/50 hover:bg-white hover:shadow-soft border-transparent"
                  )}
                  style={{
                    borderColor: isActive ? meta.color : "transparent",
                  }}
                >
                  <div
                    className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{ backgroundColor: meta.color }}
                  />
                  <div className="relative">
                    <div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3"
                      style={{ backgroundColor: `${meta.color}15` }}
                    >
                      <meta.icon
                        className="w-6 h-6"
                        style={{ color: meta.color }}
                      />
                    </div>
                    <h3
                      className="font-serif text-lg font-bold mb-1"
                      style={{ color: meta.color }}
                    >
                      {cat.name}
                    </h3>
                    <p className="text-xs text-forest-500 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* 类别详情 */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-card overflow-hidden"
            >
              <div
                className="h-2"
                style={{ backgroundColor: categoryMeta[activeCategory].color }}
              />
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* 左侧：基本信息 */}
                  <div>
                    <div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
                      style={{
                        backgroundColor: `${currentCategory.color}15`,
                      }}
                    >
                      {(() => {
                        const Icon = categoryMeta[activeCategory].icon;
                        return (
                          <Icon
                            className="w-8 h-8"
                            style={{ color: currentCategory.color }}
                          />
                        );
                      })()}
                    </div>
                    <h3
                      className="font-serif text-2xl font-bold mb-3"
                      style={{ color: currentCategory.color }}
                    >
                      {currentCategory.name}
                    </h3>
                    <p className="text-sm text-forest-600 leading-relaxed mb-6">
                      {currentCategory.description}
                    </p>
                    <div
                      className="p-4 rounded-xl"
                      style={{
                        backgroundColor: `${currentCategory.color}08`,
                      }}
                    >
                      <p className="text-xs font-mono tracking-wider uppercase mb-2 text-forest-500">
                        投放要求
                      </p>
                      <p className="text-sm text-charcoal leading-relaxed">
                        {currentCategory.requirements}
                      </p>
                    </div>
                  </div>

                  {/* 中间：常见物品 */}
                  <div>
                    <p className="text-xs font-mono tracking-wider uppercase mb-4 text-forest-500">
                      常见物品
                    </p>
                    <ul className="space-y-2">
                      {currentCategory.commonItems.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-charcoal"
                        >
                          <Check
                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                            style={{ color: currentCategory.color }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 右侧：处理流程与注意事项 */}
                  <div>
                    <p className="text-xs font-mono tracking-wider uppercase mb-4 text-forest-500">
                      处理流程
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      {currentCategory.process.map((step, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span
                            className="px-3 py-1 rounded-full text-xs font-medium text-white"
                            style={{
                              backgroundColor: currentCategory.color,
                            }}
                          >
                            {step}
                          </span>
                          {i < currentCategory.process.length - 1 && (
                            <ChevronRight className="w-3 h-3 text-forest-300" />
                          )}
                        </div>
                      ))}
                    </div>

                    <p className="text-xs font-mono tracking-wider uppercase mb-3 text-forest-500">
                      注意事项
                    </p>
                    <ul className="space-y-1.5">
                      {currentCategory.notes.map((note, i) => (
                        <li
                          key={i}
                          className="text-xs text-forest-600 flex items-start gap-1.5"
                        >
                          <span
                            className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                            style={{
                              backgroundColor: currentCategory.color,
                            }}
                          />
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 易混物品清单 */}
      <section className="section-padding bg-forest-50/50">
        <div className="container mx-auto">
          <SectionTitle
            eyebrow="CONFUSING ITEMS"
            title="易混淆物品清单"
            subtitle="这些物品最容易投错，看清解析不再纠结"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {knowledgeData.confusingItems.map((item, index) => {
              const correctMeta =
                categoryMeta[item.correctCategory as CategoryId];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif text-lg font-bold text-charcoal">
                      {item.name}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-red-50 border border-red-100">
                      <div className="flex items-center gap-1.5 mb-1">
                        <X className="w-3.5 h-3.5 text-red-500" />
                        <span className="text-xs font-medium text-red-600">
                          常被误投
                        </span>
                      </div>
                      <p className="text-sm text-charcoal font-medium">
                        {item.wrongCategory}
                      </p>
                    </div>
                    <div
                      className="p-3 rounded-xl border"
                      style={{
                        backgroundColor: `${correctMeta.color}10`,
                        borderColor: `${correctMeta.color}30`,
                      }}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <Check
                          className="w-3.5 h-3.5"
                          style={{ color: correctMeta.color }}
                        />
                        <span
                          className="text-xs font-medium"
                          style={{ color: correctMeta.color }}
                        >
                          正确分类
                        </span>
                      </div>
                      <p
                        className="text-sm font-medium"
                        style={{ color: correctMeta.color }}
                      >
                        {item.correctCategory}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-forest-600 leading-relaxed bg-cream/50 p-3 rounded-lg">
                    {item.reason}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 源头减量技巧 */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionTitle
            eyebrow="REDUCTION TIPS"
            title="源头减量小妙招"
            subtitle="从源头减少垃圾产生，比分类更重要"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {knowledgeData.reductionTips.map((tip, index) => {
              const Icon = iconMap[tip.icon] || Recycle;
              return (
                <motion.div
                  key={tip.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group relative bg-gradient-to-br from-cream to-forest-50/50 rounded-2xl p-6 border border-forest-100 hover:shadow-card transition-all overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sprout/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4 group-hover:bg-sprout/10 transition-colors" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-forest-700 rounded-xl">
                        <Icon className="w-6 h-6 text-sprout-light" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-charcoal">
                        {tip.scene}
                      </h3>
                    </div>
                    <p className="text-sm text-forest-600 leading-relaxed">
                      {tip.tip}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
