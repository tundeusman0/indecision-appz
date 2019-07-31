import React from "react";

const Option = (props) =>(
    <div className="option">
        <li>
            {<p>{props.numb}. { props.optionText }</p>}
{/**props.optionText**/}
            <button 
                onClick={()=>{
                    props.handleRemoveOne(props.optionText)
                }}
            >
                Remove
            </button>
        </li>
    </div>
)

export default Option