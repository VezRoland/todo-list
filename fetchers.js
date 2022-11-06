import axios from 'axios'

export async function getTodos() {
    const res = await axios.get('http://localhost:3000/api/todos')
    return res.data
}

export async function addTodo(text) {
    const res = await axios.post('http://localhost:3000/api/todos', { text: text })
    return res.data
}

export async function delTodo(todoId) {
    const res = await axios.delete(`http://localhost:3000/api/todos/${todoId}`)
    return res.data
}