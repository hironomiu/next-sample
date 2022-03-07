// TODO eslint
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ query: { id } }, res) => {
  if (isNaN(id)) {
    console.log('hoge')
    res.status(400).json({ message: 'idには数値を指定してください' })
  } else {
    const user = [
      { id: 0, name: 'John' },
      { id: 1, name: 'bob' },
      { id: 2, name: '太郎' },
      { id: 3, name: '花子' },
      { id: 4, name: 'mike' },
      { id: 5, name: 'sandy' },
      { id: 6, name: 'かつお' },
      { id: 7, name: 'Alex' },
      { id: 8, name: 'Zack' },
      { id: 9, name: 'いくら' },
    ].find((user) => user.id === parseInt(id))
    if (user) res.status(200).json({ id: id, name: user.name })
    else res.status(400).json({ message: 'not found' })
  }
}
