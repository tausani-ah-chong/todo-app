import './App.css'
import Axios from 'axios'
import { useState, useEffect } from 'react'

const apiRoute = 'http://localhost:5000/api/v1'

function App(): JSX.Element {
	type Todo = {
		id: number
		text: string
		done: boolean
	}

	const [todos, setTodos] = useState([])

	useEffect(() => {
		Axios(apiRoute)
			.then((result) => {
				setTodos(result.data)
			})
			.catch(() => {
				console.log('yeah nah')
			})
		console.log('helo')
	}, [])

	return (
		<div className="container">
			<header>
				<h1>Todo App</h1>
			</header>
			<main>
				<form action="" className="todo">
					<input type="text" placeholder="What do you want to achieve?" />
				</form>
				<ul className="todos">
					{todos.map((todo: Todo) => {
						return (
							<li key={todo.id}>
								<input id="cb" type="checkbox" />
								<label htmlFor="cb">{todo.text}</label>
							</li>
						)
					})}
				</ul>
			</main>
		</div>
	)
}

export default App
