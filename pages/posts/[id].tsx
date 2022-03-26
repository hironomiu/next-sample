import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/Layout'

const Posts = () => {
  const router = useRouter()

  return (
    <>
      <Layout>
        <h1>Post Data</h1>
        users id: {router.query.id}
        <Link href="/posts">
          <p className="hover:cursor-pointer">back</p>
        </Link>
      </Layout>
    </>
  )
}

export default Posts
