import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import { teamData } from "@/data/team";

export default function Footer() {
  return (
    <footer className="relative bg-forest-900 text-cream mt-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sprout via-amber to-sprout" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 团队信息 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-sprout-dark rounded-full">
                <Leaf className="w-5 h-5 text-cream" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold">
                  {teamData.teamName}
                </h3>
                <p className="text-xs text-sprout-light tracking-wider">
                  ECO TEAM A7142
                </p>
              </div>
            </div>
            <p className="text-sm text-cream/70 leading-relaxed mb-4">
              {teamData.theme}
            </p>
            <p className="text-xs text-cream/50 leading-relaxed">
              中国矿业大学2026年暑期社会实践团队，致力于垃圾分类科普与环保理念传播。
            </p>
          </div>

          {/* 快速导航 */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-4 text-sprout-light">
              快速导航
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {[
                { path: "/", label: "首页" },
                { path: "/knowledge", label: "分类知识" },
                { path: "/quiz", label: "互动测试" },
                { path: "/research", label: "调研成果" },
                { path: "/gallery", label: "宣传作品" },
                { path: "/about", label: "关于我们" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-cream/70 hover:text-sprout-light transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/50">
          <p>© 2026 环保A7142小分队 · 中国矿业大学暑期社会实践成果展示</p>
          <p className="font-mono">
            垃圾分类就是新时尚 · GREEN LIFE STARTS HERE
          </p>
        </div>
      </div>
    </footer>
  );
}