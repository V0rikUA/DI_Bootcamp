import TodoList from "./features/todos/TodoList";
import Users from "./features/users/Users";
import "./App.css";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <div className="App">
      {/* <Users /> */}
      <PostsList />
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
