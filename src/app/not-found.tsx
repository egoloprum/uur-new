import { HeroSection } from '../widgets'

const NotFoundPage = ({}) => {
	return (
		<main className="font-montserrat-alternates-local">
			<HeroSection className="pb-20! md:pb-40! lg:pb-60!">
				<h1
					className="font-bold uppercase z-10 tracking-wide mt-20 leading-12"
					style={{ fontSize: 'clamp(3rem, 4vw, 8rem)' }}
				>
					Хуудас олдсонгүй
				</h1>
			</HeroSection>
		</main>
	)
}

export default NotFoundPage
