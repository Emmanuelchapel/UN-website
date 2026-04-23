const CardDetails = ({ className,cardTitle, cardDescription }) => {
  return (
    <>
      <div className={className}>
        <div className="card-title">
            {/* the card title */}
          <h3>{cardTitle}</h3>
        </div>
        <div className="card-description">
            {/* the card decription */}
          <p>{cardDescription}</p>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
