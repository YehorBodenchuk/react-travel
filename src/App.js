import React from 'react';
import axios from 'axios';

function App() {

  React.useEffect(() => {
    const fetchHello = async () => {
      const response = await axios.get('http://localhost:8080/api/hello');
      console.log(response)
    }

    fetchHello().then(r => console.log('r: ', r))
  }, [])

  return (
    <div className="App">
      <p>Hello world!</p>
    </div>
  );
}

export default App;
