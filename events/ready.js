const { Collection } = require('discord.js');

module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    client.playerManager = new Map();
    client.triviaManager = new Map();
    client.guildData = new Collection();
    client.user.setActivity('Şimdi / komutlarını yapıoz', { type: 'WATCHING' });
    client.user.setStatus('dnd');

    console.log('Ready!');
  }
};