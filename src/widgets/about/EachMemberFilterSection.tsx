'use client'

import { useApp } from '@/src/entities'
import { EachMemberPostsFilterDropdown } from '@/src/features/about'
import { TopicsList } from '@/src/shared/components'

export const EachMemberFilterSection = ({ slug }: { slug: string }) => {
	const { getMemberBySlug } = useApp()

	const member = getMemberBySlug(slug)

	if (!member) {
		return null
	}
	return (
		<section className="px-4 md:px-8 lg:px-12 xl:px-16">
			<div className="border-y border-stone-400 dark:border-stone-500 py-4 md:py-8 lg:py-12 xl:py-16 flex flex-wrap max-md:flex-col gap-4 md:justify-between md:items-center">
				<div className="flex flex-wrap gap-4">
					<EachMemberPostsFilterDropdown />
					{/* <EachMemberPostsSortDropdown /> */}
				</div>
				<TopicsList className="flex-row flex-wrap max-sm:gap-x-4" />
			</div>
		</section>
	)
}
