import React from "react";

export default class AddOptions extends React.Component{
    state= {
        error:undefined
    }
    handleAddOption = (e) =>{
        e.preventDefault();
        const value = e.target.option.value.trim();
        const error = this.props.handleAddOptions(value)
        e.target.option.value = "";
        this.setState(()=>({error}))
    }
    render(){
        return(
            <div className="addOption">
                {this.state.error && <h4>{this.state.error}</h4>}
                <form onSubmit={this.handleAddOption}>
                    <input required type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}