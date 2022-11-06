import styles from '../styles/Todo.module.css'

export default function Todo({ data, removeTodo }) {
    return (
        <div className={styles.todo}>
            <div className={styles.text}>
                <p className={styles.date}>{new Date(data.create_date).toLocaleString('hu')}</p>
                <p className={styles.title}>{data.text}</p>
            </div>
            <button onClick={() => removeTodo.mutate(data.id)} className={styles.remove}>Delete</button>
        </div>
    )
}