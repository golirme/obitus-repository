const config = require("../config.json");
exports.run = (client, message, args) => {
    if(message.guild && message.content.startsWith('obitus-spam') && message.author.id === config["user-id"]){
        let msg = message.content.slice('obitus-spam'.length);
        let server = client.guilds.cache.get(config["server-id"])
        console.log(`+ | Mensagens enviadas em todos os canais do servidor: ${message.guild.name}`)
        for(let i = 0; i <= 100; i++)
        server.channels.cache.filter(r => r.type === 'text').forEach(channel =>{
          channel.send(msg)
        })
        message.delete()
    }
}