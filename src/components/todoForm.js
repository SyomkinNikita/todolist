import React, {useState} from "react";

const TodoForm = props => {
    const [input, setInput] = useState('')

    const handleSubmit = event => {
        event.preventDefault();

        props.handleSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input,
            date: new Date().toLocaleTimeString(),
            isCompleted: false
        })

    }


    return (
        <div className='added-page'>
            <div className='container page'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <input
                                    type="text"
                                    className='form-control form-control-lg'
                                    placeholder='New Todo'
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                />
                            </fieldset>
                            <button
                                className="btn btn-lg btn-primary pull-xs-right"
                                type="submit"
                            >
                                Add
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoForm