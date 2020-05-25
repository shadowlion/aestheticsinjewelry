import * as functions from 'firebase-functions';

import { sendEmail } from "./sendgrid";

const CONTACT_FORM_TEMPLATE_ID: string = functions.config().sendgrid.template.contact;

export const contactForm = functions.https.onCall(async (data, context) => {
  await sendEmail(CONTACT_FORM_TEMPLATE_ID, "chiou.kai@gmail.com", data);
});
