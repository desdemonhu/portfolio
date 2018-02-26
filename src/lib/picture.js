module.exports = (picture) => {
  return {
    thumbnail: `./assets/thumbnails/${picture.thumbnail}`,
    image: `./assets/gallery/${picture.image}`,
    published: new Date(picture.published),
  };
};