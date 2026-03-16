import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

export const LatestPostsScroll = ({
	onPrev,
	onNext,
	onToggle,
	isPlaying,
	isDisabled
}: {
	onPrev: () => void
	onNext: () => void
	onToggle: () => void
	isPlaying: boolean
	isDisabled: boolean
}) => {
	return (
		<div className="flex gap-4">
			<button
				onClick={onPrev}
				disabled={isDisabled}
				className={`p-4 hover:bg-orange-400 focus:bg-orange-500 cursor-pointer rounded-full transition-colors border-2 text-black ${isDisabled && 'cursor-not-allowed!'}`}
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
				disabled={isDisabled}
				className={`p-4 hover:bg-orange-400 focus:bg-orange-500 cursor-pointer rounded-full transition-colors border-2 text-black ${isDisabled && 'cursor-not-allowed!'}`}
			>
				<ChevronRight />
			</button>
		</div>
	)
}
