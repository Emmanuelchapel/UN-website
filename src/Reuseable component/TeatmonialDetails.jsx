import Icon from "./Icon";

// function to truncate the content of the testimony if it exceeds a certain limit
const truncateText = (text,limit) =>{
  return text.length > limit? text.substring(0, limit) + '.': text;
 

}

const TestimonialDetails = ({
  picture,
  testifyerName,
  content,
  professional,
  rating
}) => {
  return (
    <>
      <div className="testimonial-details">
        <div className="wrapper">
          <div className="testifyer-pic">
            <img src={picture} alt="Testifyer" width={50} />
          </div>
          <div className="testifyer-name">
            <h2>{testifyerName}</h2>
            <p>{professional}</p>
          </div>
          {/* <div className="quote-icon">
            <img src="/icons/icons8-quote-64.png" alt="Quote Icon" width={30} />
          </div> */}
        </div>

        <div className="testimoney-content">
          <p>{truncateText(content,80)}</p>
        </div>

        {/* the rating container */}
        <div className="Rating-star">
         {
          // looping through the rating array
          rating.map((rating,index) =>(
             <Icon key={index} url={"/icons/icons8-rating-26.png"} width={26} height={26} alt={"Star Icon"}/>
          ))
         }
         <p>{rating.length}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialDetails;
