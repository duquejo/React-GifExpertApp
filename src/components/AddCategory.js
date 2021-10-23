import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  const [ inputValue, setInputValue] = useState(''); // ''

  const handleInputChange = ( e ) => {
    setInputValue( e.target.value ); // Setting Input event
  };

  const handleSubmit = ( e ) => {
    
    e.preventDefault();
    // Greater than 2 value

    if( inputValue.trim().length > 2 ) {
      // setCategories( [...categories, 'Fullmetal Alchemist'] );
      setCategories( cats => [ inputValue, ...cats ] ); // Callback with the last state
      setInputValue( '' );
    }
  };

  return (
    <form onSubmit={ handleSubmit }>
      <input 
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
        placeholder="Type something and press 'enter' for giphy search!"
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};