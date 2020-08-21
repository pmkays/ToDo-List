import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    state= {
        isChecked : false
    }
    
    componentDidMount(){
        if(this.props.todo.completed){
            this.setState({
                isChecked : true
            })
        }
    }

    strikeAndCheck = (event, id) => {
        this.setState({
            isChecked : !this.state.isChecked
        })
        this.props.markComplete(id, event);
    }
    
    getStyle = () => {
        return {
            background:'#f4f4f4',
            padding:'10px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            borderBottom: '1px #ccc dotted'
        };
    }

    btnEnter = (event) => {
        event.target.style.background = '#ff3300';
    }

    btnLeave = (event) => {
        event.target.style.background = 'red';
    }

    render(){
        const{id, title, complete} = this.props.todo;
        return(
            <div style={this.getStyle()}>
                <input 
                type="checkbox" 
                checked = {this.state.isChecked}
                onChange={(event) => this.strikeAndCheck(event, id)}/>&nbsp;
                {title}
                <button 
                style ={btnStyle} 
                onClick={(event) => this.props.delete(id, event)}
                onMouseEnter = {(event) => this.btnEnter(event)}
                onMouseLeave = {(event) => this.btnLeave(event)}
                >
                Delete</button>
            </div>
        );
    }
}

TodoItem.propTypes ={
    todo:PropTypes.object.isRequired
}

const btnStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '10%',
    float: 'right',
    cursor: 'pointer'
}


export default TodoItem;
