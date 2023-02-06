import './App.css';

import InputEvents from './events/InputEvents'
// import MovementEvents from './events/MovementEvents'
import './events/Events.css'

import Card from './Card.js'
import './Card.css'

function App() {
  return (
    <div className="App">
      <InputEvents/>
      {/* <MovementEvents/> */}
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
