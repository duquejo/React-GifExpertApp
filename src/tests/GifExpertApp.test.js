import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe('<GifExpertApp /> unit tests', () => {
  
  test('Should render <GifExpertApp /> successfully', () => {
    
    const wrapper = shallow( <GifExpertApp /> );

    expect( wrapper ).toMatchSnapshot();
  });

  test('Should show a categories list', () => {
    
    const categories = [ 'One punch', 'Dragon Ball' ];
    const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find( 'GifGrid' ).length ).toBe( categories.length );
  });
  
});