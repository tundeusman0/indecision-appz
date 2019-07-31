import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOptions from "./AddOptions";
import OptionModal from "./Modal";

export default class Indecision extends React.Component {
    state = {
        options: [],
        modal: undefined
    }
    componentDidMount(){
        const rawOptions = JSON.parse(localStorage.getItem("options"))
        if(rawOptions !== null){
            this.setState(() => ({ options: rawOptions }))
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem("options",json)
        }
    }
    handleDecision = () =>{
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        this.setState(() => ({ modal: this.state.options[randomNumber]}))
    }
    closeModal = () =>{
        this.setState(() => ({ modal: undefined }))
    }
    handleDeleteAll = () =>{
        this.setState(()=>({options:[]}))
    }
    handleRemoveOne = (optionToDelete) =>{
        this.setState(prevState=>(
            {options: prevState.options.filter(option=>option !== optionToDelete)}
        ))
    }
    handleAddOptions = (option) =>{
        if(!option){
            return "ENTER A VALID OPTION"
        }else if(this.state.options.indexOf(option) > -1){
            return "OPTION ALREADY EXIST"
        }
        this.setState(prevState=>({options:prevState.options.concat(option)}))
    }
    render() {
        const title = "Indecision App"
        const subTitle = "Put your life in the hands of a computer"
        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <div className="container">
                    <Action
                        optionsLength={this.state.options.length === 0}
                        handleDecision={this.handleDecision}
                        handleDeleteAll={this.handleDeleteAll}
                        options={this.state.options}
                    />
                    <div className="optionsContainer">
                        <Options
                            options={this.state.options}
                            handleRemoveOne={this.handleRemoveOne}
                        />
                        <AddOptions handleAddOptions={this.handleAddOptions} />
                    </div>
                </div>
                <OptionModal 
                    modal={this.state.modal} 
                    closeModal={this.closeModal}
                />
            </div>
        )
    }
}