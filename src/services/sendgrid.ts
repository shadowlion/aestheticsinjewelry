import * as sgMail from "@sendgrid/mail";

const API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(API_KEY);

export type RequestBody = {
  name: string;
  preferredMethod: string;
  methodInfo: string;
  message: string;
};

export type MailComposition = {
  to: string;
  from: string;
  templateId: string;
  dynamicTemplateData: RequestBody;
};

export async function sendEmail(
  templateId: string,
  extras: RequestBody
): Promise<[void, Error]> {
  try {
    const dto: MailComposition = {
      to: process.env.SENDGRID_TO_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
      templateId,
      dynamicTemplateData: extras,
    };
    await sgMail.send(dto);
    return;
  } catch (error) {
    return [null, error];
  }
}
