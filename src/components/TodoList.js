import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
      const {items, clearList, handleDelete, handleEdit, handleCheck} = this.props
    return (
        <ul className="list-group my-5">
            <h4 className="text-center">Перелік справ (Todo list)</h4>
            {
                items.map(item => {                    
                    return(
                        <TodoItem
                         key={item.id}
                         title={item.title}
                         handleDelete={() => handleDelete(item.id)}                         
                         handleEdit={() => handleEdit(item.id)}                         
                         handleCheck={() => handleCheck(item.id)}
                         checkedItem={item.checkedItem}                                                  
                        />
                    )
                })
            }
            <button type="button" 
                    className="btn btn-danger btn-block mt-5"
                    onClick={clearList}             
                    >
                    Очистити перелік (Clear list)
            </button>
        </ul>

    )
  }
}
