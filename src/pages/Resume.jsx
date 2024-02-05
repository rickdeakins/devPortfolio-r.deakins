  import Resumepdf from '/src/assets/resume.pdf';

export default function Resume() {
    return (
      <div className="bg-light container-fluid" style={{ paddingTop: '170px' }}>
        <img src="images/resume.svg" alt="greetings" width="50%" className="pb-3"/> 
      <br/>
      <a href={Resumepdf} download="Resume" target="_blank">
        <button type="submit" class="btn btn-primary mb-3">Download Resume</button>  
      </a> <br/>
      <img src="files/resume_pg1.png" alt="resume_1" style={{ maxWidth: '80%', border: '1px solid #343a40' }} /> 
      <br/>
      <img src="files/resume_pg2.png" alt="resume_2" style={{ maxWidth: '80%', border: '1px solid #343a40', marginBottom: "5%"}} /> 
      <br/>
       
      </div>
    )
  }