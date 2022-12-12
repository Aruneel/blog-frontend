import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";

import Posts from './components/posts';
import Post from './components/post';

function App() {
  return (
    <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr /> */}

        {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
        <Routes >
          <Route exact path="/" element={<Posts  />} />
          <Route exact path="/posts/:id" element={<Post  />} />
          {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Routes >
      </div>
    </Router>
  );
}

export default App;