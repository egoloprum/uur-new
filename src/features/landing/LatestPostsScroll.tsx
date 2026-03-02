import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

export const LatestPostsScroll = ({
  onPrev,
  onNext,
  onToggle,
  isPlaying,
}: {
  onPrev: () => void
  onNext: () => void
  onToggle: () => void
  isPlaying: boolean
}) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={onPrev}
        className="p-4 hover:bg-orange-400 focus:bg-orange-500 cursor-pointer rounded-full transition-colors border-2 text-black"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={onToggle}
        className="p-4 hover:bg-orange-400 focus:bg-orange-500 cursor-pointer rounded-full transition-colors border-2 text-black"
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>
      <button
        onClick={onNext}
        className="p-4 hover:bg-orange-400 focus:bg-orange-500 cursor-pointer rounded-full transition-colors border-2 text-black"
      >
        <ChevronRight />
      </button>
    </div>
  )
}
