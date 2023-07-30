const NetCatMentions = require("../Build/MentionsBuilder");

const NetCatMentionsDefault = [];

NetCatMentionsDefault.push(NetCatMentions.users);
NetCatMentionsDefault.push(NetCatMentions.roles);

module.exports = NetCatMentionsDefault;