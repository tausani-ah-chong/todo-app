import './App.css'

function App(): JSX.Element {
	return (
		<div className="container">
			<header>
				<h1>Todo App</h1>
			</header>
			<main>
				<form action="" className="todo">
					<input type="text" placeholder="What do you want to achieve?" />
				</form>
			</main>
		</div>
	)
}

export default App
