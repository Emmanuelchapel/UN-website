import Icon from "../Reuseable component/Icon";
const Vision = ({ children }) => {
  return (
    <>
      <section data-aos="zoom-in-down" id="Vision" className="vision-section">
        <div className="container">
          <div className="wrapper">
            <div className="section-name">
              <Icon
                url="/icons/icons8-vision-64.png"
                alt={"impact icon"}
                width={50}
                height={50}
                className={"vision-icon bg-color-white"}
              />
              <h2>Our visition</h2>
            </div>
            <div className="content">
             <div className="vision-content">
                 <p>
                To Build Men, Weman, companies and brands into different into
                templates of excellence in Leadership, Entrepreneurship, Tech
                Application and finance showing it's philosophical, Logical and
                Spiritual Bases by the Revelation of the word and the spirit for
                kingdom advancement
              </p>
             </div>
              <div className="subheading">
                <div className="subheading-name">
                  <h2>Core value</h2>
                </div>
                <div className="core-value-container">
                      {children}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
