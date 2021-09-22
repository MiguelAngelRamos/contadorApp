import { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar';
import Button from './components/Button';
// props.contadorProps, { contadorProps}
const ContadorApp = ({contadorProps}) => {

  const [contador, setContador] = useState(contadorProps); // retorna un array con 2 valores, la variable estado y la funcion que modifica el estado
  
  const sumar = () => {
    setContador(contador + 1)
  };

  const restar = () => {
    setContador(contador - 1)
  }

  const reset = () => {
    setContador(contadorProps)
  }

  return (
      <>
        <Navbar tituloProps="Contador Aplicación"/>
        <div className="mt-5 container">
          <h1>Contador App</h1>
          <h2> {contador}</h2>
          <Button buttonStyle="btn-success" action={sumar} texto="+1"/>
          <Button buttonStyle="btn-warning" action={reset} texto="Reset"/>
          <Button buttonStyle="btn-danger" action={restar} texto="-1"/>



           {/* <button className="btn btn-success" onClick={sumar}>+1</button> */}
          {/* <button className="btn btn-warning" onClick={()=> restar()}>Reset</button>  */}
          {/* <button className="btn btn-warning" onClick={reset}> reset</button> 
          <button className="btn btn-danger" onClick={restar}>-1</button> */}
          
     
        </div>
      </>

  )
}

ContadorApp.propTypes = {
   contadorProps: PropTypes.number.isRequired
 }
 
ContadorApp.defaultProps = {
  contadorProps: 80
}
export default ContadorApp
