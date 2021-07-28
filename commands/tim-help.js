module.exports = {
  name: "tim-help",
  description: "Get a list of commands from Tim's Bot",
  execute(message, args, Discord, client) {
    message.channel.send(client.command);
  },
};
