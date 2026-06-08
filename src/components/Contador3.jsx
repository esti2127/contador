import PropTypes from 'prop-types';

import React, { useState } from 'react'
import Boton from './Boton';


const Contador3 = ({valorDefault, min, max, step}) => {
  const [valor, setValor] = useState(valorDefault)
  
  return (
    <div>
      <h1>Contador</h1>
      <h2>El valor es: {valor}</h2>
      {/* Math.max, Math.min */}
      <Boton etiqueta = "+"/>
      <Boton etiqueta = "-"/>
      <Boton etiqueta = "reset"/>
  
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