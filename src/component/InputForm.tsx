import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux'
import { TodoItemPreview } from '../interface/models'
import { RootState } from '../redux/store'

const InputForm = () => { 
    const [todoItem, setTodoItem] = useState<TodoItemPreview>({ description:"", category:"", content:""})
    const todoStore = useSelector((state: RootState) => state)  


    const dispatch = useDispatch()

    const handleOnChange = (key: string) => (event: React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>{
        const newValue = event.currentTarget.value
        setTodoItem({...todoItem, [key]: newValue})
    }


    const handleSubmit = () => {
        dispatch(addTodo(todoItem))
        setTodoItem({ description:"", category:"", content:""})
        console.log(todoStore)
    }

    return(
        <div>
            <form>
                <h2>
                    Descirption: 
                    <input 
                        value={todoItem.description}
                        onChange={handleOnChange("description")}
                    />
                </h2>
                <h2>
                    Category: 
                    <select 
                        value={todoItem.category}
                        onChange={handleOnChange("category")}
                    >
                        <option value="">  </option>
                        <option value="css"> css </option>
                        <option value="html"> html </option>
                        <option value="javascript"> javascript </option>
                    </select>
                </h2>
                <h2>
                    Content: 
                    <textarea 
                        value={todoItem.content}
                        onChange={handleOnChange("content")}
                    />
                </h2>
                <button 
                    type="button" 
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default InputForm