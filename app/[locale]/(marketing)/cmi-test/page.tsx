"use client";

import CMITestHeader from "@/components/features/cmi/questionnaire/CMITestHeader";

function CMITestPage() {
  return (
    <CMITestHeader />
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