import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ phrase: 'hello world' })
}