import { NextApiRequest, NextApiResponse } from "next";

type RequestBody = {
  name: string;
  preferredMethod: string;
  methodInfo: string;
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const data: RequestBody = req.body;
    res.status(200).json({ message: "OK" });
  } else {
    res.status(405).json({ message: "Only POST request allowed." });
  }
}
