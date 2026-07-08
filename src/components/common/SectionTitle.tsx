import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  children,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block mb-3 px-4 py-1 text-xs font-mono tracking-widest uppercase text-forest-700 bg-forest-50 rounded-full border border-forest-200">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base md:text-lg text-forest-600 leading-relaxed text-balance",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
}
