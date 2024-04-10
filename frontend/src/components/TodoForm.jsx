import { connect } from "react-redux"
import { addTodo, handlerTextChange } from "../redux/actions"

const TodoForm = ({ text, handlerTextChange, addTodo }) => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div style={{marginRight: 10}}>
                <label htmlFor='todo'>
                    <input className='form-control' type='text' placeholder='Ваше дело' id='todo' value={text} onChange={(e) => handlerTextChange(e.target.value)} />
                </label>
            </div>
            <div>
                <button className='btn btn-primary' type='button' onClick={() => addTodo(text, handlerTextChange)}>Добваить дело</button>
            </div>
      </div>
    )
}

const mapDispatchToProps = {
    addTodo: addTodo,
    handlerTextChange: handlerTextChange
}

const mapStateToProps = state => ({
    text: state.text.text
})
 
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)