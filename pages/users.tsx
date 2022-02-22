import Layout from '../components/Layout'
const Users = (props) => {
  const lines = Object.values(props)
  return (
    <Layout>
      <h1 className="text-2xl pb-10">Users</h1>
      {/* TODO 型 */}
      {lines.map((line: any, index) => (
        <p key={index}>
          id:{line.id},name:{line.name}
        </p>
      ))}
    </Layout>
  )
}

Users.getInitialProps = async ({ req }) => {
  const url = process.env.VERCEL_URL
    ? 'https://' + process.env.VERCEL_URL
    : 'http://localhost:3003'
  console.log(url)
  const response = await fetch(url + '/api/users')
  const posts = await response.json()
  return posts
}

export default Users
