const NetCatPartials = require('../Build/PartialsBuilder');

const NetCatPartialsAll = [];

NetCatPartialsAll.push(NetCatPartials.Channel);
NetCatPartialsAll.push(NetCatPartials.GuildMember);
NetCatPartialsAll.push(NetCatPartials.GuildScheduledEvent);
NetCatPartialsAll.push(NetCatPartials.Message);
NetCatPartialsAll.push(NetCatPartials.Reaction);
NetCatPartials.push(NetCatPartials.ThreadMember);
NetCatPartials.push(NetCatPartials.User);

module.exports = NetCatPartialsAll;