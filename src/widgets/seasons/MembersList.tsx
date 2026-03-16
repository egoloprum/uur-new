import clsx from 'clsx'
import { MoveRight } from 'lucide-react'

import { Member } from '@/src/entities/member'
import { getSlugOfRole } from '@/src/shared'
import { Button } from '@/src/shared/components'
import { trackEvent } from '@/src/shared/lib'

export const MembersList = ({
	members,
	pathname
}: {
	members: Member[]
	pathname: string
}) => {
	return (
		<ul className="">
			{members.map((member, index) => (
				<li
					className={clsx([
						'px-4 md:px-8 lg:px-12 xl:px-16 py-4 md:py-6 border-t border-gray-400',
						'flex max-sm:flex-col sm:items-center sm:justify-between',
						'md:hover:bg-indigo-300 md:hover:px-12 transition-all duration-300',
						members.length - 1 === index && 'border-b'
					])}
					key={member.id}
				>
					<div className="space-y-2">
						<p className="text-black font-bold text-2xl md:text-3xl">
							{member.name}
						</p>
						<ul className="flex flex-wrap gap-2">
							{member.role.map(role => (
								<li
									className="text-black uppercase border rounded-full px-2 text-nowrap text-xs sm:text-sm md:text-base"
									key={member.id + role.type}
								>
									{getSlugOfRole(role.type)}
								</li>
							))}
						</ul>
					</div>

					<Button
						mode="primary"
						href={`/about/${member.slug}`}
						className="text-xs md:text-sm px-2! py-1! max-sm:mt-4"
						onClick={() =>
							trackEvent({
								type: 'member_visit',
								route: pathname,
								member_id: member.id,
								metadata: {
									title: member.name
								}
							})
						}
					>
						<span>Дэлгэрэнгүй</span>
						<MoveRight className="h-4 w-4" />
					</Button>
				</li>
			))}
		</ul>
	)
}
