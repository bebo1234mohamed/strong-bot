const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NzUxODY5ODg4NTk5MTYzMDIx.X1PXZg.2ehEclPBHWo98hSsoB0swIg5hK8');
