import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";

import Posts from './components/posts';
import Post from './components/post';
import TodoList from './components/todoList';

function App() {
  return (
    <Router>
      <div>
        <Routes >
          <Route exact path="/posts" element={<Posts  />} />
          <Route exact path="/posts/:id" element={<Post />} />
          <Route exact path="/" element={<TodoList />} />
        </Routes >
      </div>
    </Router>
  );
}

export default App;