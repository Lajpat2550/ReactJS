
import { Provider } from 'react-redux'
import './App.css'
import AddTodo from './App/Components/AddTodo'
import Todo from './App/Components/Todo.jsx'
import { store } from './App/Store.js'

function App() {

  return (
    <Provider store={store}>
      <div className="w-[500px] h-[500px] overflow-hidden rounded-2xl bg-gray-100 flex flex-col justify-center items-center">
        <AddTodo value={"ADD"} />
        <Todo />
      </div>
    </Provider> 
  )
}

export default App
