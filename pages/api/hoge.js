export default (req, res) => {
  res.status(200).json([
    { id: 1, name: "hoge" },
    { id: 2, name: "fuga" },
    { id: 3, name: "piyo" },
    { id: 4, name: "jojo" },
    { id: 5, name: "acho" },
    { id: 6, name: "baby" },
  ])
}
