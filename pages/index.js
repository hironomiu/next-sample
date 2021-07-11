import Layout from "../components/Layout"

const Home = (props) => {
  const lines = Object.values(props)
  return (
    <Layout>
      {lines.map((line, index) => (
        <p key={index}>
          id:{line.id},name:{line.name}
        </p>
      ))}
    </Layout>
  )
}

Home.getInitialProps = async ({ req }) => {
  const url = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3003/"
  const response = await fetch(url + "api/hoge")
  const posts = await response.json()
  return posts
}

export default Home
