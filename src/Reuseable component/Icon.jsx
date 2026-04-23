const Icon = ({className, alt,url,onclick = null ,width = 50, height = 50}) => {
    return ( 
        <>
            <div className={className}>
               {
                 onclick === null? <img  width={width} height={height} src={url} alt={alt} />:
                 <img onClick={onclick} width={width} height={height} src={url} alt={alt} />
               }
            </div>
        </>
     );
}
 
export default Icon;