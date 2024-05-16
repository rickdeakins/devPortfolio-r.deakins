  export default function Portfolio() {

  const logoStyle = {maxWidth: '4%', marginLeft: '10px'};
  
      return (
        <div className="bg-light container-fluid align-items-center text-center" style={{ paddingTop: '170px' }}>
          {/* Heading image */}
        <img src="images/portfolio.svg" alt="greetings" width="50%" className="imagetext"/> 
        <div className="row">
          <div className="w-50 mx-auto">
            <div className="d-flex flex-column justify-content-center align-items-center mb-5 iconeffect">
                {/* Content for the first flex box */}
                <a href="https://rickdeakins.github.io/PasswordGenerator"><img src="images/passwordgenerator.png" alt="Image 1" className="img-fluid mb-2" /></a>
                <p><strong>Password Generator Application</strong><br/>
                The sole purpose of this application is to generate a random password using a series of prompts. The user is initially prompted to choose a password length 
                that is no less than eight characters and no longer than 128 characters.</p>
                <a href="https://github.com/rickdeakins/PasswordGenerator"><img src="images/github.svg" alt="github_logo" style={logoStyle} /></a>
              </div> 
            </div>
        <div className="row">
          <div className="w-50 mx-auto">
            <div className="d-flex flex-column align-items-center mb-5 iconeffect">
                {/* Content for the second flex box */}
                <img src="images/regex.png" alt="Image 2" className="img-fluid mb-2" />
                <p><strong>Regex (Regular Expressions) Documentation</strong><br/>
                In this tutorial the user will be provided an in-depth review into regex (Regular Expression) 
                for which an understanding at both the conceptual and technical levels can be reached.</p>
                <a href="https://gist.github.com/rickdeakins/5d71d8abb7bd591d9fd5c0afa66cff77"><img src="images/github.svg" alt="github_logo" style={logoStyle} /></a>
              </div>
              </div>
            </div>
        <div className="row">
          <div className="w-50 mx-auto">
            <div className="d-flex flex-column align-items-center iconeffect">
                {/* Content for the third flex box */}
                <img src="images/express_sequelize.png" alt="orm" className="img-fluid mb-2" />
                <p><strong>E-Commerce Backed ORM</strong></p>
                <p>Backend implementation of Sequelize to interact with MySQL within Express.js in 
                  order to provide a fully functional e-commerce website.</p>
                  <a href="https://github.com/rickdeakins/E-Commerce-Backend-ORM"><img src="images/github.svg" alt="github_logo" style={logoStyle} /></a><br/>
              </div>
              </div>
            </div> 
        <div className="row">
          <div className="w-50 mx-auto">
            <div className="d-flex flex-column align-items-center iconeffect">
                {/* Content for the fourth flex box */}
                <a href="https://rickdeakins.github.io/workScheduler/"><img src="images/workscheduler.png" alt="Image 2" className="img-fluid mb-2" /></a>
                <p><strong>Work Scheduler Interactive Scheduling Application</strong><br/>
              A time tracking application to provide hourly timeblocks for the typical work day starting at 8:00am and ending at 5:00pm. 
              The text areas will dynamically update by color based on the current hour based on the past, present and future times. 
              The current date will generate at the top of the screen for reference of the current date. When the data entered by the user is saved via the save button, the user data is stored in the local storage. Once the browser is refreshed, the user data is retained in the text area.
              </p>
              <a href="https://github.com/rickdeakins/workScheduler"><img src="images/github.svg" alt="github_logo" style={logoStyle} /></a><br/>

              </div>
              </div>
            </div>
        <div className="row">
          <div className="w-50 mx-auto">
            <div className="d-flex flex-column align-items-center iconeffect">
                {/* Content for the fifth flex box */}
                <a href="https://expressnotesv1-b059a69fb631.herokuapp.com"><img src="/images/NoteTaker.png" alt="Image 2" className="img-fluid mb-2" /></a>
                <p><strong>Express Notes Note-Taking Application</strong><br/>
                The Note Taker application is designed for the user to write notes, save their notes and review the saved notes at a later time. The user is prompted to add a title and their notes. 
                To reviw the notes they have entered they simply just click on the note and it will be displayed on the right side of the screen.</p>
                <a href="https://github.com/rickdeakins/ExpressNotes"><img src="images/github.svg" alt="github_logo" style={logoStyle} /></a><br/>
              </div>
              </div>
            </div>
        <div className="row">
          <div className="w-50 mx-auto">
            <div className="d-flex flex-column align-items-center iconeffect" style={{marginBottom: "15%"}}>
                {/* Content for the sixth flex box */}
                <a href="https://anotherwebtexteditor-8964003501f4.herokuapp.com"><img src="/images/Text Editor.png" alt="Image 2" className="img-fluid mb-2" /></a>
                <p><strong>textEditorPWA</strong><br/>
                This project is a Progessive Web Application Text Editor that is fully operational in the browser with 
                capability to download as a Chrome Web Application to your local machine.</p>
                <a href="https://github.com/rickdeakins/textEditorPWA"><img src="images/github.svg" alt="github_logo" style={logoStyle} /></a>
              </div>
              </div>
            </div>  
            </div> 
          </div>

      );
    }