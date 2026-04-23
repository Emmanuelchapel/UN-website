import Logo from "../Reuseable component/Logo";
import Icon from "../Reuseable component/Icon";
import { useEffect, useState } from "react";

export const Navbar = ({onclick,isOpenNav, closeNavbar,displayOverLay,removeOverlay}) => {
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(()=>{
      const handleScroll =() =>{
         if (window.scrollY >100) {
            setIsScrolled(true)
         }else{
            setIsScrolled(false)
         }
      }
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll',handleScroll)
   },[])
   const handleOpenNav = () =>{
      onclick()
      displayOverLay()
   }

   const handleCloseNav = () =>{
      closeNavbar()
      removeOverlay()
   }

    
    return ( 
        <>
         <nav>
            <div className={`navbar--container ${isScrolled ? 'scrolled': ''}`}>
               <div className="nav-icons">
                 {/* branf LOgo */}
                 <Logo className={'logo'} url={"/images/images/Logo.jpg"} alt={'Logo'} />
                 {/* open bar */}
                    <Icon onclick={handleOpenNav} className = 'open--bar' url='/icons/sort_50dp_FFFFFF_FILL0_wght400_GRAD0_opsz48.svg' alt={'OPEN-bar'} ></Icon>
                 {/* nav links */}
               </div>

                 <div className={isOpenNav?"nav--link open-navbar":"nav--link"}>
                     {/* cancle button icon */}
                     <Icon onclick={handleCloseNav} 
                      className= 'close--bar' 
                      url= '/icons/icon-menu-close.svg' 
                      alt={'close-bar'} width={30} height={30}></Icon>
                    <ul>
                        <li><a href="#Home" style={{color: 'navy'}}>Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Vision">Vision</a></li>
                        <li><a href="#Impact">Impart</a></li>
                        <li><a href="#Program">Program</a></li>
                        <li><a href="#Event">Event</a></li>
                        <li><a href="#Testimonial">Testimonial</a></li>
                        <li><a href="#Contact">Contact us</a></li>
                        
                    </ul>
                 </div>
            </div>
         </nav>
        </>
     );
}

export default Navbar;