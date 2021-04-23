export interface ContactFormMessage {
  name: string | null;
  method: "Phone" | "Email" | null;
  methodData: string | null;
  message: string | null;
}
