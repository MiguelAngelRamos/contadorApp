const Navbar = (props) => {
  /* logica */
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">{props.tituloProps}</span>
      </div>
    </nav>
  )
}

export default Navbar