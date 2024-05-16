import Resumepdf from '/src/assets/rickDeakins_resume.pdf';
const containerStyle = {paddingTop: '10%'};
const resume = {maxWidth: '80%', border: '1px solid #343a40', marginBottom: '10%'};

export default function Resume() {
    return (
      <div className="bg-light container-fluid mt-10" style={containerStyle}><br/>
        <img src="images/resume.svg" alt="resume" className="imagetext pb-9 align-items-center" /><br/>
        <a href={Resumepdf} download="Resume" target="_blank" className="imagetext">
          <button type="submit" class="btn btn-primary mb-3">Download Resume</button></a> <br/>
        <img src="files/rickDeakins-resume.png" alt="resume_1" className="resume" style={resume} /><br/>
      </div>
    )
  }