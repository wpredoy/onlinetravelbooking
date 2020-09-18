import React from 'react';
import { Link } from 'react-router-dom';
import './Travelspot.css';

const Travelspot = (props) => {
    const {sportname,img,id} = props.spot
    return (
        <div>
            <div className="col-md-4">
                <div className="card cardStyle">
                    <Link to={`/travelspotdetail/${id}`}>
                        <img src={img} style={{width: "100%", margin: "auto"}} alt=""/>
                    </Link>
                    <div className="card-body cardbodystyle">
                        <h4 className="card-title">{sportname}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Travelspot;