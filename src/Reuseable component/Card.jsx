
const Card = ({className, children}) => {
    return (  
        <>
            <div className={className}>
                <div className="wrapper ">
                    {/* the card Icon */}
                    {children}
                </div>
            </div>
        </>
    );
}
 
export default Card;