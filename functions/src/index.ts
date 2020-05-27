import * as functions from 'firebase-functions';

import { sendEmail } from "./sendgrid";

const CONTACT_FORM_TEMPLATE_ID: string = functions.config().sendgrid.template.contact;

export const contactForm = functions.firestore.document("messages/{id}").onCreate(
  async (data, context) => {
    try {
      const values = data.data();
      await sendEmail(CONTACT_FORM_TEMPLATE_ID, "chiou.kai@gmail.com", values);
    } catch (error) {
      console.error(error);
    }
  }
);
