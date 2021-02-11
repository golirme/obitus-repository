const Discord = require("discord.js");
const fs = require("fs");

const client = new Discord.Client();
const config = require("./config.json");
client.config = config;

fs.readdir("./eventos/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./eventos/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection();

fs.readdir("./comandos/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./comandos/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Iniciando... | Carregando comando: ${commandName}`);
    client.commands.set(commandName, props);
  });
});
console.log(`
██████╗ ██████╗ ██╗████████╗██╗   ██╗███████╗
██╔═══██╗██╔══██╗██║╚══██╔══╝██║   ██║██╔════╝
██║   ██║██████╔╝██║   ██║   ██║   ██║███████╗
██║   ██║██╔══██╗██║   ██║   ██║   ██║╚════██║
╚██████╔╝██████╔╝██║   ██║   ╚██████╔╝███████║
╚═════╝ ╚═════╝ ╚═╝   ╚═╝    ╚═════╝ ╚══════╝
                                             
`)
client.login(config.token);