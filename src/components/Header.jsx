import Nav from './Navbar';

function Header(){

const logostyle = {maxWidth: '25%'};
 
  
    return (
    <div className="headerstyle bg-light" >
        <div className="header-container">
            <img src="images/logo copy.svg" classname="rickdeakinslogo" alt="logo" style={logostyle}/><br/>
        <Nav />
        </div>
    </div>
    )
}

export default Header;