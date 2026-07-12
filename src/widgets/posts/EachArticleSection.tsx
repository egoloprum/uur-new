'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { useApp } from '@/src/entities'
import {
	ContentItem,
	WordDefinitionItem,
	SourceItem
} from '@/src/entities/article'
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
		<article className="flex justify-center pb-20 p-4 md:p-8 lg:p-12 xl:p-16 py-16 font-roboto-serif-local">
			<section className="md:w-[80%] xl:w-[60%]">
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

				{!!article.sources.length &&
					article.sources.map(source => (
						<SourcesRenderer
							key={source.type}
							items={source.sourceItem}
							title={source.type}
							articleId={article.id}
						/>
					))}
			</section>
		</article>
	)
}

const DefinitionsRenderer = ({
	items,
	title
}: {
	items: WordDefinitionItem[]
	title: string
}) => {
	return (
		<div className="">
			<h2 className="text-xl/8 md:text-2xl/12 font-semibold my-4 text-justify">
				{title}
			</h2>
			<ul>
				{items.map((item, index) => (
					<li key={'word-items-' + index} className="">
						<p className="text-base/8 md:text-xl/10 text-justify">
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
		<div className="">
			<h2 className="text-xl/8 md:text-2xl/12 font-semibold my-4 text-justify">
				{title}
			</h2>
			<ul>
				{items.map((item, index) => (
					<li key={title + index} className="">
						<p className="space-x-4 text-base/8 md:text-xl/10 text-justify">
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
		<div className="">
			<h2 className="text-xl/8 md:text-2xl/12 font-semibold my-4 text-justify">
				{title}
			</h2>
			<ul>
				{items.map((item, index) => (
					<li
						key={title + index}
						className="text-base/8 md:text-xl/8 text-justify space-y-2"
					>
						<p className="">[{++index}]</p>
						{!!item.definition && <p className="ml-6">{item.definition}</p>}
						{!!item.href && (
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
						)}
					</li>
				))}
			</ul>
		</div>
	)
}

const ContentRenderer: React.FC<{
	items: ContentItem[]
	prefixPath?: number[]
}> = ({ items, prefixPath }) => {
	return (
		<ul>
			{items.map((item, index) => {
				const currentNumber = items
					.slice(0, index + 1)
					.filter(i => i.header && i.header.length !== 0).length

				const currentPath = prefixPath
					? [...prefixPath, currentNumber]
					: [currentNumber]
				const displayIndex = currentPath.join('.')

				return (
					<li key={item.header + index} className="">
						{!!item.header.length && (
							<div className="my-4">
								<h3
									className={clsx([
										'text-xl/8 md:text-2xl/12 font-semibold my-4 text-justify',
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
										<li key={detailIndex} className="">
											<p className="text-base/8 md:text-xl/10 text-justify">
												<span
													className={clsx(['mr-6', prefixPath && 'md:mr-10'])}
												></span>
												<span>{det.text}</span>
											</p>
										</li>
									)
								} else if (det.type === 'image') {
									return (
										<li key={detailIndex} className="my-4">
											<figure>
												<div
													className={`w-full sm:flex gap-2 md:gap-4 [column-fill:balance] ${
														det.url.length === 1
															? 'max-w-2xl mx-auto columns-1'
															: det.url.length === 2
																? 'columns-1 sm:columns-2'
																: det.url.length >= 3 &&
																	'columns-1 sm:columns-3'
													}`}
												>
													{det.url.map(image => (
														<div
															key={image}
															className="break-inside-avoid w-full inline-block"
														>
															<Image
																src={image}
																alt={det.alt}
																width={600}
																height={800}
																sizes={
																	det.url.length === 1
																		? '(max-width: 768px) 100vw, 672px'
																		: det.url.length === 2
																			? '(max-width: 768px) 100vw, 50vw'
																			: '(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
																}
																className="w-full h-auto object-contain rounded-lg"
																priority={det.url.length === 1}
															/>
														</div>
													))}
												</div>

												{det.caption && (
													<figcaption className="text-sm/6 md:text-lg/10 text-center text-gray-800 dark:text-gray-300 mt-1">
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
							<div className="md:ml-6 my-4">
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
