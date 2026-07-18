import clsx from 'clsx'
import { HeroSection } from '../widgets'

const NotFoundPage = ({}) => {
	return (
		<main className="font-montserrat-alternates-local">
			<HeroSection className="">
				<h1
					className={clsx(
						'font-bold uppercase z-10 tracking-wide leading-[1.1]',
						'text-[calc(8vw+0.5rem)] md:text-6xl lg:text-8xl'
					)}
				>
					Хуудас олдсонгүй
				</h1>
			</HeroSection>
		</main>
	)
}

export default NotFoundPage
