const NetCatPartials = require('../Build/PartialsBuilder');

const NetCatPartialsDefault = [];

NetCatPartialsDefault.push(NetCatPartials.Channel);
NetCatPartialsDefault.push(NetCatPartials.GuildMember);
NetCatPartialsDefault.push(NetCatPartials.Message);
NetCatPartialsDefault.push(NetCatPartials.User);

module.exports = NetCatPartialsDefault;