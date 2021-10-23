import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('<GifGridItem /> unit tests cases', () => {
  
  const title = 'A title';
  const url = 'https://127.0.0.1/something.gif';
  const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

  test('Should show the component successfully', () => {

    expect( wrapper ).toMatchSnapshot();
  });

  test('Should have a paragraph with the title', () => {

    const paragraph = wrapper.find('p');
    expect( paragraph.text().trim() ).toBe( title );
  });

  test('Should have an image url and alt text ', () => {

    const image = wrapper.find('img');
    expect( image.prop('src') ).toBe( url );
    expect( image.prop('alt') ).toBe( title );
  });
  
  test('Should have the animate__fadeIn class', () => {

    const divContainer = wrapper.find('div');
    expect( divContainer.prop('className') ).toContain( 'animate__fadeIn' );
  });
  
});