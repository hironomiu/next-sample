import React from 'react'

const PostLine = ({ line }) => {
  return (
    <div>
      <p key={line.id}>
        {'userId: '}
        {line.userId}
        {' ,id: '}
        {line.id}
        {' ,title: '}
        {line.title}
      </p>
    </div>
  )
}

export default PostLine
