import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card col-6 offset-3">
        <h1 className="card-header text-center">Hello Dojo!</h1>
        <div className="card-body">
          <h3 className="h3">Things I need to do:</h3>
          <ul className="list-group">
            <li className="list-group-item">Learn React</li>
            <li className="list-group-item">Workout</li>
            <li className="list-group-item">Practice Algorithms</li>
            <li className="list-group-item">Write My Resume</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
