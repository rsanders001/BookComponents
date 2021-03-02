import {Posts} from './Components/Posts/Posts';
import {Books} from './Components/Books/Books';
import './App.scss';
import Post from "./Components/Post/Post";

function App() {
  return (
    <div className="App">
      <h1>Our First App</h1>
      <hr/>

      <Posts />

    </div>
  );
}

export default App;
