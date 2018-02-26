module.exports = (picture) => {
  return {
    thumbnail: `https://desdemonhu-portfolio.herokuapp.com/assets/thumbnails/${picture.thumbnail}`,
    image: `https://desdemonhu-portfolio.herokuapp.com/assets/gallery/${picture.image}`,
    published: new Date(picture.published),
  };
};