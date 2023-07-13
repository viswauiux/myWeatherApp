import './App.css';
import { useEffect, useState } from 'react';

function App() {
  for(let i =0;i<=10;i++){
    if(i===5)continue;
    console.log(i);
  }
  return (
    <div className="App">
       
    </div>
  );
}

export default App;
