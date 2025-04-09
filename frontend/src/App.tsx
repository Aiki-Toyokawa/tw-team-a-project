import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [msg, setMsg] = useState<string>('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/`)
    .then(res => res.json())
    .then(data => setMsg(data.message))
    .catch(console.error);
  }, []);

  return (
    <div className="App">
      <h1>FastAPI + React on Windows</h1>
      <p>バックエンドからのメッセージ: {msg}</p>
    </div>
  );
}

export default App;