import { NextApiRequest, NextApiResponse } from "next";
import sgMail, { MailDataRequired } from "@sendgrid/mail";

type RequestBody = {
  name: string;
  preferredMethod: string;
  methodInfo: string;
  message: string;
};

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const data: RequestBody = req.body;
      const { name, preferredMethod, methodInfo, message } = data;

      const emailConfig: MailDataRequired = {
        to: process.env.SENDGRID_TO_EMAIL,
        from: process.env.SENDGRID_FROM_EMAIL,
        subject: "Aesthetics in Jewelry: New Message",
        text: "This goes away!",
        templateId: process.env.SENDGRID_TEMPLATE_ID,
        dynamicTemplateData: {
          name,
          preferredMethod,
          methodInfo,
          message,
        },
      };

      await sgMail.send(emailConfig);

      res.status(200).json({ message: "OK" });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  } else {
    res.status(405).json({ message: "Only POST request allowed." });
  }
}
