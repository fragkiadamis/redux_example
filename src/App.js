import Posts from './components/Posts.js';
import Postform from './components/Postform.js';
import './App.css';

function App() {
  return (
    <div className="App">
    <Postform/>
    <hr></hr>
    <Posts/>
    </div>
  );
}

export default App;
