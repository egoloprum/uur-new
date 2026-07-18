'use client'

import clsx from 'clsx'

export const HeroSection = () => {
	return (
		<div className="lg:min-h-dvh p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col mt-20 gap-20 relative overflow-hidden">
			<section className="flex flex-col justify-between">
				<h1
					className={clsx(
						'font-bold text-center uppercase z-10',
						'text-[calc(11vw+0.5rem)] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]',
						'leading-[1.1] sm:leading-16 md:leading-24 lg:leading-28 xl:leading-36'
					)}
				>
					<span className="block">Үүр </span>
					<span className="block text-(--orange)">Товхимол</span>
				</h1>
			</section>

			<section className="grow flex flex-col justify-between">
				<div
					className={clsx(
						'flex-1 flex justify-center flex-col',
						'border-b border-stone-400 dark:border-stone-500',
						'max-lg:py-10 max-md:py-6'
					)}
				>
					<span className="text-sm md:text-lg lg:text-xl">[01]</span>
					<p className="text-xl md:text-2xl lg:text-4xl font-semibold">
						Нар мандахын өмнөх хэсэг үе
					</p>
				</div>

				<div
					className={clsx(
						'flex-1 flex justify-center flex-col items-end',
						'border-b border-stone-400 dark:border-stone-500',
						'max-lg:py-10 max-md:py-6'
					)}
				>
					<span className="text-sm md:text-lg lg:text-xl">[02]</span>
					<p className="text-xl md:text-2xl lg:text-4xl font-semibold">
						Амьтны орогнох оромж
					</p>
				</div>

				<div
					className={clsx(
						'flex-1 flex justify-center flex-col',
						'border-b border-stone-400 dark:border-stone-500',
						'max-lg:py-10 max-md:py-6'
					)}
				>
					<span className="text-sm md:text-lg lg:text-xl">[03]</span>
					<p className="text-xl md:text-2xl lg:text-4xl font-semibold">
						Өнө мөнх
					</p>
				</div>
			</section>
		</div>
	)
}
