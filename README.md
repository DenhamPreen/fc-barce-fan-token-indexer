## Envio Fan Token Notification indexer

### Run

[*Make sure you have the prerequisites installed*](https://docs.envio.dev/docs/HyperIndex/getting-started#prerequisites)

`pnpm i`
`pnpm envio dev`

### Setup

`cp .env.example .env`

Edit the `.env` file with your Telegram bot token, channel id and message thread id.
 1. msg @BotFather `/start` -> `/newbot` & follow the prompts (this will print the bot token in the chat once successfully created)
 1. Add the bot to your telegram group
 1. In the group, send the following message `@MyUniqueBot /start`  
 1. Visit `https://api.telegram.org/bot<YourBOTToken>/getUpdates`
 1. Find the channel chat id of the group you want to monitor and paste it in the env file (it should start with "-")

*Note, If you created the new group with the bot and you only get {"ok":true,"result":[]}, remove and add the bot again to the group


*Please refer to the [documentation website](https://docs.envio.dev) for a thorough guide on all [Envio](https://envio.dev) indexer features*
