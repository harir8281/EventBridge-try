import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [data, setData] = useState();

  const fetchData = () => {
    axios.get('http://localhost:5001')
      .then(response => {
        // Handle the successful response here
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={containerStyle}>
      <div style={leftColumnStyle}>
        <Form onRefetch={fetchData} />
      </div>
      <div style={rightColumnStyle}>
        <List data={data} />
      </div>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
};

const leftColumnStyle = {
  flex: '1',
  marginRight: '20px',
};

const rightColumnStyle = {
  flex: '1',
};

export default App;
