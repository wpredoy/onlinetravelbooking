import React from 'react';

const ResortinformationDetail = (props) => {
    const{medium,title,shortdescription} = props.ResortinformationData;
    return (
        <div>
                <div>
                    <div className="card mb-4">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={medium} className="card-img" style={{width:"100%", height:"100%"}} alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body text-center">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{shortdescription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ResortinformationDetail;