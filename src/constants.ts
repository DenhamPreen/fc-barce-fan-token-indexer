export const EXPLORER_URL = process.env.ENVIO_EXPLORER_URL;
export const WHALE_THRESHOLD: string = process.env.ENVIO_WHALE_THRESHOLD ?? "1"; 
export const BOT_TOKEN = process.env.ENVIO_BOT_TOKEN; // telegram bot token
export const CHANNEL_ID = process.env.ENVIO_TELEGRAM_CHANNEL_ID ; // fc barcelona whale watcher channel
export const MESSAGE_THREAD_ID = process.env.ENVIO_TELEGRAM_MESSAGE_THREAD_ID; // fc barcelona - notification topic

export const explorerUrlAddress = (address: string) =>
  EXPLORER_URL + "address/" + address;
export const explorerUrlTx = (txHash: string) =>
  EXPLORER_URL + "tx/" + txHash;


  