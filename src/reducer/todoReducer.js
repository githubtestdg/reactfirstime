

function reducer(state,action){
    if(action.type == 'submit_todo'){
        return{
            ...state,
            todo: action.value
        }
    }else if(action.type === 'submit_todos'){
        return{
            ...state,
            todos:[
                ...state.todos,
               action.todo
            ]
        }
    }else if (action.type === 'set_search'){
        return{
            ...state,
            search: action.value
        }
    }
}


export default reducer