import Layout from "../components/Layout"
import { useEffect, useState } from "react"
import { resolveHref } from "next/dist/next-server/lib/router/router"

export default function Home() {
  const [datas, setData] = useState([])
  const func = async () => {
    const response = await fetch("/api/hoge")
    const posts = await response.json()
    return posts
  }

  useEffect(() => {
    func().then((data) => {
      console.log(data)
      data.map((a) => setData((datas) => [...datas, a]))
    })
  }, [])

  return (
    <Layout>
      {datas.map((a, i) => (
        <p key={i}>
          id:{a.id},name:{a.name}
        </p>
      ))}
    </Layout>
  )
}
