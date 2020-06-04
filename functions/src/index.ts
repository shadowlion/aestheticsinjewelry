import { firestore } from 'firebase-functions';
import { ContactFormMessage } from './types';
import { sendSMS } from './twilio';

export const contactForm = firestore.document("messages/{id}").onCreate(
  async (data, context) => {
    try {
      await sendSMS(data.data() as ContactFormMessage);
    } catch (error) {
      console.error(error);
    }
  }
);
