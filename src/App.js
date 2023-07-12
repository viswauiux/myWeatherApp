import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var [count,setCount]=useState(0)
  var t1 = setInterval(() => {
    setCount(count+1)

    
  }, 1000);
  
  useEffect(()=>{
    console.log(`After Mounting ${count}`);
    return()=>{
      clearInterval(t1)
      console.log(`Before Mounting ${count}`);
                }

        })
  return (
    <div className="App">
      <h1>{count}</h1>
    </div>
  );
}

export default App;
