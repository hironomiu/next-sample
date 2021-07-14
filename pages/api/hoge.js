export default (req, res) => {
  console.log(req.url)
  const time = Math.floor(Math.random() * Math.random() * 1000 * 6)
  setTimeout(() => {
    console.log("time:", time, req.url)
    res.status(200).json([
      { id: 1, name: "hoge" },
      { id: 2, name: "fuga" },
      { id: 3, name: "piyo" },
      { id: 4, name: "jojo" },
      { id: 5, name: "acho" },
      { id: 6, name: "baby" },
    ])
  }, time)

  // res.status(200).json([
  //   { id: 1, name: "hoge" },
  //   { id: 2, name: "fuga" },
  //   { id: 3, name: "piyo" },
  //   { id: 4, name: "jojo" },
  //   { id: 5, name: "acho" },
  //   { id: 6, name: "baby" },
  // ])
}
