exports.run = async (client, message, args) => {
  let ping = client.ping;
  message.channel.send("The bots ping is " + client.ping + "ms!");
};
