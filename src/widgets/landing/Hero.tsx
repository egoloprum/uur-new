'use client'

export const HeroSection = () => {
	return (
		<div className="lg:min-h-dvh p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col max-sm:gap-40 max-md:gap-60 max-lg:gap-80 relative overflow-hidden">
			<section className="flex flex-col justify-between">
				<h1 className="font-bold text-[10rem] text-center uppercase z-10">
					<span className="">Үүр </span>
					<span className="text-(--orange)">Товхимол</span>
				</h1>
			</section>

			<section className="grow flex flex-col justify-between">
				<div className="flex-1 flex justify-center flex-col border-b border-stone-400 dark:border-stone-500">
					<span className="text-xl md:text-2xl">[01]</span>
					<p className="text-xl md:text-2xl lg:text-4xl font-semibold">
						Нар мандахын өмнөх хэсэг үе
					</p>
				</div>

				<div className="flex-1 flex justify-center flex-col items-end border-b border-stone-400 dark:border-stone-500">
					<span className="text-xl md:text-2xl">[02]</span>
					<p className="text-xl md:text-2xl lg:text-4xl font-semibold">
						Амьтны орогнох оромж
					</p>
				</div>

				<div className="flex-1 flex justify-center flex-col border-b border-stone-400 dark:border-stone-500">
					<span className="text-xl md:text-2xl">[03]</span>
					<p className="text-xl md:text-2xl lg:text-4xl font-semibold">
						Өнө мөнх
					</p>
				</div>
			</section>
		</div>
	)
}
