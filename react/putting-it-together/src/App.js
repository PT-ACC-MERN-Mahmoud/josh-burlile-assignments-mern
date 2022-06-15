import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
        firstName = { "Ash" } 
        lastName = { "Ketchum" } 
        initialAge = { 12 } 
        hairColor = { "black" } 
      />
      <PersonCard 
        firstName = { "Samuel" } 
        lastName = { "Oak" } 
        initialAge = { 45 } 
        hairColor = { "gray" } 
      />
      <PersonCard 
        firstName = { "Jessie" } 
        lastName = { "Rocket" } 
        initialAge = { 25 } 
        hairColor = { "pink" } 
      />
      <PersonCard 
        firstName = { "James" } 
        lastName = { "Rocket" } 
        initialAge = { 26 } 
        hairColor = { "purple" } 
      />
    </div>
  );
}

export default App;

