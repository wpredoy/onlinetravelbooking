import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import fakeData from '../../fakeData'
import './Travelspotdetail.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Travelspotdetail = () => {
    const [startdDate, setSartdDate] = useState()
    const [endDate, setEndDate] = useState()
    const {spotid} = useParams();
    const fake = fakeData.find(fakeData=> fakeData.id === spotid)
    const {description,sportname,id,from} = fake;
    const history = useHistory()
    const handelsubmit = () => {
        history.push(`/resortinfromation?id=${id}`)
    }

    return (
        <div className="container traveldetailstyle">
            <div className="row">
                <div className="col-md-5 sportdetaistyle">
                    <h1>{sportname}</h1>
                    <p>{description}</p>
                </div>
            <div className="col-md-5 fromStyle">
                <form onSubmit={()=> handelsubmit()}>
                        <div className="form-group">
                            <label >Origin</label>
                            <input type="text" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label>Destination</label>
                            <input className="form-control" required/>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-6">
                                <label>From</label>
                                <DatePicker className="form-control" placeholderText="dd/MM/yyyy" selected={startdDate} onChange={data=> setSartdDate(data)} dateFormat='dd/MM/yyyy' minDate={new Date()} required/>
                            </div>
                            <div className="col-md-6">
                                <label>To</label>
                                <DatePicker className="form-control" placeholderText="dd/MM/yyyy" selected={endDate} onChange={data=> setEndDate(data)} dateFormat='dd/MM/yyyy' minDate={new Date()} required/>
                            </div>
                        </div>
                        <div className="text-center">
                                <button className="bookingStyle"  type="submit">Start Booking</button>
                        </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Travelspotdetail;