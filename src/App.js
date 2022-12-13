import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";

import Posts from './components/posts';
import Post from './components/post';

function App() {
  return (
    <Router>
      <div>
        <Routes >
          <Route exact path="/" element={<Posts  />} />
          <Route exact path="/posts/:id" element={<Post />} />
        </Routes >
      </div>
    </Router>
  );
}

export default App;