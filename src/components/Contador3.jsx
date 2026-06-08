import PropTypes from 'prop-types';

import React, { useState } from 'react'

const Contador3 = ({valorDefault, min, max, step}) => {
  const [valor, setValor] = useState(valorDefault)
  

  return (
    <div>
      <h1>Contador</h1>
      <h2>El valor es: {valor}</h2>
      {/* Math.max, Math.min */}
      <button onClick={()=> 
        setValor(()=>{
          if(valor+step > max){
            return max;
          } return valor+step;

        })}>+</button>
      <button onClick={()=> setValor(()=>{
          if(valor-step < min){
            return min;
          } return valor-step;

        })}>-</button>
      <button onClick={()=> setValor(valorDefault)}>reset</button>
    </div>
  )
}




Contador3.propTypes = {
  valorDefault: PropTypes.number
}

Contador3.defaultProps = {
  valorDefault: 5

}

export default Contador3