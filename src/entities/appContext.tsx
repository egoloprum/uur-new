'use client'

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'

import { Article, defaultArticleData } from './article'
import { defaultPostData, Post } from './post'
import { defaultSeasonData, Season } from './season'
import { defaultTopicData, Topic } from './topic'
import { defaultUserData, User } from './user'

const CURRENT_SEASON_ID = process.env.NEXT_PUBLIC_CURRENT_SEASON_ID!
const PREVIOUS_SEASON_ID = process.env.NEXT_PUBLIC_PREVIOUS_SEASON_ID!

interface AppContextType {
  posts: Post[]
  seasons: Season[]
  users: User[]
  topics: Topic[]
  articles: Article[]

  selectedSeasonId: string
  setSelectedSeasonId: Dispatch<SetStateAction<string>>

  selectedTopicId: string
  setSelectedTopicId: Dispatch<SetStateAction<string>>

  selectedRole: string
  setSelectedRole: Dispatch<SetStateAction<string>>

  selectedSortingMethodofPosts: string
  setSelectedSortingMethodofPosts: Dispatch<SetStateAction<string>>

  selectedSortingMethodofMembers: string
  setSelectedSortingMethodofMembers: Dispatch<SetStateAction<string>>

  currentSeasonId: string
  previousSeasonId: string

  getPostById: (id: string) => Post | null
  getSeasonById: (id: string) => Season | null
  getUserById: (id: string) => User | null
  getTopicById: (id: string) => Topic | null
  getArticleById: (id: string) => Article | null

  getPostsByContributerId: (id: string) => Post[]
  getPostsBySeasonId: (seasonId: string) => Post[]
  getPostsByLatest: () => Post[]
  getPostsByTopicId: (topicId: string) => Post[]
  getPostBySlug: (slug: string) => Post | null

  getMembersByRole: (type: string) => User[]
  getMembersBySeasonId: (seasonId: string) => User[]
  getMemberBySlug: (slug: string) => User | null

  getSeasonsBySelectedSeasonId: () => Season[]
  getTopicsBySelectedTopicId: () => Topic[]
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [posts] = useState<Post[]>(defaultPostData)
  const [users] = useState<User[]>(defaultUserData)
  const [seasons] = useState<Season[]>(() =>
    defaultSeasonData.filter(s => s.isActive === true).reverse()
  )
  const [topics] = useState<Topic[]>(defaultTopicData)
  const [articles] = useState<Article[]>(defaultArticleData)

  const [selectedSeasonId, setSelectedSeasonId] = useState<string>('')
  const [selectedTopicId, setSelectedTopicId] = useState<string>('')
  const [selectedRole, setSelectedRole] = useState<string>('')

  const [selectedSortingMethodofPosts, setSelectedSortingMethodofPosts] =
    useState<string>('')
  const [selectedSortingMethodofMembers, setSelectedSortingMethodofMembers] =
    useState<string>('')

  const currentSeasonId = CURRENT_SEASON_ID
  const previousSeasonId = PREVIOUS_SEASON_ID

  const getPostById = useCallback(
    (id: string) => posts.find(p => p.id === id) || null,
    [posts]
  )

  const getSeasonById = useCallback(
    (id: string) => seasons.find(s => s.id === id) || null,
    [seasons]
  )

  const getUserById = useCallback(
    (id: string) => users.find(u => u.id === id) || null,
    [users]
  )

  const getTopicById = useCallback(
    (id: string) => topics.find(t => t.id === id) || null,
    [topics]
  )

  const getArticleById = useCallback(
    (id: string) => articles.find(a => a.id === id) || null,
    [articles]
  )

  const getPostsByContributerId = useCallback(
    (userId: string) => {
      const user = users.find(u => u.id === userId)
      if (!user) return []
      return posts.filter(p => user.contributerOfPostId.includes(p.id))
    },
    [users, posts]
  )

  const getPostsBySeasonId = useCallback(
    (seasonId: string) => {
      const season = seasons.find(s => s.id === seasonId)
      if (!season) return []

      return posts.filter(p => season.postId.includes(p.id))
    },
    [seasons, posts]
  )

  const getPostsByLatest = useCallback(() => {
    const LATEST_COUNT = 5
    return [...posts]
      .sort((a, b) => b.releaseDate.localeCompare(a.releaseDate))
      .slice(0, LATEST_COUNT)
  }, [posts])

  const getPostsByTopicId = useCallback(
    (topicId: string) => {
      if (topicId === '') return posts
      const topic = topics.find(s => s.id === topicId)
      if (!topic) return []

      return posts.filter(p => topic.postId.includes(p.id))
    },
    [topics, posts]
  )

  const getPostBySlug = useCallback(
    (slug: string) => {
      if (slug === '') return null

      const post = posts.find(p => p.slug === slug)
      if (!post) return null

      return post
    },
    [posts]
  )

  const getMembersByRole = useCallback(
    (type: string) => {
      return users.filter(user => user.role.some(role => role.type === type))
    },
    [users]
  )

  const getMembersBySeasonId = useCallback(
    (seasonId: string) => {
      if (seasonId === '') return users

      const season = seasons.find(s => s.id === seasonId)
      if (!season) return []

      return users.filter(u => season.memberId.includes(u.id))
    },
    [seasons, users]
  )

  const getMemberBySlug = useCallback(
    (slug: string) => {
      if (slug === '') return null

      const user = users.find(u => u.slug === slug)
      if (!user) return null

      return user
    },
    [users]
  )

  const getSeasonsBySelectedSeasonId = useCallback(() => {
    if (selectedSeasonId === '') return seasons

    return seasons.filter(s => s.id === selectedSeasonId)
  }, [seasons, selectedSeasonId])

  const getTopicsBySelectedTopicId = useCallback(() => {
    if (selectedTopicId === '') return topics

    return topics.filter(s => s.id === selectedTopicId)
  }, [topics, selectedTopicId])

  const value = useMemo(
    () => ({
      posts,
      seasons,
      users,
      topics,
      articles,

      selectedSeasonId,
      setSelectedSeasonId,
      selectedTopicId,
      setSelectedTopicId,
      selectedRole,
      setSelectedRole,

      selectedSortingMethodofPosts,
      setSelectedSortingMethodofPosts,
      selectedSortingMethodofMembers,
      setSelectedSortingMethodofMembers,

      currentSeasonId,
      previousSeasonId,

      getPostById,
      getSeasonById,
      getUserById,
      getTopicById,
      getArticleById,

      getPostsByContributerId,
      getPostsBySeasonId,
      getPostsByLatest,
      getPostsByTopicId,
      getPostBySlug,

      getMembersByRole,
      getMembersBySeasonId,
      getMemberBySlug,

      getSeasonsBySelectedSeasonId,
      getTopicsBySelectedTopicId
    }),
    [
      posts,
      seasons,
      users,
      topics,
      articles,

      selectedSeasonId,
      setSelectedSeasonId,
      selectedTopicId,
      setSelectedTopicId,
      selectedRole,
      setSelectedRole,

      selectedSortingMethodofPosts,
      setSelectedSortingMethodofPosts,
      selectedSortingMethodofMembers,
      setSelectedSortingMethodofMembers,

      currentSeasonId,
      previousSeasonId,

      getPostById,
      getSeasonById,
      getUserById,
      getTopicById,
      getArticleById,

      getPostsByContributerId,
      getPostsBySeasonId,
      getPostsByLatest,
      getPostsByTopicId,
      getPostBySlug,

      getMembersByRole,
      getMembersBySeasonId,
      getMemberBySlug,

      getSeasonsBySelectedSeasonId,
      getTopicsBySelectedTopicId
    ]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used inside AppProvider')
  }
  return context
}
