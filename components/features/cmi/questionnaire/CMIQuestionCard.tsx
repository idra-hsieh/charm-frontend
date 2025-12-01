"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  question: { id: string; text: string };
  index: number;
  isFocused: boolean;
  selectedValue?: number;
  onSelect: (val: number) => void;
  onFocus: () => void;
}

export default function CMIQuestionCard({ 
  question, index, isFocused, selectedValue, onSelect, onFocus 
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // Optional: Auto-scroll when focused
  useEffect(() => {
    if (isFocused && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isFocused]);

  return (
    <motion.div
      ref={ref}
      onClick={onFocus}
      animate={{ 
        opacity: isFocused ? 1 : 0.3, 
        scale: isFocused ? 1 : 0.98,
        filter: isFocused ? "blur(0px)" : "blur(1px)"
      }}
      className={cn(
        "relative p-8 rounded-xl border transition-all duration-500 cursor-pointer",
        isFocused 
          ? "bg-[#1c1c1c] border-white/10 shadow-2xl z-10" 
          : "bg-black/80 border-transparent z-0"
      )}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <h3 className="text-white font-primary text-xl md:text-2xl font-light leading-snug flex-1">
          <span className="text-accent mr-3 text-lg">{index}.</span>
          {question.text}
        </h3>

        {/* Likert Scale */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-white/40 text-xs uppercase tracking-wider hidden md:block">Disagree</span>
          
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((val) => (
              <button
                key={val}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent focusing the card again if handled by parent
                  onSelect(val);
                }}
                className={cn(
                  "w-8 h-12 rounded-full transition-all duration-300 border border-white/20",
                  selectedValue === val 
                    ? "bg-accent border-accent scale-110 shadow-[0_0_15px_rgba(187,147,100,0.5)]" 
                    : "bg-white/10 hover:bg-white/20"
                )}
                aria-label={`Select option ${val}`}
              />
            ))}
          </div>

          <span className="text-white/40 text-xs uppercase tracking-wider hidden md:block">Agree</span>
        </div>
      </div>
    </motion.div>
  );
}