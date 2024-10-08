import './Body.css';
import { NavLink } from 'react-router-dom';
function Body(){
    return(
        <div>
         <h1>Services in your Area </h1>
       
       
       <div className='main' >
        
        
        <div className='container'>
            <h2>What are you looking for ?</h2>
           
            <div className='imgs'>
            <img src="acrepair.webp" />
            <p>Ac Reapairing</p> 

            </div >
           
            <div className='imgs'>
            <img src="painter.webp" />
            <p>Painter</p> 

            </div>
            

            <div className='imgs'>
            <img src="salon.webp" />
            <p>Salon</p> 

            </div>
             

            <div className='imgs'>
            <img src="electrician.webp" />
            <p>Electrician</p> 

            </div>

            



          <div>  <NavLink to="/allservices" className='Navl'  > See More</NavLink></div> 
           
        </div>


<div className='imags'>
      
        <div className='imags-img' id='first'>
         <img src='doctorimg.avif'></img>
        </div>
        <div className='imags-img'>
         <img src='carpenterimg.jpeg'></img>
        </div>
        <div className='imags-img'>
        <img src='acimg.jpeg'></img>
        </div>
        <div className='imags-img' id='third'>
        <img src='plumberimg.jpeg'></img>
        </div>
        </div>

        </div>
       
        </div>
     
      
    )
    
    
    
    
}


export default Body;

