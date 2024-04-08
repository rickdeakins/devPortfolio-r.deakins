  import Resumepdf from '/src/assets/rickDeakins_resume.pdf';

export default function Resume() {
    return (
      <div className="bg-light container-fluid" style={{ paddingTop: '170px' }}>
      <br/>
      <a href={Resumepdf} download="Resume" target="_blank">
        <button type="submit" class="btn btn-primary mb-3">Download Resume</button>  
      </a> <br/>
      <img src="files/rickDeakins-resume.png" alt="resume_1" style={{ maxWidth: '80%', border: '1px solid #343a40', marginBottom: '10%'}} /> 
      <br/>
      </div>
    )
  }