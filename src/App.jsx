import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Vision from "./components/Vision";
import Card from "./Reuseable component/Card";
import CardDetails from "./Reuseable component/cardDetails";
import { useEffect, useState } from "react";
import CoreValue from "./Data/CorevalueData";
import Icon from "./Reuseable component/Icon";
import ImpartData from "./Data/ImpartData";
import Impact from "./components/Impact";
import Programs from "./components/Programs";
import ProgramsData from "./Data/ProgramsData";
import Event from "./components/Event";
import EventDetails from "./Reuseable component/EventDetails";
import EventData from "./Data/EventData";
import Overlay from "./Reuseable component/Overlay";
import Testimonial from "./components/Testimonial";
import CardSlide from "./components/CardSlide";
import testimonialData from "./Data/TestimonialData";
import Footer from "./components/Footer";
// import FloatBtn from "./FloatBtn";
import PostData from "./api-request/Post";
import Popup from "./Reuseable component/Popup";
const App = () => {
  const [isOpenNav, setOpenNav] = useState(false);
  const [displayOverLay, setOverlay] = useState(false);
  const [inputValue, setinputvalue] = useState("");
  // state the message of the email when it is sent;
  const [message, setMessage] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [succesPopup, setsuccesPopup] = useState(false);
  // state to display the error message
  const [displayMessage, setDisplayMessage] = useState(false);

  const sendEmail = async () => {
    // check if there is no email
    if (!inputValue) return;

    setisLoading(true);

    try {
      const response = await PostData(inputValue);

      if (response?.error) {
        setMessage(response.error || "something went wrong");
        return;
      }
      if (response.success) {
        setinputvalue("");
        setsuccesPopup(true);
        // show the popup message on success
        setDisplayMessage(true);
      }

      setMessage(response.message);
    } catch (error) {
      setMessage(error.message || "Network error. Try again.");
      setsuccesPopup(false);
      setDisplayMessage(true);
    } finally {
      setisLoading(false);
      // update the display messagebox
    }
  };

  useEffect(() => {
    if (!displayMessage) return;
    const t = setTimeout(() => setDisplayMessage(false), 2000);
    return () => clearTimeout(t);
  }, [displayMessage]);

  return (
    <>
      {displayOverLay ? <Overlay /> : null}
      {/* <FloatBtn className={"float-btn"} /> */}
      <Header>
        <Navbar
          isOpenNav={isOpenNav}
          onclick={() => setOpenNav(true)}
          closeNavbar={() => setOpenNav(false)}
          displayOverLay={() => setOverlay(true)}
          removeOverlay={() => setOverlay(false)}
        />
      </Header>
      <About />
      <Vision>
        {CoreValue.map((data, index) => (
          <Card key={index} className="card">
            <Icon
              url={data.icon}
              width={60}
              height={60}
              alt={`${data.title} icon`}
            />
            <CardDetails
              className="card-details"
              cardTitle={data.title}
              cardDescription={data.description}
            />
          </Card>
        ))}
      </Vision>
      <Impact>
        {ImpartData.map((data, index) => (
          <Card key={index} className="imapact-card">
            <CardDetails
              className="impart-details"
              cardTitle={data.number}
              cardDescription={data.description}
            />
          </Card>
        ))}
      </Impact>
      <Programs>
        {ProgramsData.map((data, index) => (
          <div key={index} className="program-container">
            <Card className="program-card">
              <Icon
                url={data.Icon}
                width={100}
                height={100}
                alt={`${data.name} icon`}
              />
              <CardDetails className="program-name" cardTitle={data.name} />
            </Card>
          </div>
        ))}
      </Programs>
      <Event>
        {EventData.map((data, index) => (
          <div key={index} className="Event-wraper">
            <Card className={"Event-card"}>
              <EventDetails
                location={data.location}
                time={data.time}
                title={data.title}
              />
            </Card>
          </div>
        ))}
      </Event>
      <Testimonial>
        <CardSlide cards={testimonialData} />
      </Testimonial>
      {/* footer section component */}
      <Footer
        inputValue={inputValue}
        setinputvalue={setinputvalue}
        sendEmail={sendEmail}
        isLoading={isLoading}
      />
      <Popup
        url={
          succesPopup
            ? "/icons/icons8-success-30.png"
            : "/icons/icons8-error-48.png"
        }
        alt={succesPopup ? "success icon" : "error icon"}
        className={
          displayMessage ? "popup fade-popup" : "popup remove-popup fade-popup"
        }
        message={message}
      />
    </>
  );
};

export default App;
