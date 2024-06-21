// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  render() {
    const {todoItem, deleteUser} = this.props
    const {title, id} = todoItem
    const onDelete = () => {
      deleteUser(id)
    }
    return (
      <li className="each-list">
        <p className="para">{title}</p>
        <button type="button" className="button" onClick={onDelete}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
