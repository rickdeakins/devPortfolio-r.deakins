export default function About() {
  return (
    <div className="bg-light container-fluid" style={{ paddingTop: '170px' }}>
      <img src="images/greetings.svg" alt="greetings" width="50%" className="pb-3"/> 
      <div className="container d-flex justify-content-start align-items-center pb-3">
        <p className="col-lg-5 text-start mx-auto bg-light">
          Greetings! My name is Rick Deakins. I am a web developer with a working background that delves into
          the creative as well as the technical. With a background rooted in graphic design, I have the ability 
          to utilize visual design elements complementary to my experience working in a more data-driven
          environment managing reporting, databases, process design, and client-facing business operations. With 
          the utilization of logic and analytical thinking paired with a sound visual backdrop, the developmental
          outcome is a well-rounded final product. 
        </p><br/>
      </div>
      <img src="images/rick.jpg" alt="rick" style={{ maxWidth: '30%', borderRadius: '50%', marginBottom: '10%' }} /> 
    </div>
  );
}