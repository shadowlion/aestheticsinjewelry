import { config } from "firebase-functions";
import * as twilio from "twilio";
import { ContactFormMessage } from "./types";

const accountSid: string = config().twilio.account_sid;
const authToken: string = config().twilio.auth_token;
const toNumber: string = config().twilio.to_number;
const fromNumber: string = config().twilio.from_number;

const client = twilio(accountSid, authToken);

export async function sendSMS(payload: ContactFormMessage) {
  await client.messages.create({
    to: toNumber,
    from: fromNumber,
    body: `[AJ Contact Form] "${payload.message}" - please contact ${payload.name} via ${payload.method} at <${payload.methodData}>`
  });
}
