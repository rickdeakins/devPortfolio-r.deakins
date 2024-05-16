function Footer(){

const icon = {maxWidth: '3%', marginLeft: '10px'};
const footer = {backgroundColor:"#ffff"}

    return(
        <div id="footer" className="py-4 fixed-bottom" style={footer}>
      <a href="https://rickdeakins.netlify.app"><img src="images/rickdeakinslogoicon.svg" alt="github_logo" className="iconeffect" style={icon} /></a>
      <a href="https://github.com/rickdeakins/"><img src="images/github.svg" alt="github_logo" className="iconeffect" style={icon} /></a>
      <a href="https://www.linkedin.com/in/rick-deakins-14940315"><img src="images/linkedin.svg" alt="linkedin_logo" className="iconeffect" style={icon} /></a> 
    </div>
    )
}

export default Footer;
