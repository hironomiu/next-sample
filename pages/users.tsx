import Layout from '../components/Layout'
import { GetStaticProps } from 'next'

type POST = {
  id: number
  name: string
}

interface STATICPROPS {
  posts: POST[]
}

const Users: React.FC<STATICPROPS> = (props) => {
  return (
    <Layout>
      {/* <h1 className="text-2xl pb-10">Users</h1>
      {props.posts.map((line: POST, index) => (
        <p key={index}>
          id:{line.id},name:{line.name}
        </p>
      ))} */}
      User
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const url = process.env.VERCEL_URL
    ? 'https://' + process.env.VERCEL_URL
    : 'http://localhost:3003'
  const response = await fetch(new URL(url + '/api/users').toString())
  const posts = await response.json()
  return {
    props: { posts },
  }
}

export default Users
