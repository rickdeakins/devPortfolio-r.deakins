import Nav from './Navbar';

function Header(){

const logostyle = {maxWidth: '15%'};
 
  
    return (
    <div className="headerstyle bg-light" >
        <div className="header-container">
            <img src="images/rickdeakinslogo.svg" classname="rickdeakinslogo" alt="logo" style={logostyle}/><br/>
        <Nav />
        </div>
    </div>
    )
}

export default Header;