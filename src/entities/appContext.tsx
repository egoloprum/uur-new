'use client'

import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react'
import { defaultPostData, Post } from './post'
import { defaultSeasonData, Season } from './season'
import { defaultUserData, RoleTypes, User } from './user'

interface AppContextType {
  posts: Post[]
  seasons: Season[]
  users: User[]

  currentSeasonId: string

  getPostById: (id: string) => Post | null
  getSeasonById: (id: string) => Season | null
  getUserById: (id: string) => User | null

  // find the user by id then get posts by contributer id
  getPostsByContributerId: (id: string) => Post[]

  // find posts by season id
  getPostsBySeasonId: (seasonId: string) => Post[]

  // get latest 5 posts
  getPostsByLatest: () => Post[]

  // find users by role type
  getMembersByRole: (type: RoleTypes) => User[]

  // find users by season id
  getMembersBySeasonId: (seasonId: string) => User[]
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [posts] = useState<Post[]>(defaultPostData)
  const [seasons] = useState<Season[]>(defaultSeasonData)
  const [users] = useState<User[]>(defaultUserData)

  const currentSeasonId = '405e4a2d-e198-4fa8-942d-3727d36861e2'

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
      const season = seasons.find(s => s.id === seasonId)
      if (!season) return []

      return users.filter(u => season.memberId.includes(u.id))
    },
    [seasons, users]
  )

  const value = useMemo(
    () => ({
      posts,
      seasons,
      users,
      currentSeasonId,

      getPostById,
      getSeasonById,
      getUserById,
      getPostsByContributerId,
      getPostsBySeasonId,
      getPostsByLatest,
      getMembersByRole,
      getMembersBySeasonId,
    }),
    [
      posts,
      seasons,
      users,
      currentSeasonId,
      getPostById,
      getSeasonById,
      getUserById,
      getPostsByContributerId,
      getPostsBySeasonId,
      getPostsByLatest,
      getMembersByRole,
      getMembersBySeasonId,
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
