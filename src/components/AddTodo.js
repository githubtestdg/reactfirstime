import { memo } from "react";

function AddTodo ({todo,submitHandle,getData}) {
    console.log('Add Todo rendered')
    return ( 
        <form onSubmit={submitHandle}>
        <input
        value={todo} // ...force the input's value to match the state variable...
        onChange={getData} // ... and update the state variable on any edits!
        />
        <button disabled={!todo} type='submit'>Gönder</button>
        </form>
     );
}
 
export default memo(AddTodo)