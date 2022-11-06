import Todo from './Todo'
import styles from '../styles/Todos.module.css'

export default function Todos({ todos, removeTodo }) {
    return (
        <div className={styles.todos}>
            <div className={styles.inside}>
                {(todos.length > 0) ? (todos.map(todo => <Todo key={todo.id} data={todo} removeTodo={removeTodo}/>)) : <p className={styles.info}>You don't have any tasks</p>}
            </div>
        </div>
    )
}