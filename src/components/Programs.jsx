import Icon from "../Reuseable component/Icon";

const Programs = ({ children }) => {
  return (
    <>
      <section data-aos="zoom-in-down" className="Programs-section" id="Program">
        <div className="container">
          <div className="wrapper">
            <div className="section-name">
              <Icon
                url={"/icons/icons8-impact-64.png"}
                alt={"program icon"}
                width={50}
                height={50}
                className={"Program-icon bg-color"}
              />
              <h2>Our programs</h2>
            </div>
            <div className="program-wrapper">
               {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
