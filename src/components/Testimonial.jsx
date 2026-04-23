import Icon from "../Reuseable component/Icon";

const Testimonial = ({children}) => {
    return (  
        <>
            <div  data-aos="zoom-in-down" className="testimonial-section" id="Testimonial">
                <div className="container">
                    <div className="wrapper">
                        <div className="section-name">
                            <Icon
                                url= '/icons/icons8-customer-satisfaction-68.png'
                                alt={'Testimonial icon'}
                                width={50} height={50} className={'Testimonial-icon bg-color'}
                            />
                            <h2>Our Testimonies</h2>
                        </div>

                        <div className="slideCard-container">
                             {children}
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Testimonial;