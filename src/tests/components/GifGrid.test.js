import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock( "../../hooks/useFetchGifs" );

describe('<GifGrid /> unit tests', () => {
  
  const category = 'Dragon Ball Z'; 


  test('Should render a <GifGrid /> component successfully', () => {

    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });

    const wrapper  = shallow( <GifGrid category={ category }/> );    
    expect( wrapper ).toMatchSnapshot();
  });
  
  test('Should return items when the images are loaded useFetchGifs', () => {
    
    const gifs = [{
      id: '12345',
      url: 'https://127.0.0.1/something.gif',
      title: 'Someting'
    },{
      id: '67890',
      url: 'https://127.0.0.1/something2.gif',
      title: 'Someting 2'
    }];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow( <GifGrid category={ category }/> );

    expect( wrapper ).toMatchSnapshot();
    
    expect( wrapper.find('p') ).not.toBe(); // Assert if the p (loading) doesn't exists

    expect( wrapper.find('GifGridItem').length ).toBe( gifs.length ); // Assert the gifs length rendered
  });
});