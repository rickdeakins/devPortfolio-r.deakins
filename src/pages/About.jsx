

const containerStyle = {
  paddingTop: 'clamp(6rem, 6vw, 3rem)',
  paddingBottom: 'clamp(1rem, 6vw, 3rem)',
};

export default function About() {
  return (
    <div className="bg-light container-fluid about-root" style={containerStyle}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 main-body">
          <img
            src="images/bodytext_26.svg"
            alt="greetings"
            className="imagetext pb-3 mx-auto d-block"
          />
          <div className="image-container">
            {/* other images/content here */}
          </div>
          <div className="imagetext align">
            {/* text/content */}
          </div>
        </div>
      </div>
    </div>
  );
}