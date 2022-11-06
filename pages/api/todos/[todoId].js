import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'todo_list'
})

export default function handler(req, res) {
    const { todoId } = req.query

    switch (req.method) {
        case 'GET':
            connection.query('SELECT * FROM todos WHERE id =?', [todoId], (error, results) => {
                if (error) return res.status(404).json(error)
                res.status(200).json(results)
            })
            break
        case 'DELETE':
            connection.query('DELETE FROM todos WHERE id =?', [todoId], (error) => {
                if (error) return res.status(404).json(error)
                res.status(200).end()
            })
            break
    }
}