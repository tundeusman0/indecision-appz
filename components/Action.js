import React from "react";

const Action = (props) =>(
    <div className="action">
        <button
            disabled={props.optionsLength}
            onClick={props.handleDecision}
        >
            What Should I Do
        </button>
        <div className="action__others">
            {props.options.length > 0 ? "Your Options" : "NO OPTIONS"}
            <button
                disabled={props.optionsLength}
                onClick={props.handleDeleteAll}
            >
                Remove All
            </button>
        </div>
        
    </div>
)
export default Action;