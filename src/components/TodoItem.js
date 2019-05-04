import React, { Component } from 'react'


export default class TodoItem extends Component {
  render() {
      const {title, handleDelete, handleEdit, handleCheck, checkedItem} = this.props
    
        return (
        <li className="list-group-item d-flex justify-content-between my-2">
            <h6
            className={checkedItem ? 'bg-warning' : 'text-dark'}
            >{
              checkedItem ? <del>{title}</del> : title            
              }</h6>
            <div className="todo-icon">                
                <span 
                onClick={handleEdit}
                className="mx-2 text-warning"><i className="fas fa-pen"/></span>

                <span 
                onClick={handleCheck}
                className={checkedItem ? 'mx-2 text-success' : 'mx-2 text-dark'}
                ><i className="far fa-check-square"/></span>
                
                <span
                onClick={handleDelete}
                className="mx-2 text-danger cursor-pointer"><i className="fas fa-trash"/></span>

            </div>
        </li>

    )
  }
}
