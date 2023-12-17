import React from 'react';
import { Box } from '@mui/material';
import './App.css';


function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', border: '1px solid black' }}>

      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '50vh', justifyContent: 'flex-end', aligmItens: 'flex-end' }}>

        <div style={{ width: '50%', backgroundColor: 'pink' }}>
          <div style={{ width: '50px', height: '50px', backgroundColor: 'white' }}></div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '50%', backgroundColor: 'gray', alignItems: 'flex-end' }}>
          <div style={{ width: '50px', height: '50px', backgroundColor: 'white' }}></div>
        </div>

      </div>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '50vh'}}>
        <div style={{ display: 'flex', width: '50%', backgroundColor: 'black', alignItems: 'flex-end'  }}>
          <div style={{ width: '50px', height: '50px', backgroundColor: 'white' }}></div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '50%', backgroundColor: 'brown', justifyContent: 'flex-end', alignItems:'flex-end' }}>
          <div style={{ width: '50px', height: '50px', backgroundColor: 'white' }}></div>
        </div>

      </div>
    </div>
  );
}

export default App;
