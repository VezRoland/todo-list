import { useRef } from 'react'
import { useQueryClient, useQuery, useMutation } from 'react-query'
import Todos from '../components/Todos'
import { getTodos, addTodo, delTodo } from '../fetchers'

import styles from '../styles/Main.module.css'

export default function Home() {
    const queryClient = useQueryClient()
    const { isLoading, isError, data, error } = useQuery('todos', getTodos)
    const input = useRef()

    const newTodo = useMutation(addTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos')
        }
    })

    const removeTodo = useMutation(delTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos')
        }
    })

    if (isError) return <p>Error: {error.message}</p>

    if (isLoading) return <p>Loading...</p>

    return (
        <div className={styles.todo_list}>
            <h1 className={styles.title}>Todo List</h1>
            <form onSubmit={(event) => { event.preventDefault(); newTodo.mutate(input.current.value) }}>
                <input type='text' placeholder='Type task title here...' ref={input}/>
            </form>
            <Todos todos={data} removeTodo={removeTodo}/>
        </div>
    )
}