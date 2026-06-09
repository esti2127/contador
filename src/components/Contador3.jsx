import PropTypes from 'prop-types';

import React, { useState } from 'react'
import Boton from './Boton';


const Contador3 = ({ valorDefault, min, max, step }) => {
  let [valor, setValor] = useState(valorDefault)


  const handleSumar = () => {
    if (valor + step > max) {
      setValor(valor = max)
    } else {
      setValor(valor = valor + step);
    }
  }

  const handleRestar = () => {
    if (valor - step < min) {
      setValor(valor = min)
    } else {
      setValor(valor = valor - step)
    }
  }

  const handleResetear = () => {
    setValor(valor = valorDefault)
  }


  return (
    <div>
      <h1>Contador</h1>
      <h2>El valor es: {valor}</h2>
      {/* Math.max, Math.min */}
      <Boton etiqueta="+" onClick={handleSumar} />
      <Boton etiqueta="-" onClick={handleRestar} />
      <Boton etiqueta="reset" onClick={handleResetear} />

    </div>
  )
}


Contador3.propTypes = {
  valorDefault: PropTypes.number,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired
}

Contador3.defaultProps = {
  valorDefault: 5

}

export default Contador3