import React from "react";

export default class Count extends React.Component{
    state = {
        count: 0
    }
    componentDidMount() {
        const rawCount = JSON.parse(localStorage.getItem("counts"))
        console.log(rawCount)
        if (rawCount !== null) {
            this.setState(() => ({ count: rawCount }))
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.count !== prevState.count) {
            const json = JSON.stringify(this.state.count)
            localStorage.setItem("counts", json);
        }

    }
    handleMinusOne = () => {
        this.setState(prevState => ({ count: prevState.count - 1 }))
    }
    handlePlusOne = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }
    handleReset = () => {
        this.setState(() => ({ count: 0 }))
    }
    render() {
        return (
            <div>
                <h3>count: {this.state.count}</h3>
                <button onClick={this.handlePlusOne}>Add One</button>
                <button onClick={this.handleMinusOne}>Subtract One</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}