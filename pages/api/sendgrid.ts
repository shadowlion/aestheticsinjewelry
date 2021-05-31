import { NextApiRequest, NextApiResponse } from "next";
import { RequestBody, sendEmail } from "../../services/sendgrid";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const templateId = process.env.SENDGRID_TEMPLATE_ID;
      const data: RequestBody = req.body;
      const { name, preferredMethod, methodInfo, message } = data;

      const requestPayload: RequestBody = {
        name,
        preferredMethod,
        methodInfo,
        message,
      };

      await sendEmail(templateId, requestPayload);

      res.status(200).json({ message: "OK" });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  } else {
    res.status(405).json({ message: "Only POST request allowed." });
  }
}
