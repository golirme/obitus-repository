const config = require("../config.json");
const Discord = require("discord.js");
exports.run = (client, message, args) => {
if(message.content === "obitus-help" && message.author.id === config["user-id"]){
  let ajuda = new Discord.MessageEmbed()
    .setColor("#f10303")
    .setTitle("⠀⠀⠀⠀⠀⠀| ⠀⠀⠀⠀⠀Comandos⠀⠀⠀⠀⠀ | ⠀⠀⠀⠀⠀Obitus⠀⠀⠀⠀⠀⠀|")
    .setDescription("obitus-channel⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀obitus-channeld\n`Cria canais com o nome escolhido.`⠀⠀`Deleta todos os canais do servidor.`\n\nobitus-role⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀obitus-roled\n`Cria cargos com o nome escolhido.`⠀⠀`Deleta todos os cargos do servidor.`\n\nobitus-delete⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀obitus-obitus\n`Deleta todos os dados do servidor.`⠀⠀`Envia uma ascii-art do obitus.`")
    .setThumbnail("")
    .setFooter("")
    .setTimestamp()
  message.author.send(ajuda)
}
message.delete()
  
}
