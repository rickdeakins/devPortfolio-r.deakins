import Nav from './Navbar';

function Header(){
   return (
    <div className="headerstyle bg-light" >
        <div className="header-container">
                <img src="images/rickdeakinslogo.svg" classname="rickdeakinslogo" alt="logo" style={{ maxWidth: '15%'}}/>         
        {/* <div className="header-icons-container">
        <HeaderIcons />
            </div> */}
        <br/>
        <Nav />
        </div>
    </div>
    )
}

export default Header;