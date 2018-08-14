const Discord = require("discord.js");
const Music = require('discord.js-musicbot-addon');
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client();
const config = require("./config.json");
client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

Music.start(client, {
  youtubeKey: "AIzaSyDu_YZn7ivq66a3baryXztxK8rFrERAKvA",
  prefix: config.prefix, // Prefix for the commands.
  global: true,            // Non-server-specific queues.
  maxQueueSize: 60,        // Maximum queue size of 25.
  clearInvoker: true,      // If permissions applicable, allow the bot to delete the messages that invoke it.
  helpCmd: 'musichelp',        // Sets the name for the help command.
  playCmd: 'play',        // Sets the name for the 'play' command.
  volumeCmd: 'volume',     // Sets the name for the 'volume' command.
  leaveCmd: 'begone',      // Sets the name for the 'leave' command.
  disableLoop: false        // Disable the loop command.
  });

client.login(config.token);
