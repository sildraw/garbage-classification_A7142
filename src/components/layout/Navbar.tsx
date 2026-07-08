import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "首页" },
  { path: "/knowledge", label: "分类知识" },
  { path: "/quiz", label: "互动测试" },
  { path: "/research", label: "调研成果" },
  { path: "/gallery", label: "宣传作品" },
  { path: "/about", label: "关于我们" },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-cream/90 backdrop-blur-md shadow-soft"
            : "bg-transparent"
        )}
      >
        <nav className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center w-9 h-9 bg-forest-700 rounded-full"
              >
                <Leaf className="w-5 h-5 text-sprout-light" />
              </motion.div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg font-bold text-forest-800">
                  环保A7142
                </span>
                <span className="text-[10px] text-forest-500 tracking-wider">
                  GARBAGE CLASSIFICATION
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                      location.pathname === item.path
                        ? "text-forest-800"
                        : "text-forest-600 hover:text-forest-800"
                    )}
                  >
                    {location.pathname === item.path && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 bg-forest-100 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-forest-700"
              aria-label="菜单"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-64 bg-cream shadow-xl pt-20 px-6"
            >
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        location.pathname === item.path
                          ? "bg-forest-100 text-forest-800"
                          : "text-forest-600 hover:bg-forest-50"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}