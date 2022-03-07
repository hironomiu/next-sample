// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// eslint-disable-next-line import/no-anonymous-default-export
export default (
  _req: any,
  res: {
    status: (arg0: number) => {
      (): any
      new (): any
      json: { (arg0: { name: string }): void; new (): any }
    }
  }
) => {
  res.status(200).json({ name: 'hello next-sample' })
}
