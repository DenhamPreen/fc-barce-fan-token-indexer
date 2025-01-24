import axios from "axios";
import { CHANNEL_ID, MESSAGE_THREAD_ID, BOT_TOKEN } from "../constants";

export const sendMessageToTelegram = async (message: string): Promise<void> => {
  try {
    const apiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    await axios.post(apiUrl, {
      chat_id: CHANNEL_ID,
      // only needed if you want to send a message to a specific thread in a tg group
      // message_thread_id: MESSAGE_THREAD_ID, // optional based on your tg group setup
      text: message,
      parse_mode: "HTML",
    });
  } catch (error) {
    console.error("Error sending message:", error);
  }
};
