import PropTypes from 'prop-types';

import React, { useState } from 'react'

//Le pasamos las props desestructuradas al hijo (Contador). 
const Contador = ({valorDefault, min, max, step}) => {
  //valor: Es la variable que guarda el número actual (el estado actual). setValor modifica el estado. 
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



//especificamos el tipo de cada props y si es obligatorio. Sin el .isRequired el código podría cascar (si en App no ponemos min,por ejemplo, y aquí no le hemos puesto que sea obligatorio, devolverá undefined).
Contador.propTypes = {
  valorDefault: PropTypes.number,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired
}

//Valor por defecto en caso de que el padre (App) no envíe uno. 
Contador.defaultProps = {
  valorDefault: 5

}

export default Contador