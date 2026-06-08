import PropTypes from 'prop-types';

import React, { useState } from 'react'

const Contador = ({valorDefault, min, max, step}) => {
  const [valor, setValor] = useState(valorDefault)
  

  return (
    <div>
      <h1>Contador</h1>
      <h2>El valor es: {valor}</h2>
      <button onClick={()=> 
        setValor(()=>{
          if(valor+step > max){
            return max;
          } return valor+step;

        })}>+</button>
      <button onClick={()=> setValor(()=>{
          if(valor-step < min) {
            return min;
          } return valor - step;

        })}>-</button>
      <button onClick={()=> setValor(valorDefault)}>reset</button>
    </div>
  )
}




Contador.propTypes = {
  valorDefault: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number
}

Contador.defaultProps = {
  valorDefault: 5

}

export default Contador