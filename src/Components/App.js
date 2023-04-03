
import React, { useEffect, useState } from 'react';
import { getUserData } from '../API/api';

// Pub->sub
// TODO: check what is promise -> async/await
function App() {
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log('inside effect');
    getUserData().then((response) => {
      console.log('data is here', response);;
      setUserData(response);
      setLoading(false);
    }).catch(err => {
      //
    })
  }, []);
 
  if (loading) {
    return <div>App is loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">CV of {userData.name}</h1>

    </div>
  );
}

export default App;

