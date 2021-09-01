import Message from './Message';
import './App.css';

function App({ name }) {
  return (
    <div className="App">
      <header className="App-header">
        My first react app<h3>Hello, {name}!</h3>
      </header>
      <Message />
    </div>
  );
}

export default App;
