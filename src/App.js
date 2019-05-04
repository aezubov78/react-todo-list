import React, {Component} from 'react';
import Todoinput from './components/Todoinput'
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'

class App extends Component {
  state ={
    items: [
      {
        title:'Злізти з ліжка (Wake up)',
        id:uuid(),
        editItem: false,
        checkedItem: true
      },
      {
        title:'Зробити каву (Make coffee)',
        id:uuid(),
        editItem: false,
        checkedItem: true
      },
      {
        title:'Почати програмувати (Start coding)',
        id:uuid(),
        editItem: false,
        checkedItem: false
      }
    ],
    id: uuid(),
    item: '',
    editItem: false,
    checkedItem: false
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const newItem = {
      id: this.state.id,
      title: this.state.item,
      checkedItem: false
    }
    
    const updatedItems = [...this.state.items, newItem]
    this.setState({
      items:updatedItems,
      item: '',
      id: uuid(),
      editItem: false,
      checkedItem: false
    })   
  }

  clearList = () => {
    this.setState({
      items:[]
    })
  }

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !==id)
    this.setState({
      items: filteredItems
    })
  }

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !==id)
    const selectedItem = this.state.items.find(item => item.id === id)
    
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id    
    })
  }

  handleCheck = id => {
    this.setState(prevState => {
      const updatedItems = prevState.items.map(item => {
        if (item.id === id) {
          item.checkedItem = !item.checkedItem
        }
        return item
      })
      return {
        items:updatedItems
      }
    })        
  }

  render() {
      
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h4 className="text-center text-info">Список завдань і справ</h4>
          <h3 className="text-center text-info">Todo List</h3>
          <p className="text-center text-info">Ви можете додавати, 
            редагувати, видалити справи, відмітити як виконані, 
            очистити увесь перелік справ. (You can add, edit, delete todos, 
            make todos as completed, clear them all)</p>
          <hr />
          <h4 className="text-center">
          Додати справу (Todo Input)
          </h4>
        <Todoinput item={this.state.item}
                   handleChange={this.handleChange}
                   handleSubmit={this.handleSubmit}
                   editItem={this.state.editItem}                     
                   />
        <TodoList items={this.state.items}
                  clearList={this.clearList} 
                  handleDelete={this.handleDelete}
                  handleEdit={this.handleEdit}
                  handleCheck={this.handleCheck}
                  checkedItem={this.state.checkedItem}                  
                  />

        </div>
      </div>
    </div>
  );
}}

export default App;
