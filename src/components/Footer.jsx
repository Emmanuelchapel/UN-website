import Icon from "../Reuseable component/Icon";

const Footer = ({inputValue, setinputvalue, sendEmail ,isLoading}) => {
  return (
    <>
      <footer  data-aos="zoom-in-down">
        <div className="container">
          <div className="wrapper">
            {/* footer link */}
            <div className="footer-link">
              <ul>
                <li>
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#About">About</a>
                </li>
                <li>
                  <a href="#Vision">Vision</a>
                </li>
                <li>
                  <a href="#Impact">Impart</a>
                </li>
                <li>
                  <a href="#Event">Event</a>
                </li>
                 <li><a href="#Program">Program</a></li>
                <li>
                  <a href="#Testimonial">Testimonial</a>
                </li>
                <li>
                  <a href="#Contact us">contact us</a>
                </li>
              </ul>
            </div>
             <h2>FOLLWE US ON</h2>
            <div className="social-icons">
              {/* facebook icon */}
              <Icon
                className={"facebook-icon"}
                url={"/icons/icons8-facebook-64 copy.png"}
                alt={"follew us on facebook"}
              />
              {/* x(twitter) icon */}
              <Icon
                className={"x-icon"}
                url={"/icons/icons8-twitter-circled-50.png"}
                alt={"follew us on x"}
              />
              {/* linkedin icon */}
              <Icon
                className={"linkedin-icon"}
                url={"/icons/icons8-linkedin-64.png"}
                alt={"follew us on linkedin"}
              />
              {/* instagram  icon*/}
              <Icon
                className={"instagram-icon"}
                url={"/icons/icons8-instagram-logo-50.png"}
                alt={"follew us on instagram"}
              />
            </div>
            <div className="Newsletter-container ">
                <h2>Join our Newsletter to get informed!</h2>
                <form  onSubmit={(e) =>{
                  e.preventDefault();
                  sendEmail();
                }}>
                    <div className="input-field">
                        <input  value={inputValue} onChange={(e)=>setinputvalue(e.target.value)}  type="email" name="email"/>
                    </div>
                    <button value={'send'} disabled={isLoading || !inputValue} >{isLoading?<p>Sending...</p>:<p>Send</p>}</button>
                </form>
            </div>
          </div>
        </div>
        <div className="footer-infor">
            <h2>@copyright/UN Empirer</h2>
        </div>
      </footer>
    </>
  );
};

export default Footer;
