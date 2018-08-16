exports.run = (client, message, args) => {
const discord = require("discord.js");
let perms = message.member.permissions;
let hasPerms = message.member.hasPermissions("KICK_MEMBERS");
let user = message.mentions.members.first();
let reason = args.slicer(1).join(" ");
if (hasPerms) {
    user.kick(reason);
    message.channel.send(`${user} has been kicked for ${reason}!`).catch(err => {
      message.channel.send(`I was unable to kick ${user}`);
      console.error(err);
    });
  } else {
    message.channel.send(`You do not have permission to kick ${user}!`);
  }
}
};
