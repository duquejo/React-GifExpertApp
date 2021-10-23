const { getGifs } = require("../../helpers/getGifs");

describe('Tests with getGifs fetch', () => {

  test('Should return 10 items', async () => {

    const gifs = await getGifs('One punch');
    expect( gifs.length ).toBe( 10 );
  });

  test('Should return an empty array if the category isn\'t provided', async () => {

    const gifs = await getGifs('');
    expect( gifs.length ).toBe( 0 );
  });
  
});