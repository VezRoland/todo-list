import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'todo_list'
})

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            connection.query('SELECT * FROM todos', (error, results) => {
                if (error) return res.status(404).json(error)
                res.status(200).json(results)
            })
            break
        case 'POST':
            connection.query('INSERT INTO todos (text, completed) VALUES(?, ?)', [req.body.text, false], (error) => {
                if (error) return res.status(404).json(error)
                res.status(200).end()
            })
            break
    }
}