import Layout from '../components/Layout'
import { GetStaticProps } from 'next'

type POST = {
  userId: number
  id: number
  title: string
  body: string
}

interface STATICPROPS {
  posts: POST[]
}

const Users: React.FC<STATICPROPS> = (props) => {
  return (
    <Layout>
      <h1 className="text-2xl pb-10">Users</h1>
      {props.posts.map((line: POST, index) => (
        <p key={line.id}>
          userId:{line.userId},id:{line.id},title:{line.title}
        </p>
      ))}
    </Layout>
  )
}

// TODO Build時に自身のAPIは叩けないのでエラーとなってる可能性がある
// ↑一旦jsonplaceholderからデータを取得に変更

export const getStaticProps: GetStaticProps = async () => {
  // const url = process.env.VERCEL_URL
  //   ? 'https://' + process.env.VERCEL_URL
  //   : // : 'http://localhost:3003'
  //     'https://jsonplaceholder.typicode.com/users?_limit=10'
  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
  const response = await fetch(new URL(url).toString())
  const posts = await response.json()
  console.log(posts)
  return {
    props: { posts },
  }
}

export default Users
