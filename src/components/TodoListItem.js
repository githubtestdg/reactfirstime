import { memo } from "react"

function TodoListItem({index,todo}){
    console.log('todolistitem rendered')
    return(
            <li>
                {todo}
            </li>
    )
}


export default memo(TodoListItem)