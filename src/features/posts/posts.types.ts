import { User } from '../users/users.types'

export type Post = {
  id: string
  title: string
  content: string
  userId?: User['id']
}
