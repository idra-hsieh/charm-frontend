"use client";

export default function EmailPreviewPage() {
  const searchParams = typeof window !== "undefined" ? window.location.search : "";
  const iframeSrc = `/api/cmi/preview-email${searchParams || ""}`;

  return (
    <div className="h-screen w-full bg-neutral-900 flex flex-col">
      <div className="bg-black text-white p-4 text-center text-sm font-mono border-b border-white/10">
        EMAIL PREVIEW MODE
      </div>
      <iframe
        src={iframeSrc}
        className="flex-1 w-full border-none bg-white"
        title="Email Preview"
      />
    </div>
  );
}
