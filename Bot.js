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

client.login('NDQxMjg5NDk0MTMwNDU4NjM0.DcuGYw.ygvOf4Ff7_lXoKTFvDcgz3zKj4g');
