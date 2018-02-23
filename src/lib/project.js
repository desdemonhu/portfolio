module.exports = (project) => {
  return {
    name: project.name,
    url: project.url,
    image: project.image,
    description: project.description,
    language: project.language,
    published: project.published,
  };
};