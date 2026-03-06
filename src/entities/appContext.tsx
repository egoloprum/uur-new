'use client'

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { defaultPostData, Post } from './post'
import { defaultSeasonData, Season } from './season'
import { defaultUserData, RoleTypes, User } from './user'
import { defaultTopicData, Topic } from './topic'

const CURRENT_SEASON_ID = '405e4a2d-e198-4fa8-942d-3727d36861e2'

interface AppContextType {
  posts: Post[]
  seasons: Season[]
  users: User[]
  topics: Topic[]

  selectedSeasonId: string
  setSelectedSeasonId: Dispatch<SetStateAction<string>>

  selectedTopicId: string
  setSelectedTopicId: Dispatch<SetStateAction<string>>

  currentSeasonId: string

  getPostById: (id: string) => Post | null
  getSeasonById: (id: string) => Season | null
  getUserById: (id: string) => User | null

  getPostsByContributerId: (id: string) => Post[]
  getPostsBySeasonId: (seasonId: string) => Post[]
  getPostsByLatest: () => Post[]
  getPostsByTopicId: (topicId: string) => Post[]

  getMembersByRole: (type: RoleTypes) => User[]
  getMembersBySeasonId: (seasonId: string) => User[]

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

  const [selectedSeasonId, setSelectedSeasonId] = useState<string>('')
  const [selectedTopicId, setSelectedTopicId] = useState<string>('')

  const currentSeasonId = CURRENT_SEASON_ID

  const getPostById = useCallback((id: string) => posts.find(p => p.id === id) || null, [posts])

  const getSeasonById = useCallback(
    (id: string) => seasons.find(s => s.id === id) || null,
    [seasons]
  )

  const getUserById = useCallback((id: string) => users.find(u => u.id === id) || null, [users])

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
      const topic = topics.find(s => s.id === topicId)
      if (!topic) return []

      return posts.filter(p => topic.postId.includes(p.id))
    },
    [topics, posts]
  )

  const getMembersByRole = useCallback(
    (type: RoleTypes, seasonId?: string) => {
      return users.filter(user =>
        user.role.some(
          role => role.type === type && (!seasonId || role.seasonId.includes(seasonId))
        )
      )
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

      selectedSeasonId,
      setSelectedSeasonId,
      selectedTopicId,
      setSelectedTopicId,

      currentSeasonId,

      getPostById,
      getSeasonById,
      getUserById,
      getPostsByContributerId,
      getPostsBySeasonId,
      getPostsByLatest,
      getPostsByTopicId,
      getMembersByRole,
      getMembersBySeasonId,
      getSeasonsBySelectedSeasonId,
      getTopicsBySelectedTopicId,
    }),
    [
      posts,
      seasons,
      users,
      topics,

      selectedSeasonId,
      setSelectedSeasonId,
      selectedTopicId,
      setSelectedTopicId,

      currentSeasonId,

      getPostById,
      getSeasonById,
      getUserById,
      getPostsByContributerId,
      getPostsBySeasonId,
      getPostsByLatest,
      getPostsByTopicId,
      getMembersByRole,
      getMembersBySeasonId,
      getSeasonsBySelectedSeasonId,
      getTopicsBySelectedTopicId,
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
