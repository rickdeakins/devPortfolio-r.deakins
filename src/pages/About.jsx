const containerStyle = {paddingTop: '150px'}
const contactText = {marginLeft: '50%',marginBottom: '30%'};

export default function About() {
  return (
<div className="bg-light container-fluid" style={containerStyle}>
  <div className="row">
    <div className="main-body">
    <img src="images/greetings.svg" alt="greetings" className="imagetext pb-9 align-items-center" />
      <div className="image-container">
        </div>
        <img src="images/about-text.svg" alt="about-text" className="about-text pb-9 align-items-center" />
       <div className="imagetext align">
        <img src="images/contacttext2.svg" alt="greetings" width="100%" className="contacttext" style={contactText}/> 
      </div> 
     </div>
    </div>
  </div>
  )
}