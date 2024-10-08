exports.NetCatIntents = require('./Discord-Utils/javaScript/Build/IntentsBuilder');
exports.NetCatIntentsDefault = require('./Discord-Utils/javaScript/data/DefaultIntents');
exports.NetCatIntentsAll = require('./Discord-Utils/javaScript/data/AllIntents');
exports.NetCatPartials = require('./Discord-Utils/javaScript/Build/PartialsBuilder');
exports.NetCatPartialsDefault = require('./Discord-Utils/javaScript/data/DefaultPartials');
exports.NetCatPartialsAll = require('./Discord-Utils/javaScript/data/AllPartials');
exports.NetCatMentions = require('./Discord-Utils/javaScript/Build/MentionsBuilder');
exports.NetCatMentionsDefault = require('./Discord-Utils/javaScript/data/DefaultMentions');
exports.NetCatMentionsAll = require('./Discord-Utils/javaScript/data/AllMentions');

const clientArraysLoader = require('./Discord-Utils/javaScript/Loaders/ClientArraysLoader');
exports.NetCatArraysLoader = clientArraysLoader.NetCatArraysLoader;
exports.NetCatIntentsArray = clientArraysLoader.NetCatIntentsArray;
exports.NetCatPartialsArray = clientArraysLoader.NetCatPartialsArray;
exports.NetCatMentionsArray = clientArraysLoader.NetCatMentionsArray;

exports.NetCatMessageEmbedBuilder = require("./Discord-Utils/javaScript/Exports/NetCatMessageEmbedBuilder");
exports.sleep = require("./Coding-Utils/Functions/Sleep");