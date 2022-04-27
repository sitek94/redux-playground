import React from 'react'
import { User } from '../users/users.types'
import { useAppSelector } from '../../app/hooks'

interface PostAuthorProps {
  userId?: User['id']
}

export const PostAuthor = ({ userId }: PostAuthorProps) => {
  const author = useAppSelector(state =>
    state.users.find(user => user.id === userId),
  )

  return (
    <span style={{ fontSize: '0.95em' }}>
      by {author ? author.name : 'Unknown author'}
    </span>
  )
}
