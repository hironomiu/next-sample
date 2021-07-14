export default ({ query: { id } }, res) => {
  if (isNaN(id)) {
    res.status(400).json({ message: "idには数値を指定してください" })
  } else {
    res.status(200).json({ id: id, name: "bob" })
  }
}
