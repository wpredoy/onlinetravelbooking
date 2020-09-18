import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Travelspot from '../Travelspot/Travelspot';

const Spot = () => {
    const fake = fakeData;
    const [spot, setSpot] = useState(fake)
    return (
        <div className="container">
            <div className="row">
                {
                    spot.map(spot=> <Travelspot key={spot.id} spot={spot}></Travelspot>)
                }
            </div>
        </div>
    );
};

export default Spot;