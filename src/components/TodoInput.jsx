import { useState } from "react"

export function TodoInput(props) {
    const {handleAddTodo} = props

    const [inpVal, setInpVal] = useState('')

    return (
        <div className="input-container">
            <input value = {inpVal} onChange = {(e) => {
                setInpVal(e.target.value)
            }}  placeholder="Add Task" />
            <button onClick={() => {
                if (!inpVal) {return}
                handleAddTodo(inpVal)
                setInpVal('')
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>

        </div>
    )
}