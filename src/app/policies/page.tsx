import { HeroSection } from '@/src/widgets'

export const Page = ({}) => {
	return (
		<main className="font-advent-pro-local">
			<HeroSection className="pb-10!">
				<h1
					className="font-bold uppercase z-10 tracking-wide mt-20 leading-12"
					style={{ fontSize: 'clamp(3rem, 4vw, 8rem)' }}
				>
					Privacy Policy
				</h1>
			</HeroSection>

			<section className="p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col">
				<p className="text-stone-500 text-xl">Last updated: 10.04.2026</p>
				<p className="text-xl my-2 md:my-4">
					We value your privacy and are committed to handling your information
					with care, transparency, and respect. This Privacy Policy explains, in
					general terms, how information may be collected, used, and protected
					when you interact with this website.
				</p>
				<h2 className="text-4xl font-bold my-4 md:my-8">
					1. Information We Collect
				</h2>
				<p className="text-xl my-2 md:my-4">
					When you use this website, certain types of information may be
					collected automatically. This can include technical details such as
					browser type, device information, approximate location, and general
					interaction patterns (for example, pages visited or features used).
				</p>
				<p className="text-xl my-2 md:my-4">
					In some cases, small data files such as cookies may be stored on your
					device to support basic functionality, improve performance, and
					provide a smoother browsing experience.
				</p>
				<p className="text-xl my-2 md:my-4">
					We do not aim to collect personally identifiable information unless it
					is explicitly provided by you.
				</p>
				<h2 className="text-4xl font-bold my-4 md:my-8">
					2. How Information Is Used
				</h2>
				<p className="text-xl my-2 md:my-4">
					Collected information is used in a limited and responsible manner,
					primarily to:
				</p>
				<ul className="text-xl ml-4">
					<li>- Ensure the website functions correctly and efficiently</li>
					<li>
						- Understand general usage patterns and improve user experience
					</li>
					<li>- Maintain security and prevent misuse</li>
				</ul>
				<p className="text-xl my-2 md:my-4">
					All usage is oriented toward improving the quality, stability, and
					relevance of the platform rather than identifying individual users.
				</p>
				<h2 className="text-4xl font-bold my-4 md:my-8">
					3. Cookies and Similar Technologies
				</h2>
				<p className="text-xl my-2 md:my-4">
					Cookies and similar technologies may be used to maintain session
					consistency, remember preferences, and gather anonymous usage
					insights.
				</p>
				<p className="text-xl my-2 md:my-4">
					You can control or disable cookies through your browser settings.
					Please note that some parts of the website may not function as
					intended if cookies are disabled.
				</p>
				<h2 className="text-4xl font-bold my-4 md:my-8">4. Data Sharing</h2>
				<p className="text-xl my-2 md:my-4">
					We do not sell, trade, or rent user data. Information may be processed
					using trusted third-party services that help operate and maintain the
					website. These services are expected to handle data securely and only
					for necessary purposes.
				</p>
				<h2 className="text-4xl font-bold my-4 md:my-8">5. Data Security</h2>
				<p className="text-xl my-2 md:my-4">
					Reasonable technical and organizational measures are taken to protect
					information from unauthorized access, loss, or misuse. However, no
					system can be guaranteed to be completely secure, and users should
					exercise standard caution when using online services.
				</p>
				<h2 className="text-4xl font-bold my-4 md:my-8">6. Data Retention</h2>
				<p className="text-xl my-2 md:my-4">
					Information is retained only for as long as it is necessary to fulfill
					its intended purpose, after which it is either deleted or anonymized.
				</p>
				<h2 className="text-4xl font-bold my-4 md:my-8">7. Your Rights</h2>
				<p className="text-xl my-2 md:my-4">
					Depending on your location, you may have rights related to your
					personal data, including the ability to request access, correction, or
					deletion. If applicable, such requests can be made through appropriate
					contact channels.
				</p>
				<h2 className="text-4xl font-bold my-4 md:my-8">
					8. Changes to This Policy
				</h2>
				<p className="text-xl my-2 md:my-4">
					This Privacy Policy may be updated periodically to reflect changes in
					practices or legal requirements. Updates will be reflected by revising
					the “Last updated” date.
				</p>
				<h2 className="text-4xl font-bold my-4 md:my-8">9. Contact</h2>
				<p className="text-xl my-2 md:my-4">
					If you have questions or concerns about this Privacy Policy, you may
					reach out through the available contact methods on this website.
				</p>
				<span className="border-t-2 border-stone-400 dark:border-stone-500 w-full mt-4"></span>
				<p className="text-xl my-2 md:my-4">
					By using this website, you acknowledge that you have read and
					understood this Privacy Policy.
				</p>
			</section>
		</main>
	)
}

export default Page
