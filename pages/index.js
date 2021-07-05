import Layout from "../components/Layout"
import { useEffect, useState } from "react"
import { resolveHref } from "next/dist/next-server/lib/router/router"

export default function Home() {
  const [name, setName] = useState("hello")
  const func = async () => {
    const rest = await fetch("/api/hoge")
    const posts = await rest.json()
    return posts.name
  }

  useEffect(() => {
    func().then((data) => {
      console.log(data)
      setName(data)
    })
  }, [])

  return (
    <Layout>
      <p>{name}</p>
    </Layout>
  )
}
