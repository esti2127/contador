import PropTypes from 'prop-types';

import React, { useState } from 'react'

const Contador2 = ({ valorDefault, min, max, step }) => {
  const [valor, setValor] = useState(valorDefault)

  const variar = (operacion) => {
    switch (operacion) {
      case "sumar":
        if (valor + step > max) {
          return max;
        } return valor + step;
      case "restar":
        if (valor - step < min) {
          return min;
        } return valor - step;
      case "reset":
        return valorDefault;
    }
  }


  return (
    <div>
      <h1>Contador</h1>
      <h2>El valor es: {valor}</h2>
      {/* Math.max, Math.min */}
      <button onClick={() => setValor(variar("sumar"))}>+</button>
      <button onClick={() => setValor(variar("restar"))}>-</button>
      <button onClick={() => setValor(variar("reset"))}>reset</button>
    </div>
  )
}




Contador2.propTypes = {
  valorDefault: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number
}

Contador2.defaultProps = {
  valorDefault: 5

}

export default Contador2