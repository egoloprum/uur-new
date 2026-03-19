'use client'

import clsx from 'clsx'
import Link from 'next/link'

import { useApp } from '@/src/entities'
import { ContentItem, DefinitionItem, SourceItem } from '@/src/entities/article'
import { useTrackEvent } from '@/src/shared/lib'

export const EachArticleSection = ({ slug }: { slug: string }) => {
	const { getArticleById, getPostBySlug } = useApp()

	const post = getPostBySlug(slug)

	if (!post) {
		return null
	}

	const article = getArticleById(post.id)

	if (!article) {
		return null
	}

	return (
		<article className="text-black flex justify-center pb-20 p-4 md:p-8 lg:p-12 xl:p-16 py-16">
			<section className="md:w-[80%] xl:w-[60%] space-y-6 md:space-y-12 lg:space-y-16">
				{!!article.preQuestions.length && (
					<QuestionsRenderer
						items={article.preQuestions}
						title="Бичвэрийн өмнөх асуултууд"
					/>
				)}

				{!!article.wordDefinitions.length && (
					<DefinitionsRenderer
						items={article.wordDefinitions}
						title="Бичвэрт гарах нэр томьёонуудын тайлбар"
					/>
				)}

				<ContentRenderer items={article.content} />

				{!!article.postQuestions.length && (
					<QuestionsRenderer
						items={article.postQuestions}
						title="Бичвэрийн дараах асуултууд"
					/>
				)}

				{!!article.sourcesText.length && (
					<SourcesRenderer
						items={article.sourcesText}
						title="Бичвэрийн эх сурвалжууд"
						articleId={article.id}
					/>
				)}

				{!!article.sourcesImage.length && (
					<SourcesRenderer
						items={article.sourcesImage}
						title="Зурагнуудын эх сурвалжууд"
						articleId={article.id}
					/>
				)}
			</section>
		</article>
	)
}

const DefinitionsRenderer = ({
	items,
	title
}: {
	items: DefinitionItem[]
	title: string
}) => {
	return (
		<div className="space-y-4 md:space-y-8">
			<h2 className="text-2xl md:text-4xl font-semibold">{title}</h2>
			<ul>
				{items.map((item, index) => (
					<li key={'word-items-' + index} className="mb-2">
						<p className="text-base md:text-xl">
							<span className="mr-4">{++index}</span>
							<span>{item.word} - </span>
							<span>{item.explanation}</span>
						</p>
					</li>
				))}
			</ul>
		</div>
	)
}

const QuestionsRenderer = ({
	items,
	title
}: {
	items: string[]
	title: string
}) => {
	return (
		<div className="space-y-6 md:space-y-8">
			<h2 className="text-2xl md:text-4xl font-semibold">{title}</h2>
			<ul>
				{items.map((item, index) => (
					<li key={title + index} className="mb-2">
						<p className="space-x-4 text-base md:text-xl">
							<span>{++index}</span>
							<span>{item}</span>
						</p>
					</li>
				))}
			</ul>
		</div>
	)
}

const SourcesRenderer = ({
	items,
	title,
	articleId
}: {
	items: SourceItem[]
	title: string
	articleId: string
}) => {
	const trackEvent = useTrackEvent()

	return (
		<div className="space-y-6 md:space-y-8">
			<h2 className="text-2xl md:text-4xl font-semibold">{title}</h2>
			<ul>
				{items.map((item, index) => (
					<li key={title + index} className="mb-2 text-base md:text-xl">
						<p className="mb-2">[{++index}]</p>
						<p className="ml-6">{item.definition}</p>
						<Link
							href={item.href}
							target="_blank"
							className="ml-6 underline underline-offset-2 break-all"
							onClick={() =>
								trackEvent({
									type: 'source_visit',

									post_id: articleId,
									metadata: {
										title: title
									}
								})
							}
						>
							{item.href}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

// TODO: image rendering

const ContentRenderer: React.FC<{
	items: ContentItem[]
	prefixPath?: number[]
}> = ({ items, prefixPath }) => {
	return (
		<ul>
			{items.map((item, index) => {
				const currentNumber = index + 1
				const currentPath = prefixPath
					? [...prefixPath, currentNumber]
					: [currentNumber]
				const displayIndex = currentPath.join('.')

				return (
					<li key={item.header + index} className="mb-6 md:mb-12">
						{!!item.header.length && (
							<div className="mb-4 md:mb-8">
								<h3
									className={clsx([
										'font-bold text-xl md:text-3xl',
										prefixPath ? 'space-x-3' : 'space-x-4'
									])}
								>
									<span>{displayIndex}</span>
									<span>{item.header}</span>
								</h3>
							</div>
						)}

						<ul>
							{item.detail.map((det, detailIndex) => {
								if (det.type === 'paragraph') {
									return (
										<li key={detailIndex} className="mb-2 md:mb-4">
											<p className="text-base md:text-xl">
												<span
													className={clsx(['mr-6', prefixPath && 'md:mr-10'])}
												></span>
												<span>{det.text}</span>
											</p>
										</li>
									)
								} else if (det.type === 'image') {
									return (
										<li key={detailIndex} className="mb-4 md:mb-6">
											<figure>
												{/* <Image ... /> */}
												{det.caption && (
													<figcaption className="text-sm text-gray-600 mt-1">
														{det.caption}
													</figcaption>
												)}
											</figure>
										</li>
									)
								}
								return null
							})}
						</ul>

						{item.children && item.children.length > 0 && (
							<div className="md:ml-6 mt-6 md:mt-12">
								<ContentRenderer
									items={item.children}
									prefixPath={currentPath}
								/>
							</div>
						)}
					</li>
				)
			})}
		</ul>
	)
}
