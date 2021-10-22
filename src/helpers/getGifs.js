export const getGifs = async ( category ) => {
  
  if( process.env.REACT_APP_GIPHY_KEY === '' ) return;

  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=${ process.env.REACT_APP_GIPHY_KEY }`;

  const response = await fetch( url );
  const { data } = await response.json();

  const gifs = data.map( ({ id, title, images }) => {
    return {
      id,
      title,
      url: images?.downsized_medium.url
    };
  });

  return gifs;
};