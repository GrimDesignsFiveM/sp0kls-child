exports.run = (client, message, args) => {
  const discord = require("discord.js");
  let perms = message.member.permissions;
  let hasPerms = message.member.hasPermissions("KICK_MEMBERS");
  let kickee = message.mentions.members.first();
  let reason = args.slice(1).join(" ");
  if (hasPerms) {
    kickee.kick(reason);
    message.channel.send(`${kickee} has been kicked for ${reason}!`).catch(err => {
      message.channel.send(`I was unable to kick ${kickee}`);
      console.error(err);
    });
  } else {
    message.channel.send(`You do not have permission to kick ${kickee}!`);
  }
}
};
