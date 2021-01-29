import React, {useState} from "react";
import TodoForm from "./todoForm";
import Todo from "./todo";

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        console.log(todos)

    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prevState => prevState.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    const onCompleted = id => {
        // debugger;
        console.log(id)
        let updatesTodo = todos.map((todo, index) => {
            if (todo.id === id) {
                todo.isCompleted = ! todo.isCompleted
            }
            return todo;
        })
        setTodos(updatesTodo)
    }

    return (
        <div>
            <h1 className='text-sm-center'>Whats plans Today?</h1>
            <TodoForm handleSubmit={addTodo} />
            <hr/>
            <Todo todos={todos} onCompleted={onCompleted} updateTodo={updateTodo} removeTodo={removeTodo}/>
        </div>
    )
}

export default TodoList;