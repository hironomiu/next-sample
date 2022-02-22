import Layout from '../components/Layout'

const Home = (props) => {
  const lines = Object.values(props)
  return (
    <Layout>
      <h1 className="text-2xl">Home</h1>
    </Layout>
  )
}

export default Home
