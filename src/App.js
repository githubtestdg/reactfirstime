
import React, { useCallback, useMemo, useReducer, useState } from "react";
import todoReducer from './reducer/todoReducer'
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";


export default function App() {

    console.log('app rendered')

    const [count, setCount] = useState(0)

    const [state,dispacth] = useReducer(todoReducer,{
        todos : [],
        todo : '',
        search : ''
    })

   
    
    const  submitHandle =  useCallback(e => {
        e.preventDefault()
        dispacth({
            type:'submit_todos',
            todo : state.todo
        })
    },[state.todo])

    const getdata = useCallback( e => {
        dispacth({
            type:'submit_todo',
            value: e.target.value
        })
    },[])

    const searchHandle = e =>{
        dispacth({
            type:'set_search',
            value: e.target.value
        })
    }


    const filteredTodos = useMemo( () => {
        return state.todos.filter(todo  => todo.toLocaleLowerCase('tr').includes(state.search.toLocaleLowerCase('tr')))
    },[state.todos, state.search])  

  return (
    <>
        <p>{count}</p>
        <button onClick={ () => setCount(count => count + 1)}>Arttır</button>
        <br />
        <br />
        <hr />
        <AddTodo submitHandle={submitHandle} getData={getdata} todo={state.todo}/>
        <hr />
        {state.search}
        <input type="search" value={state.search} placeholder="Todolarda ara" onChange={searchHandle} />
        <hr />
        <TodoList todos={filteredTodos} />
        </>
    )
}