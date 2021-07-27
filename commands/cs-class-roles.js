module.exports = {
  name: "cs-class-roles",
  description: "Reaction roles for CS Classes",
  async execute(message, args, Discord, client) {
    const channel = process.env.DJS_REACTION_CHANNEL;

    //! TODO: import this instead of letting it fill half of the lines
    const cs120Role = message.guild.roles.cache.find(
      (role) => role.name === "cs120"
    );
    const cs125Role = message.guild.roles.cache.find(
      (role) => role.name === "cs125"
    );
    const cs160Role = message.guild.roles.cache.find(
      (role) => role.name === "cs160"
    );
    const cs230Role = message.guild.roles.cache.find(
      (role) => role.name === "cs230"
    );
    const cs260Role = message.guild.roles.cache.find(
      (role) => role.name === "cs260"
    );
    const cs290Role = message.guild.roles.cache.find(
      (role) => role.name === "cs290"
    );
    const cs315Role = message.guild.roles.cache.find(
      (role) => role.name === "cs315"
    );
    const cs325Role = message.guild.roles.cache.find(
      (role) => role.name === "cs325"
    );
    const cs360Role = message.guild.roles.cache.find(
      (role) => role.name === "cs360"
    );
    const cs363Role = message.guild.roles.cache.find(
      (role) => role.name === "cs363"
    );
    const cs430Role = message.guild.roles.cache.find(
      (role) => role.name === "cs430"
    );
    const cs432Role = message.guild.roles.cache.find(
      (role) => role.name === "cs432"
    );
    const cs440Role = message.guild.roles.cache.find(
      (role) => role.name === "cs440"
    );
    const cs452Role = message.guild.roles.cache.find(
      (role) => role.name === "cs452"
    );
    const cs465Role = message.guild.roles.cache.find(
      (role) => role.name === "cs465"
    );
    const cs470Role = message.guild.roles.cache.find(
      (role) => role.name === "cs470"
    );
    const cs480Role = message.guild.roles.cache.find(
      (role) => role.name === "cs480"
    );
    const cs484Role = message.guild.roles.cache.find(
      (role) => role.name === "cs484"
    );
    const cs491Role = message.guild.roles.cache.find(
      (role) => role.name === "cs491"
    );
    const cs495Role = message.guild.roles.cache.find(
      (role) => role.name === "cs495"
    );

    const cs120Emoji = "😀";
    const cs125Emoji = "😁";
    const cs160Emoji = "😆";
    const cs230Emoji = "😅";
    const cs260Emoji = "😂";
    const cs290Emoji = "🤣";
    const cs315Emoji = "😇";
    const cs325Emoji = "🙂";
    const cs360Emoji = "🙃";
    const cs363Emoji = "🥰";
    const cs430Emoji = "😘";
    const cs432Emoji = "😛";
    const cs440Emoji = "🧐";
    const cs452Emoji = "😎";
    const cs465Emoji = "🤩";
    const cs470Emoji = "🥳";
    const cs480Emoji = "😏";
    const cs484Emoji = "😞";
    const cs491Emoji = "😔";
    const cs495Emoji = "😖";
  },
};
