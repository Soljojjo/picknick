import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Sidebar2 from './Sidebar2';

const TvPrograms = () => {

    const url = "https://tv-api-p2x2o.ondigitalocean.app/SVT 1.json"
    const [programs, setPrograms] = useState([]);

    useEffect(async () => {
        if (programs.length === 0) {
            const response = await fetch(url);
            const data = await response.json();
            setPrograms(data);
        }
    })


// Can only return one object, encapsulated in a DIV here
    return (
        <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
            
            <div> column 1
                
            </div>
                
            <div> column 2
            <Sidebar /> 

            </div>

            <div> column 3
            <Sidebar2 />
            </div>

            <div> column 4
            
                
            </div>
                
            
        </div>
        </div>
);
};
export default TvPrograms;
