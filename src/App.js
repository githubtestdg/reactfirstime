
import React, { useReducer } from "react";
import todoReducer from './reducer/todoReducer'
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";


export default function App() {

    console.log('app rendered')

    const [state,dispacth] = useReducer(todoReducer,{
        todos : [],
        todo : ''
    })

    
    function submitHandle(e) {
        e.preventDefault()
        dispacth({
            type:'submit_todos',
            todo : state.todo
        })
    }

    function getdata (e){
        dispacth({
            type:'submit_todo',
            value: e.target.value
        })
    }

  return (
    <>
        <AddTodo submitHandle={submitHandle} getData={getdata} todo={state.todo}/>
        <TodoList todos={state.todos} />
    </>
    )
}