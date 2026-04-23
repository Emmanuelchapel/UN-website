import Button from "../Reuseable component/button";
const Header = ({ children}) => {
  return (
    <>
      <header id="Home">
        {children}
        <div className="header-line">
          {/* the landing page heading */}
          <div className="heading">
            <h1><span>Becoming</span> Templates of Excellence</h1>
          </div>
          {/* the subheading */}
          <div className="subheading type-text">
            <p>Empowering men,weman, conpanies, and brands.</p>
          </div>
          <a href="#whatapplink"><Button className= 'join--us-btn' text= 'Join us Now'/></a>
        </div>
      </header>
    </>
  );
};

export default Header;
