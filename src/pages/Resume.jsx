  // import Resume from '/files/resume.pdf';

export default function Resume() {
    return (
      <div className="bg-light container-fluid" style={{ paddingTop: '170px' }}>
        <img src="images/resume.svg" alt="greetings" width="50%" className="pb-3"/> 
      <br/>
      <a href={Resume} download="Resume" target="_blank">
        <button type="submit" class="btn btn-primary">Download Resume</button>  
      </a>  
      </div>
    )
  }