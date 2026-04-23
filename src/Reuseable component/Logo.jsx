const Logo = ({className,url,alt,width,height}) => {
    return ( 
        <>
            <div className= {className}>
                <img width={width} height={height} src={url} alt= {alt} />
            </div>
        </>
     );
}
 
export default Logo;