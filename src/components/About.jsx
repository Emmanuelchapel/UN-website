import Icon from "../Reuseable component/Icon";
 
const About = () => {
    return (
        <>
            <section data-aos="zoom-in-down" id="About" className={'About-section'}>
                <div className="container">
                    <div className="About-image">
                        <img src="/images/images/background-2.jpg" alt="The about image" />
                    </div>

                    <div className="wrapper">
                        <div className="section-name">
                            <Icon 
                             url= '/icons/icons8-about-us-50.png'
                             alt={'impact icon'}
                             width={50} height={50} className={'About-icon bg-color'}/>
                            <h2>ABOUT US</h2>
                        </div>
                        <div className="content">
                            <p>UN is an organsation that is focuses on the development and empowerment of young men and weman
                            to achieve greart things</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
      );
}
 
export default About;