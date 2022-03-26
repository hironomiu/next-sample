import React from 'react'
import Link from 'next/link'

const PostLine = ({ post }) => {
  return (
    <div>
      <Link href={`/posts/${post.id}`}>
        <p
          key={post.id}
          className="hover:cursor-pointer"
          data-testid={`posts-${post.id}`}
        >
          {'userId: '}
          {post.userId}
          {' ,id: '}
          {post.id}
          {' ,title: '}
          {post.title}
        </p>
      </Link>
    </div>
  )
}

export default PostLine
