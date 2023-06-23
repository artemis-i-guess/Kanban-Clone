import React from 'react';
import "./icon.css";
const Icon = ({icon}) => {
    return ( 

        <div className="icon">
            <img src={icon} alt="" />
        </div>
     );
}
 
export default Icon;