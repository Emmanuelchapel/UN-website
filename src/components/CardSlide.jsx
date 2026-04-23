// import React, { useState } from "react";
// import Card from "../Reuseable component/Card.jsx";
// import TestimonialDetails from "../Reuseable component/TeatmonialDetails.jsx";

// const CardSlide = ({ cards = [] }) => {
//   const [index, setIndex] = useState(0);

//   const prev = () => setIndex((i) => Math.max(0, i - 1));
//   const next = () => setIndex((i) => Math.min(cards.length - 1, i + 1));

//   const trackStyle = {
//     display: "flex",
//     transition: "transform 300ms ease",
//     transform: `translateX(-${index * 80}%)`,
//     width: `${cards.length * 100}%`,
//   };

//   const slideStyle = {
//     flex: "0 0 100%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "1rem",
//   };

//   const containerStyle = {
//     position: "relative",
//     overflow: "hidden",
//   };

//   const btnStyle = {
//     position: "absolute",
//     top: "50%",
//     transform: "translateY(-50%)",
//     background: "rgba(0,0,0,0.5)",
//     color: "#fff",
//     border: "none",
//     padding: "0.5rem",
//     cursor: "pointer",
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={{ display: "flex", width: "50"

//       }}>
//         <div style={{ width: "50", overflow: "hidden",
//         }}>
//           <div style={trackStyle}>
//             {cards.map((c, idx) => (
//               <div key={idx} style={slideStyle}>
//                 <Card className={'testimonial-card'} >
//                   <TestimonialDetails testifyerName={c.testifyerName} content={c.content}/>
//                 </Card>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <button
//         onClick={prev}
//         disabled={index === 0}
//         style={{ ...btnStyle, left: 8, opacity: index === 0 ? 0.5 : 1 }}
//       >
//         ‹
//       </button>

//       <button
//         onClick={next}
//         disabled={index === cards.length - 1}
//         style={{
//           ...btnStyle,
//           right: 8,
//           opacity: index === cards.length - 1 ? 0.5 : 1,
//         }}
//       >
//         ›
//       </button>
//     </div>
//   );
// };

// export default CardSlide;

import { useState } from "react";
import Card from "../Reuseable component/Card";
import TestimonialDetails from "../Reuseable component/TeatmonialDetails";

const CardSlide = ({ cards = [] }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(cards.length - 1, i + 1));

  const trackStyle = {
    display: "flex",
    transition: "transform 300ms ease",
    transform: `translateX(-${index * 100}%)`,
    width: `${cards.length * 100}px`,
  };

  const slideStyle = {
    flex: "0 0 100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    width: `${cards.length * 100}px`,
  };

  const containerStyle = {
    position: "relative",
    overflow: "hidden",
    width: "200%",
    maxWidth: `${cards.length * 100}px`,
    margin: "0 auto",
  };

  const btnStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "#00214e87",
    color: "#fff",
    border: "none",
    padding: "0.5rem 0.8rem",
    cursor: "pointer",
    fontSize: "1.5rem",
    borderRadius: "100%",
    transition: "background 0.3s ease",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
  };

  return (
    <div style={containerStyle}>
      <div className={"slide-wrapper"}>
        <div style={trackStyle}>
          {cards.map((c, idx) => (
            <div key={idx} style={slideStyle}>
              <Card className={"testimonial-card"}>
                <TestimonialDetails
                  testifyerName={c.name}
                  content={c.content}
                  picture={c.picture}
                  professional={c.professional}
                  rating={c.rating}
                />
              </Card>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        disabled={index === 0}
        style={{ ...btnStyle, left: 8, opacity: index === 0 ? 0.5 : 1 }}
      >
        ‹
      </button>

      <button
        onClick={next}
        disabled={index === cards.length - 1}
        style={{
          ...btnStyle,
          right: 8,
          opacity: index === cards.length - 1 ? 0.5 : 1,
        }}
      >
        ›
      </button>
    </div>
  );
};

export default CardSlide;
