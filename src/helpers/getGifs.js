const getGif = async (category) => {
  const apiKey = "q6KqJGLdn8M5uVA0mtRPxjLFdeZvV7YP";
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=1&api_key=${apiKey}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = await data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      size: img.images.downsized_medium.url,
    };
  });
  return gifs;
};
export default getGif;
