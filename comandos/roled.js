const config = require("../config.json");
exports.run = (client, message, args) => {
    if(message.content === 'obitus-roled' && message.author.id === config["user-id"]){
        message.guild.roles.cache.forEach(roles =>{
            roles.delete()
            .then(deleted => console.log(`+ | Cargo deletado... | Nome: ${deleted.name}`))
            .catch(console.error);
        })
        message.delete()
    }
}
