import React from "react";
import { Component } from "react";
import "./Additem.css"
class AddItem extends Component {
    
    state = {
        name : "",
        age : ""
    }
    changed = (e) => {
     this.setState({
        [e.target.id] : e.target.value
     })
    }
    submitt = (e) => {
        e.preventDefault();
        if(e.target.name.value ==='' || e.target.age.value === ''){
            return false
        } else {
            
        this.props.addItem(this.state)
        this.setState({ 
            name: "",
            age: ""
        })
        }
    }
    render(){
        return(

            <div>

<form onSubmit = {this.submitt}>
    <input type ="text" maxLength="6" placeholder = "Enter Name" id = "name" onChange ={this.changed} value={this.state.name}   />
    <input type ="number"  max="100" 
     placeholder = "Enter age" id = "age" onChange ={this.changed}  value={this.state.age} />
    <input type ="submit" value = "add" />


</form>
            </div>
        )
    }
}

export default AddItem;