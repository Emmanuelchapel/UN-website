import Icon from "./Reuseable component/Icon";


const FloatBtn = ({className}) => {
    return ( 
        <>
            <div className={className}>
                <button>
                   <Icon url={'/icons/icons8-telegram-logo-50.png'}/>
                </button>
            </div>
        </>
     );
}
 
export default FloatBtn;