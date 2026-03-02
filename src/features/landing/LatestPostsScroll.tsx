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
      <button onClick={onPrev} className="p-2 hover:bg-white/20 rounded-full transition-colors">
        <ChevronLeft />
      </button>
      <button onClick={onToggle} className="p-2 hover:bg-white/20 rounded-full transition-colors">
        {isPlaying ? <Pause /> : <Play />}
      </button>
      <button onClick={onNext} className="p-2 hover:bg-white/20 rounded-full transition-colors">
        <ChevronRight />
      </button>
    </div>
  )
}
