import { connect } from "react-redux";
import { todoChecked, todoRemove } from "../redux/actions";

const TodoItem = ({ todos, todoChecked, todoRemove }) => {
    return (
        <>
            {todos.map(todo => {
                return (
                    <li className="list-group-item" key={todo.id}>
                        <div className='remove_icon_control'>
                            <div className='d-flex align-items-center'>
                            <input type='checkbox' checked={todo.completed} onChange={() => todoChecked(todos, todo.id)} style={{marginRight: 7}} />
                            <span style={{marginRight: 10}}>{todo.text}</span>
                            <span className='remove_icon' onClick={() => todoRemove(todos, todo.id)}>&times;</span>
                            </div>
                        </div>
                    </li>
                )
            })}
        </>
    )
}

const mapStateToProps = state => ({
    todos: state.todo.todos
})

const mapDispatchToProps = {
    todoRemove: todoRemove,
    todoChecked: todoChecked
}
 
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);