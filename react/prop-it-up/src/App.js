import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = { "Ash" } lastName = { "Ketchum" } age = { 12 } hairColor = { "black" } />
      <PersonCard firstName = { "Samuel" } lastName = { "Oak" } age = { 45 } hairColor = { "gray" } />
      <PersonCard firstName = { "Jessie" } lastName = { "Rocket" } age = { 25 } hairColor = { "pink" } />
      <PersonCard firstName = { "James" } lastName = { "Rocket" } age = { 26 } hairColor = { "purple" } />
    </div>
  );
}

export default App;
