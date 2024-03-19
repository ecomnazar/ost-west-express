import axios from "axios";

export const sendToTelegram = async (message: string) => {
  const TOKEN = import.meta.env.VITE_TOKEN;
  const CHAT_ID = import.meta.env.VITE_CHAT_ID;
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  await axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  });
};
