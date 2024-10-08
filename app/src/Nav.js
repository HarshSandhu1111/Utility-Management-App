import './Nav.css';
import { NavLink } from 'react-router-dom';



function Nav() {
    
 
    return(
    <>
    
     <div className="main">
        <img src='MyLogo.png'></img>
        <ul>
            <div className='icont'>
            <li><NavLink to="/home" > Home</NavLink></li>
            
            </div>
           

           <li><NavLink to="/login" > Login</NavLink></li>
            
            <div className='icons '>
            <li><NavLink to="/LocationPermission" > Location</NavLink></li>
            
            </div>

            
           
        </ul>
        <div className='iconf'>
        <input className='search-input' placeholder='Enter  here'></input>  
        
        <p >
        <i class="fa-solid fa-magnifying-glass"></i>
         </p>
         </div>

        



    </div>
    <hr className='hline' /> 
    
    </>
    
    )
}


export default Nav;