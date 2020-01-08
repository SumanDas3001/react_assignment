import React from 'react';

const display = (props) => {
  let validationMessage = 'Text long enough';
  if(props.inputLength <= 5){
    validationMessage = 'Text to sort'
  }

  return(
    <div>
      <p>{validationMessage}</p>
    </div>
  );
}

export default display;
