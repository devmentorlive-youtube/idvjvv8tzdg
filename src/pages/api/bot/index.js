import { Client } from "discord.js";

async function sendTextMessage(client, msg) {
  const channel = await client.channels.fetch(process.env.BOT_CHANNEL_ID);
  channel.send(msg);
}

export default function BotApi(req, res) {
  const client = new Client({ intents: [] });

  client.on("ready", (c) => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
    sendTextMessage(client, "Hi, I am here to serve!");
  });

  client.on("interactionCreate", (interaction) => {
    console.log(
      `${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`
    );
  });

  client.login(process.env.BOT_OAUTH_TOKEN);

  res.json({});
}
