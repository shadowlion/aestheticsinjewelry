import * as functions from "firebase-functions";
import * as sgMail from "@sendgrid/mail";

const API_KEY = functions.config().sendgrid.api_key;

sgMail.setApiKey(API_KEY);

export async function sendEmail(
  templateId: string,
  to: string,
  extras?: object
) {
  try {
    const payload: any = {
      to,
      from: "chiou.kai@gmail.com",
      templateId,
      dynamic_template_data: extras || {}
    };

    await sgMail.send(payload);
  } catch (error) {
    console.log(error.response.body);
  }
}
