const NetCatMentions = require('../Build/MentionsBuilder');

const NetCatMentionsAll = [];

NetCatMentionsAll.push(NetCatMentions.everyone);
NetCatMentionsAll.push(NetCatMentions.roles);
NetCatMentionsAll.push(NetCatMentions.users);

module.exports = NetCatMentionsAll;