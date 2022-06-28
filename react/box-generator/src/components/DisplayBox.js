import React from 'react';

const DisplayBox = (props) => {

    const { boxArray } = props;

    return(
        <div>
            { 
            boxArray.map((color, index) => (
                <div key={index} style={{ 
                    display: "inline-block",
                    margin: "10px",
                    height: "50px", 
                    width: "50px", 
                    backgroundColor: color }}>
                </div>
            ))
        }
        </div>
    );
}

export default DisplayBox;