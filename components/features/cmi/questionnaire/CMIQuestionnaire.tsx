"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { QUESTIONS, PAGE_SIZE } from "@/lib/cmi/data";
import { calculateAllScores } from "@/lib/cmi/scoring"; // Import the new helper
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  onComplete: (answers: Record<string, number>, email: string) => void;
}

export default function CMIQuestionnaire({ onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentPage, setCurrentPage] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [email, setEmail] = useState("");

  const totalPages = Math.ceil(QUESTIONS.length / PAGE_SIZE);
  
  const currentQuestions = useMemo(() => {
    const start = currentPage * PAGE_SIZE;
    return QUESTIONS.slice(start, start + PAGE_SIZE);
  }, [currentPage]);

  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / QUESTIONS.length) * 100;

  const handleAnswer = (qId: string, val: number) => {
    setAnswers((prev) => ({ ...prev, [qId]: val }));
    const qIndex = QUESTIONS.findIndex((q) => q.id === qId);
    if (qIndex < QUESTIONS.length - 1) {
      setFocusedIndex(qIndex + 1);
    }
  };

  const isPageComplete = currentQuestions.every((q) => answers[q.id] !== undefined);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((p) => p + 1);
      setFocusedIndex((currentPage + 1) * PAGE_SIZE);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isLastPage = currentPage === totalPages - 1;
  const canFinish = isPageComplete && email.includes("@");

  const handleFinish = () => {
    // USE THE NEW SCORING LOGIC HERE
    const finalScores = calculateAllScores(QUESTIONS, answers);
    onComplete(finalScores, email);
  };

  return (
    <div className="space-y-10 relative">
      {/* ... (Keep your UI/JSX exactly the same as before) ... */}

      {/* Footer Logic Update */}
      <div className="flex flex-col gap-6 items-center pt-8 pb-20">
        {!isLastPage ? (
          <Button 
            onClick={handleNext} 
            disabled={!isPageComplete}
            // ... styling
          >
            Next Step →
          </Button>
        ) : (
          <div className="w-full max-w-md bg-white/50 p-8 rounded-2xl ...">
             {/* Email Inputs ... */}
            
            <Button 
              onClick={handleFinish} // Updated handler
              disabled={!canFinish}
              className="w-full text-lg h-12 rounded-full"
            >
              See Results
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}