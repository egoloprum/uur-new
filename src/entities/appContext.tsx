'use client'

import { createContext, useContext, useMemo, useState, ReactNode } from 'react'

import { defaultArticleData, Article } from './article'
import { defaultMemberData, Member } from './member'
import { defaultPostData, Post } from './post'
import { defaultSeasonData, Season } from './season'
import { defaultTopicData, Topic } from './topic'

const CURRENT_SEASON_ID = process.env.NEXT_PUBLIC_CURRENT_SEASON_ID!
const PREVIOUS_SEASON_ID = process.env.NEXT_PUBLIC_PREVIOUS_SEASON_ID!

type Filters = {
	seasonId: string
	topicId: string
	role: string
	postSort: string
	memberSort: string
}

const defaultFilters: Filters = {
	seasonId: '',
	topicId: '',
	role: '',
	postSort: '',
	memberSort: ''
}

function indexById<T extends { id: string }>(items: T[]) {
	return Object.fromEntries(items.map(i => [i.id, i]))
}

function indexBySlug<T extends { slug: string }>(items: T[]) {
	return Object.fromEntries(items.map(i => [i.slug, i]))
}

interface AppContextType {
	posts: Post[]
	seasons: Season[]
	members: Member[]
	topics: Topic[]
	articles: Article[]

	filters: Filters
	setFilters: React.Dispatch<React.SetStateAction<Filters>>

	currentSeasonId: string
	previousSeasonId: string

	getPostById(id: string): Post | null
	getPostBySlug(slug: string): Post | null
	getMemberById(id: string): Member | null
	getMemberBySlug(slug: string): Member | null
	getSeasonById(id: string): Season | null
	getTopicById(id: string): Topic | null
	getArticleById(id: string): Article | null

	getPostsBySeasonId(seasonId: string): Post[]
	getPostsByTopicId(topicId: string): Post[]
	getPostsByContributorId(memberId: string): Post[]

	getMembersBySeasonId(seasonId: string): Member[]
	getMembersByRole(role: string): Member[]
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
	const posts = defaultPostData
	const members = defaultMemberData
	const seasons = defaultSeasonData.filter(s => s.isActive).reverse()
	const topics = defaultTopicData
	const articles = defaultArticleData

	const [filters, setFilters] = useState(defaultFilters)

	const postsById = useMemo(() => indexById(posts), [posts])
	const postsBySlug = useMemo(() => indexBySlug(posts), [posts])

	const membersById = useMemo(() => indexById(members), [members])
	const membersBySlug = useMemo(() => indexBySlug(members), [members])

	const seasonsById = useMemo(() => indexById(seasons), [seasons])
	const topicsById = useMemo(() => indexById(topics), [topics])
	const articlesById = useMemo(() => indexById(articles), [articles])

	const value = useMemo<AppContextType>(
		() => ({
			posts,
			seasons,
			members,
			topics,
			articles,

			filters,
			setFilters,

			currentSeasonId: CURRENT_SEASON_ID,
			previousSeasonId: PREVIOUS_SEASON_ID,

			getPostById: id => postsById[id] ?? null,
			getPostBySlug: slug => postsBySlug[slug] ?? null,

			getMemberById: id => membersById[id] ?? null,
			getMemberBySlug: slug => membersBySlug[slug] ?? null,

			getSeasonById: id => seasonsById[id] ?? null,
			getTopicById: id => topicsById[id] ?? null,
			getArticleById: id => articlesById[id] ?? null,

			getPostsBySeasonId: seasonId => {
				const season = seasonsById[seasonId]
				if (!season) return []
				return season.postId.map(id => postsById[id]).filter(Boolean)
			},

			getPostsByTopicId: topicId => {
				if (!topicId) return posts
				const topic = topicsById[topicId]
				if (!topic) return []
				return topic.postId.map(id => postsById[id]).filter(Boolean)
			},

			getPostsByContributorId: memberId => {
				const member = membersById[memberId]
				if (!member) return []
				return member.contributerOfPostId
					.map(id => postsById[id])
					.filter(Boolean)
			},

			getMembersBySeasonId: seasonId => {
				if (!seasonId) return members
				const season = seasonsById[seasonId]
				if (!season) return []
				return season.memberId.map(id => membersById[id]).filter(Boolean)
			},

			getMembersByRole: role =>
				members.filter(u => u.role.some(r => r.type === role))
		}),
		[
			posts,
			members,
			seasons,
			topics,
			articles,
			filters,
			postsById,
			postsBySlug,
			membersById,
			membersBySlug,
			seasonsById,
			topicsById,
			articlesById
		]
	)

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
	const ctx = useContext(AppContext)
	if (!ctx) throw new Error('useApp must be used inside AppProvider')
	return ctx
}
