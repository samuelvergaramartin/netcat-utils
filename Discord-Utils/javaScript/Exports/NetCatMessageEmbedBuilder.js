const APINetCatMessageEmbedBuilder = require("../Build/NetCatMessageEmbedBuilder");
const BuilderData = new APINetCatMessageEmbedBuilder();

const NetCatMessageEmbedBuilder = {
    title: BuilderData.title,
    style: BuilderData.style,
    description: BuilderData.description,
    url: BuilderData.url,
    timestamp: BuilderData.timestamp,
    color: BuilderData.color,
    footer: BuilderData.footer,
    image: BuilderData.image,
    thumbnail: BuilderData.thumbnail,
    video: BuilderData.video,
    provider: BuilderData.provider,
    author: BuilderData.author,
    fields: BuilderData.fields,
    setEmbedTitle: BuilderData.setEmbedTitle,
    setEmbedStyle: BuilderData.setEmbedStyle,
    setEmbedDescription: BuilderData.setEmbedDescription,
    setEmbedUrl: BuilderData.setEmbedUrl,
    setEmbedTimestamp: BuilderData.setEmbedTimestamp,
    setEmbedColor: BuilderData.setEmbedColor,
    setEmbedFooter: BuilderData.setEmbedFooter,
    setEmbedImage: BuilderData.setEmbedImage,
    setEmbedHeaderImage: BuilderData.setEmbedHeaderImage,
    setEmbedVideo: BuilderData.setEmbedVideo,
    setEmbedProvider: BuilderData.setEmbedProvider,
    setEmbedAuthor: BuilderData.setEmbedAuthor,
    addEmbedFields: BuilderData.addEmbedFields,
    setEmbedField: BuilderData.setEmbedField,
    setNetCatEmbedTimestamp: BuilderData.setNetCatEmbedTimestamp
}

module.exports = NetCatMessageEmbedBuilder;