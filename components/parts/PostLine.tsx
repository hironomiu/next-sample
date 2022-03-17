import React from 'react'

const PostLine = ({ post }) => {
  return (
    <div>
      <p key={post.id}>
        {'userId: '}
        {post.userId}
        {' ,id: '}
        {post.id}
        {' ,title: '}
        {post.title}
      </p>
    </div>
  )
}

export default PostLine
