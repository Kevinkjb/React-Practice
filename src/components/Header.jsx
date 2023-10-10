import img from '../assets/react.png'

function Header(){
  return(
    <nav className='main-nav'>
      <div className="logo-container">
        <img className="logo-img" src={img}/>
        <h2 className='logo-title'>ReactFacts</h2>
      </div>
      <h3 className='sub-title'>React Course - Project 1</h3>
    </nav>
  )
}

export default Header