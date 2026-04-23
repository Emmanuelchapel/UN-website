import Icon from "../Reuseable component/Icon";

const Impact = ({children}) => {
    return ( 
        <>
           <section data-aos="zoom-in-down" className="Impact-section" id="Impact">
                <div className="container">
                    <div className="wrapper">
                        <div className="section-name">
                            <Icon 
                             url= '/icons/icons8-location-50.png'
                             alt={'impact icon'}
                             width={50} height={50} className={'icon'} />
                             <h2>Achievement</h2>
                        </div>
                       <div className="Impart-container">
                        {children}
                       </div>
                    </div>
                </div>
            </section> 
        </>
     );
}
 
export default Impact;