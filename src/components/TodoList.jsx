import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const {todos, selectedTab} = props

    const tab = selectedTab

    console.log("Open todos:", todos.filter(todo => !todo.complete));
    console.log("Completed todos:", todos.filter(todo => todo.complete));


    const filterTodoList = tab === 'All' ? 
        todos :
        tab === 'Open' ?
        todos.filter(val => !val.complete) :
        todos.filter(val => val.complete)


    return (
        <>
            {filterTodoList.map((todo, todoIndex) => {
                return (
                    <TodoCard key = {todoIndex}
                    todoIndex = {todos.findIndex(val => val.input == todo.input)}
                    todo = {todo}
                    {...props}/>
                )
            })}
        
        </>
    )
}