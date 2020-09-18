import React from 'react';

const nomatchstyle = {
    color: "tomato",
    textAlign: "center",
    fontSize: "40px",
    marginTop: "250px"
}
const Nomatch = () => {
    return (
        <div style={nomatchstyle}>
            <h1>Page Not Found</h1>
            <p>404 Error....</p>
        </div>
    );
};

export default Nomatch;