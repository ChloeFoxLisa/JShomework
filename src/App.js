import './App.css';
import "./message.css";
import { MessageList, BotMessage } from './Message';
import { useCallback, useEffect, useState } from 'react';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [valueText, setValueText] = useState("");
  const [valueAuthor, setValueAuthor] = useState("");

  const changeMessageList = (newMessage) => { setMessageList([...messageList, newMessage]) }
  
  const handleTextChange = useCallback((e) => {
    setValueText(e.target.value);
  }, []);

  const handleAuthorChange = useCallback((e) => {
    setValueAuthor(e.target.value);
  }, []);

  useEffect(() => {
    BotMessage({ messageList });
  }, [messageList]);


  const handleClick = () => {
    changeMessageList({ Author: valueAuthor, Text: valueText });
    setValueAuthor('');
    setValueText('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={valueAuthor} placeholder="author" onChange={handleAuthorChange} className="author"></input>
        <textarea type="text" value={valueText} placeholder="text" onChange={handleTextChange} className="text"></textarea>
        <button onClick={handleClick} className="button">Click</button>
        <MessageList messageList={messageList} />
      </header>
    </div>
  );
}

export default App;
