import { memo } from "react";
import TodoListItem from "./TodoListItem";

function TodoList({todos}){
    console.log('todolist rendered')
    return(
        <ul>
            {todos.map((todo,index)=> <TodoListItem key={index} todo={todo}/>)}
        </ul> 
    )
}

export default memo(TodoList)