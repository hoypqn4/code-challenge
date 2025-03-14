import react, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

function TodoItem(props){
    const {todoIndex} = useParams()
    const[redirect, setRedirect] = useState(false)
    const allTodos = props.todoList

    console.log(allTodos[todoIndex])

    function renderRedirect(){
        if (redirect){
            return <Redirect to='/todo'/>
        }
    }
    
    return(
        <div>
            <h3>Description: {allTodos[todoIndex].description}</h3>
            <h3>Category: {allTodos[todoIndex].category}</h3>
            <h3>Content: {allTodos[todoIndex].content} </h3>
            {renderRedirect()}
            <button onClick={()=>setRedirect(true)}> Back </button>
        </div>
    )
}

export default connect(state=>({todoList: state}),{})(TodoItem)