module.exports = {
  name: "nuke-this-channel",
  description: "Bot deletes last 99 messages in channel",
  async execute(message, args) {
    var msg_size = 100;
    while (msg_size == 100) {
      await message.channel
        .bulkDelete(100)
        .then((msgs) => (msg_size = msgs.size))
        .catch(console.error);
    }
  },
};
