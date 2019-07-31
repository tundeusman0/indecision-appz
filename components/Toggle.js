import React from "react";

export default class Toggle extends React.Component{
    state = {
        toggle: false
    }
    handleToggle =()=>{
        this.setState(prevState=>({toggle:!prevState.toggle}))
    }
    render(){
        return(
            <div>
                <h1>Invisible Toggle</h1>
                <button onClick={this.handleToggle}>{!this.state.toggle ? "Show" : "Hide"}</button>
                {this.state.toggle && <p>You can now see</p>}
            </div>
        )
    }
}