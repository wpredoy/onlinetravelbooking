import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import fakeData from '../../fakeData'
import ResortinformationDetail from '../ResortinformationDetails/ResortinformationDetail';


const Resortinformation = () => {
    const location = useLocation()
    const search = location.search.split('=')
    const ResortinformationData = fakeData.find(pd=> pd.id.toString() === search[1])
    return (
        <div className="container mt-4">
            <div className="row d-flex">
                <div className="col-md-6">
                    <h3 style={{color: "tomato",marginButtom: "5px"}}>{ResortinformationData.sportname}</h3>
                    {
                        ResortinformationData.image.map(ResortinformationData=> <ResortinformationDetail  ResortinformationData ={ResortinformationData}></ResortinformationDetail> )
                    }
                </div>
                <div className="col-md-6">
                    <iframe src={ResortinformationData.googlemap} style={{width: "100%",height:"100%"}}></iframe>
                </div>
            
           </div>
        </div>
    );
};

export default Resortinformation;