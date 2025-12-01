"use client";

import CMIQuestionnaire from "@/components/features/cmi/questionnaire/CMIQuestionnaire";
import CMITestHeader from "@/components/features/cmi/questionnaire/CMITestHeader";
import { useState } from "react";

function CMITestPage() {
  const [isFinished, setIsFinished] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [progress, setProgress] = useState<{ current: number; total: number; onPrevious: () => void } | null>(null);
  
  const handleFinish = (finalAnswers: Record<string, number>, email: string) => {
    setAnswers(finalAnswers);
    // TO-DO: Send email to backend API
    setIsFinished(true);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <>
      {progress && (
        <CMITestHeader
          current={progress.current}
          total={progress.total}
          onPrevious={progress.onPrevious}
        />
      )}
      <CMIQuestionnaire 
        onComplete={handleFinish} 
        onProgressChange={setProgress} 
      />
    </>
  )
}

export default CMITestPage

// const router = useRouter();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleTestComplete = async (scores: Record<string, number>, email: string) => {
//     setIsSubmitting(true);
//     console.log("Test finished.", scores, email)

//       // TO-DO: Send 'scores' and 'email' to your Supabase backend
//       // const { id } = await saveResult({ scores, email });

//       // TO-DO: ID generation, dummy data for now
//       const mockId = "CD3XE7";

//       // Redirect to the result page with the ID
//       router.push(`/cmi-test/${mockId}`);
//     }
  
//   // Loading view while redirecting
//   if (isSubmitting) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent mb-4"></div>
//         <p className="text-xl font-secondary animate-pulse">Calculating your Money Identity...</p>
//       </div>
//     );
//   }

//   return (
//       <main className="min-h-screen bg-[#0a0a0a] text-white"></main>
//   )
