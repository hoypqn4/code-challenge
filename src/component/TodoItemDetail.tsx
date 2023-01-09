import { useParams, useHistory } from 'react-router-dom'
import { shallowEqual, useSelector} from 'react-redux'
import { TodoItemList} from '../interface/models'

interface ParamTypes {
    todoId: string
}

const TodoItemDetail = () => {
    let history = useHistory();
    const { todoId } = useParams<ParamTypes>()
    const { description, category, content} = useSelector((state: TodoItemList) => state[todoId], shallowEqual)    

    const handleClick = () => {
        history.push("/todo");
    }
    
    return(
        <div>
            <h3>Description: {description}</h3>
            <h3>Category: {category}</h3>
            <h3>Content: {content} </h3>
            <button onClick={handleClick}> Back </button>
        </div>
    )
}

export default TodoItemDetail