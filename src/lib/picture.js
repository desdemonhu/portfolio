module.exports = (picture) => {
  return {
    thumbnail: `src/assets/thumbnails/${picture.thumbnail}`,
    image: `src/assets/gallery/${picture.image}`,
    published: new Date(picture.published),
  };
};