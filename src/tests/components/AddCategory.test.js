import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('<AddCategory /> tests', () => {

  const setCategories = jest.fn(); // USing Jest Function
  const value = 'Hello world'; // Default value for input
  let wrapper;
  
  beforeEach( () => {
    jest.clearAllMocks(); // If we have any mock it will clear it.
    wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
  });

  test('Should render <AddCategory /> successfully', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('Should evaluate input text text changes', () => {

    const input = wrapper.find('input');

    input.simulate('change', { target: { value } } );

    const inputAfter = wrapper.find('input');
    expect( inputAfter.prop('value').trim() ).toBe( value );

  });
  
  test('should NOT post data without submit', () => {
    
    wrapper.find('form').simulate('submit', { preventDefault: () => {} } );
    expect( setCategories ).not.toHaveBeenCalled(); // Not called!
  });

  test('Should call setCategories and clear the text input', () => {
    
    const input = wrapper.find('input');
    
    input.simulate('change', { target: { value } } ); // Simulated input onChange
    wrapper.find('form').simulate('submit', { preventDefault: () => {} } ); // Simulate form onSubmit

    expect( setCategories ).toHaveBeenCalled(); // setCategories has been called 1 times
    expect( setCategories ).toHaveBeenCalledTimes(1);
    expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) ); // The setCategories has been called with any Function

    expect( input.prop('value').trim() ).toBe('');
    
  });
  
  
});