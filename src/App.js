import axios from "axios";

import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://api.github.com/users/ilaydayilmazz')
      .then(response => response.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">CV</h1>
      <div className="mt-8">
        <p><strong>Adı:</strong> {data.name}</p>
        <p><strong>İletişim:</strong> {data.email}</p>
        <p><strong>Biyografi:</strong> {data.bio}</p>
      </div>
    </div>
  );
}

export default App;
