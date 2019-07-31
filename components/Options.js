import React from "react";
import Option from "./Option";

const Options = (props) => (
    <div className="options">
        <ol>
            {
                props.options.map((option,indx)=>
                    <Option
                        numb = {indx+1}
                        key={option} 
                        optionText={option}
                        handleRemoveOne={props.handleRemoveOne} 
                    />
                )
            
            }
        </ol>
    </div>
)
export default Options