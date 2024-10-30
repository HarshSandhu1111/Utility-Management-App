import React from "react";
import './Saloon.css';
import { useNavigate } from "react-router-dom";
import records from './Api/MOCK_DATA.json';

function Saloon() {
    const navigate = useNavigate();

    const myStyle = {
        backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20220428/pngtree-abstract-white-and-gray-gradient-background-image_1111585.jpg')",
        height: "300px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    // Handle booking function
    const handleAddBooking = (id) => {
        console.log("Booking for provider with id:", id);
        navigate('/bookings',{state:id});
    };

    return (
        <div className="container-s">
            <h1>Our Salons</h1>
            {records.map((record, index) => (
                <div key={record.id} className="SMain" style={myStyle}>
                    <div className="s1">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="Profile" />
                    </div>
                    <div className="s2">
                        <h3>{record.first_name} {record.last_name}</h3>
                    </div>
                    <div className="s3">
                        <p>Address: {record.address}</p>
                    </div>
                    <div className="s4">
                        <p>Phone: {record.phone}</p>
                    </div>
                    <div className="rating">
                        <h4>Rating</h4>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="Sbutton0">
                        <button>Direction <i className="fa-solid fa-diamond-turn-right"></i></button>
                    </div>
                    <div className="book_chat">
                        <div className="Sbutton2">
                            <button><i className="fa-solid fa-message"></i></button>
                        </div>
                        <div className="Sbutton3">
                            <h3 onClick={() => handleAddBooking(record.id)}>Add booking</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Saloon;
