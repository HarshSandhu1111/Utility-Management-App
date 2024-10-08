import React from "react";
import './Allservices.css';
import { NavLink } from "react-router-dom";
function Allservices(){
    const myStyle = {
        backgroundImage:
            "url('background2.jpg')",
        height: "100vh",
        marginTop: "-33px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

return(
    <>
    <div className="mainAll" >
        <h1>All services around your area</h1>
        <div className="Contents">
        <div className="content1">
            <img src="saloonmain.webp"></img>
            <NavLink to="/saloon" className='btnd'  >Saloon</NavLink>
            </div>

        {/* <div className="content1">
            <img src="Bikerepair.jpg"></img>
           <btn  className="btnd"> Bike/Car Repair </btn ></div>
        
       
        <div className="content1">
            <img src="carpentermain1.jpg"></img>
            <btn className="btnd">Carpenter</btn ></div>
        <div className="content1">
            <img src="Electonicmain.jpg"></img><btn className="btnd" >Electronic Repair </btn>
            </div>
        <div className="content1">
        <img src="medical.jpg"></img><btn className="btnd"> Medical </btn></div>
        <div className="content1">
            <img src="welding.jpg"></img>
            <btn className="btnd">
             Welding</btn ></div>
        {/* <div><h2>  </h2></div>
        <div><h2> </h2></div>
        <div><h2> </h2></div> */}
         <div className="content1">
            <img src="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRsk20FceO4Jj1XFOUXlgVYmn4fwlBsd1jYK6TlXxTpfwanED8faonjmAzF__XAJxsw"></img>
           <btn  className="btnd"> Real Estate </btn ></div>

           <div className="content1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7bVRrLdkYuFoFvfzwWMYu39v194NKLn7mUA&s"></img>
           <btn  className="btnd"> Transportation </btn ></div>

           <div className="content1">
            <img src="https://5.imimg.com/data5/KV/JU/II/SELLER-107286961/visa-500x500.png"></img>
           <btn  className="btnd">  Visa Service </btn ></div> 
        </div>




    </div>
    </>
)


}

export default  Allservices;