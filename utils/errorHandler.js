const Discord = require('discord.js');
Discord.Message.prototype.command = async function(num, func){
    try {
        //argument declaration
        if (this.client.config.prefix.endsWith(" ")) {
                args = this.content.split(/ +/g);
                args.splice(0, 2);
            }
            else {
                args = this.content.slice(this.client.config.prefix.length).split(/ +/g);
                args.splice(0, 1);
            }
        if (num) {
            // if (num <= args.length) throw "Too many arguments!" //I guess this one is useless for now, so I've disabled it
            if (num > args.length) throw `Too few (${args.length}) arguments!`
        }
        try {
            await func();
            //executes after command returns no issues (tl;dr when error flag === 0)
            this.client.logger.command(this, this.cmd, typeof this.cmd.perms !== "string"?"guild-perm":this.cmd.perms);
        }
        catch (err) {
            this.client.logger.caughtError(this, err, "reject");
        }
    }
    catch (error) {
        this.client.logger.caughtError(this, error, "sync");
    }
    //executes whether promise was resolved or not
    finally {
        // this.delete(0); //removed due to confusion sometimes
    }
}