'use client'

import { useApp } from '@/src/entities'

import { EachMemberPostsList } from './EachMemberPostsList'

export const EachMemberPostsSection = ({ slug }: { slug: string }) => {
	const { getMemberBySlug } = useApp()

	const member = getMemberBySlug(slug)

	if (!member) {
		return null
	}

	return (
		<section className="px-4 md:px-8 lg:px-12 xl:px-16 pb-16">
			<div className="px-4 md:px-8 lg:px-12 xl:px-16 mt-12 my-8">
				<h3 className="font-bold text-[calc(2vw+0.75rem)] md:text-2xl xl:text-4xl leading-[1.1] uppercase">
					Гишүүний нийтлэлүүд
				</h3>
			</div>
			<EachMemberPostsList member={member} />
		</section>
	)
}
