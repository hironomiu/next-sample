export default (req, res) => {
  res.status(200).json([
    { id: 0, name: "John" },
    { id: 1, name: "bob" },
    { id: 2, name: "太郎" },
    { id: 3, name: "花子" },
    { id: 4, name: "mike" },
    { id: 5, name: "sandy" },
    { id: 6, name: "かつお" },
    { id: 7, name: "Alex" },
    { id: 8, name: "Zack" },
    { id: 9, name: "いくら" },
  ])
}
