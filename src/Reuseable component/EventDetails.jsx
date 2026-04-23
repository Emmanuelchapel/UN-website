import Button from "./button";
import Icon from "./Icon";

const EventDetails = ({title, time, location }) => {
  return (
    <>
      <div className="event-datails">
        <div className="wrapper">
          {/* event background */}
          <div className="event-bg">
            <Icon url={'/icons/icons8-calendar-48.png'} className={'calander-icon'}/>
          </div>

          <div className="event-wrapper">
            {/* Event title */}
            <div className="event-title">
              <h2>{title}</h2>
            </div>
            <div className="event-infor">
              {/* Event time */}
              <div className="event-time">
                <Icon  url={'/icons/icons8-time-50.png'} width={20} height={20}/>
                <p>{time}</p>
              </div>
              <div className="event-location">
                 <Icon url={'/icons/icons8-location-50 copy.png'} width={20} height={20}/>
                <p>{location}</p>
              </div>
            </div>
            <div className="event-description">
              <p>
                come intentionally and discover who you are!
              </p>
            </div>
            <a href="#Registraion link"><Button text={'Register Now'} className={'Register-btn'}/></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
