import Icon from "./Icon";
const Popup = ({className , message ,alt , url}) => {
    return (
        <>
            <div className={className}>
                    {/* error icon  */}
                    <Icon alt={alt} url={url} width={30} height={30}/>
                    {/* Display message */}
                    <p>{message}</p>
            </div>
        </>
      );
}

export default Popup;