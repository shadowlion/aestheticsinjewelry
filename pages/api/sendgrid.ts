import { NextApiRequest, NextApiResponse } from "next";
import { RequestBody, sendEmail } from "../../services/sendgrid";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const templateId = process.env.SENDGRID_TEMPLATE_ID;
    const payload: RequestBody = JSON.parse(req.body);
    const [, error] = await sendEmail(templateId, payload);
    if (error) {
      return res.status(400).json({ message: error });
    }
    return res.status(200).json({ message: "OK" });
  } else {
    return res.status(405).json({ message: "Only POST request allowed." });
  }
}
