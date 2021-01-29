import React, {useState} from "react";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from "./todoForm";

const Todo = ({todos, onCompleted, updateTodo, removeTodo}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} handleSubmit={submitUpdate}/>
    }

    return todos.map((todo, index) => (
        <div
            className={todo.isCompleted ? 'text-decoration-line-through' : 'role'}
            key={index}
        >
            <div key={todo.id} onClick={() => onCompleted(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                <TiEdit
                    onClick={() => setEdit({id: todo.id, value: todo.text})}
                    className='edit-icon'
                />
            </div>
        </div>
    ))
}

export default Todo;