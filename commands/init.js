module.exports = {
    name: `init`,
    description: `initializes guild info about current guild and parses data to JSON database`,
    execute(message, database, config, fs) {
        database.guilds[message.guild.id] = {};
		database.guilds[message.guild.id].papiez = "false";
		database.guilds[message.guild.id].crefix = config.prefix;
		fs.writeFile('./media/database.json', JSON.stringify(database, null, 4), (err, data) => {
            if (err) {
                console.error(err);
                return null;
            }
            console.log("DID IT BAJ!");
            message.react('😎');
        });
    },
};