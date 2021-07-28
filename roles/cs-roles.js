export var getCSRoles = function (message) {
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

  const roles = [
    cs120Role,
    cs125Role,
    cs160Role,
    cs230Role,
    cs260Role,
    cs290Role,
    cs315Role,
    cs325Role,
    cs360Role,
    cs363Role,
    cs430Role,
    cs432Role,
    cs440Role,
    cs452Role,
    cs465Role,
    cs470Role,
    cs480Role,
    cs484Role,
    cs491Role,
    cs495Role,
  ];

  return roles;
};

export var getCSEmojis = function () {
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
  const cs491Emoji = "💀";
  const cs495Emoji = "☠️";

  const emojis = [
    cs120Emoji,
    cs125Emoji,
    cs160Emoji,
    cs230Emoji,
    cs260Emoji,
    cs290Emoji,
    cs315Emoji,
    cs325Emoji,
    cs360Emoji,
    cs363Emoji,
    cs430Emoji,
    cs432Emoji,
    cs440Emoji,
    cs452Emoji,
    cs465Emoji,
    cs470Emoji,
    cs480Emoji,
    cs484Emoji,
    cs491Emoji,
    cs495Emoji,
  ];

  return emojis;
};
