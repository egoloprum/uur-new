import { createContext, ReactNode, useContext, useMemo, useState } from 'react'
import { defaultPostData, Post } from './post'
import { defaultSeasonData, Season } from './season'
import { defaultUserData, RoleTypes, User } from './user'

interface UurContextType {
  posts: Post[]
  seasons: Season[]
  users: User[]

  getPostById: (id: string) => Post | undefined
  getSeasonById: (id: string) => Season | undefined
  getUserById: (id: string) => User | undefined

  // find the user by id then get posts by contributer id
  getPostsByContributerId: (id: string) => Post[] | undefined

  // find posts by season id
  getPostsBySeasonId: (seasonId: string) => Post[] | undefined

  // find users by role type
  getMembersByRole: (type: RoleTypes) => User[] | undefined

  // find users by season id
  getMembersBySeasonId: (seasonId: string) => User[] | undefined
}

const UurContext = createContext<UurContextType | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>(defaultPostData)
  const [seasons, setSeasons] = useState<Season[]>(defaultSeasonData)
  const [users, setUsers] = useState<User[]>(defaultUserData)

  const currentSeasonId = '405e4a2d-e198-4fa8-942d-3727d36861e2'

  const getPostById = (id: string) => posts.find(p => p.id === id)

  const getSeasonById = (id: string) => seasons.find(s => s.id === id)

  const getUserById = (id: string) => users.find(u => u.id === id)

  const getPostsByContributerId = (userId: string) => {
    const user = users.find(u => u.id === userId)
    if (!user) return []

    return posts.filter(p => user.contributerOfPostId.includes(p.id))
  }

  const getPostsBySeasonId = (seasonId: string) => {
    const season = seasons.find(s => s.id === seasonId)
    if (!season) return []

    return posts.filter(p => season.postId.includes(p.id))
  }

  const getMembersByRole = (type: RoleTypes, seasonId?: string) => {
    return users.filter(user =>
      user.role.some(role => role.type === type && (!seasonId || role.seasonId.includes(seasonId)))
    )
  }

  const getMembersBySeasonId = (seasonId: string) => {
    const season = seasons.find(s => s.id === seasonId)
    if (!season) return []

    return users.filter(u => season.memberId.includes(u.id))
  }

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
      getMembersByRole,
      getMembersBySeasonId,
    }),
    [posts, seasons, users]
  )

  return <UurContext.Provider value={value}>{children}</UurContext.Provider>
}

export const useApp = () => {
  const context = useContext(UurContext)
  if (!context) {
    throw new Error('useApp must be used inside AppProvider')
  }
  return context
}
