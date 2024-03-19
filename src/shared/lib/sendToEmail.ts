import emailjs from "@emailjs/browser";
import { AxiosError } from "axios";

interface Props {
  subject: string;
  message: string;
  to_email: string;
}

export const sendToEmail = async (data: Props) => {
  emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
  await emailjs
    .send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        to_email: data.to_email,
        subject: data.subject,
        message: data.message,
      }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((error: AxiosError) => {
      console.log(error);
    });
};
