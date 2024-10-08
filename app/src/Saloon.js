import React from "react";
import './Saloon.css';
import records from './Api/MOCK_DATA.json'
function Saloon(){
    const myStyle = {
        backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20220428/pngtree-abstract-white-and-gray-gradient-background-image_1111585.jpg')",
       height:"300px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

return(
<div className="container-s" >
   
<div className="SMain"  style={myStyle}>
    
<div className="s1"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmNC_pqMXD7E9AI4HBAlASf5uAaOjBB8Tw8g&s"></img></div>
<div className="s2"><h3>{records[1].first_name} </h3></div>
<div className="s3"><p>{records[0].Address}</p></div>
<div className="s4"><p>Phone : {records[0].phone}</p></div>
<div className="rating ">
<h4>Rating</h4>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
</div>

<div className = "Sbutton0"><btn >Direction <i class="fa-solid fa-diamond-turn-right"></i></btn></div>
<div  className="Sbutton1"><btn ><i class="fa-solid fa-phone"> </i></btn></div>
<div className="Sbutton2 " > <btn ><i class="fa-solid fa-message"></i></btn></div>

<div className="Sbutton3"><h3>Add booking</h3></div>


</div>

<div className="SMain " style={myStyle}>
<div className="s1"><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"></img></div>
<div className="s2"><h3>{records[2].first_name }</h3></div>
<div className="s3"><p>{records[1].Address}</p></div>
<div className="s4"><p>Phone : {records[1].phone}</p></div>

<div className="rating ">
<h4>Rating</h4>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
</div>

<div className = "Sbutton0"><btn >Direction <i class="fa-solid fa-diamond-turn-right"></i></btn></div>
<div  className="Sbutton1"><btn ><i class="fa-solid fa-phone"> </i></btn></div>
<div className="Sbutton2 " > <btn ><i class="fa-solid fa-message"></i></btn></div>
<div className="Sbutton3"><h3>Add booking</h3></div>
</div>


<div className="SMain" style={myStyle}>
<div className="s1"><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"></img></div>
<div className="s2"><h3>{records[3].first_name}</h3></div>
<div className="s3"><p>{records[2].Address}</p></div>
<div className="s4"><p>Phone : {records[2].phone}</p></div>

<div className="rating ">
<h4>Rating</h4>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
</div>

<div className = "Sbutton0"><btn >Direction <i class="fa-solid fa-diamond-turn-right"></i></btn></div>
<div  className="Sbutton1"><btn ><i class="fa-solid fa-phone"> </i></btn></div>
<div className="Sbutton2 " > <btn ><i class="fa-solid fa-message"></i></btn></div>

</div>

<div className="SMain" style={myStyle}>
<div className="s1"><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"></img></div>
<div className="s2"><h3>{records[4].first_name}</h3></div>
<div className="s3"><p>{records[3].Address}</p></div>
<div className="s4"><p>Phone : {records[3].phone}</p></div>
<div className="rating ">
<h4>Rating</h4>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
</div>

<div className = "Sbutton0"><btn >Direction <i class="fa-solid fa-diamond-turn-right"></i></btn></div>
<div  className="Sbutton1"><btn ><i class="fa-solid fa-phone"> </i></btn></div>
<div className="Sbutton2 " > <btn ><i class="fa-solid fa-message"></i></btn></div>

</div>

<div className="SMain" style={myStyle}>
<div className="s1"><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"></img></div>
<div className="s2"><h3>{records[5].first_name}</h3></div>
<div className="s3"><p>{records[4].Address}</p></div>
<div className="s4"><p>Phone : {records[4].phone}</p></div>
<div className="rating ">
<h4>Rating</h4>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
</div>

<div className = "Sbutton0"><btn >Direction <i class="fa-solid fa-diamond-turn-right"></i></btn></div>
<div  className="Sbutton1"><btn ><i class="fa-solid fa-phone"> </i></btn></div>
<div className="Sbutton2 " > <btn ><i class="fa-solid fa-message"></i></btn></div>

</div>

</div>
)

}

export default Saloon;