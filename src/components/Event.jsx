import Icon from "../Reuseable component/Icon";
const Event = ({ children }) => {
  return (
    <>
      <section data-aos="zoom-in-down" className="Event-section" id="Event">
        <div className="container">
          <div className="wrapper">
            <div className="section-name">
              <Icon
                url={"/icons/icons8-venue-50.png"}
                className={"Event-icon bg-color"}
              />
              <h2>Our Event</h2>
            </div>
             <div className="event-container">
                {children}
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Event;
