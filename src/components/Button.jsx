const Button = ({buttonStyle, action, texto}) => {
  
  let classButton='btn ';
  // if(buttonStyle) {
  //   classButton += buttonStyle;
  // }
  classButton = buttonStyle?classButton += buttonStyle:'';
  return (
    <button className={classButton} onClick={action}>{texto}</button>
  )
}
export default Button
