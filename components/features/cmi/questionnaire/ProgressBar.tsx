import React from 'react'

type ProgressBarProps = {
  current: number; // current page
  total: number; // total pages
  onPrevious?: () => void;
}

function ProgressBar({ current, total, onPrevious }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className="mx-auto flex w-full max-w-[640px] items-center gap-4">
      {/* ← "Previous Step" Button */}
      <button
        onClick={onPrevious}
        disabled={current === 1}
        className="flex w-[110px] items-center justify-center gap-1 text-xs text-foreground/60 disabled:text-transparent hover:text-accent hover:font-semibold"
      >
        <span className="text-xs">←</span>
        <span>Previous Page</span>
      </button>

      {/* Progress Bar Core */}
      <div className="flex-1 h-3.5 rounded-full bg-foreground overflow-hidden">
        <div
          className="h-full rounded-full bg-[#C8A46A] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Step Text */}
      <span className="w-[110px] text-left text-xs text-foreground/80 whitespace-nowrap px-2">
        Step {current} of {total}
      </span>
    </div>
  )
}

export default ProgressBar
