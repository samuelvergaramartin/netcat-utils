exports.NetCatIntents = require('./Discord-Utils/javaScript/Build/IntentsBuilder');
exports.NetCatIntentsDefault = require('./Discord-Utils/javaScript/data/DefaultIntents');
exports.NetCatIntentsAll = require('./Discord-Utils/javaScript/data/AllIntents');

const clientArraysLoader = require('./Discord-Utils/javaScript/Loaders/ClientArraysLoader');
exports.NetCatArraysLoader = clientArraysLoader.NetCatArraysLoader;
exports.NetCatIntentsArray = clientArraysLoader.NetCatIntentsArray;