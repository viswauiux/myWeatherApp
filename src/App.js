import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var arr = [23,34,54,0,4,7];

/*   function arrry(ar,maxi){
    var output = []
    var maxIndex = maxi;

    for (let index = 0; index < maxi; index++) {
      output.push(arr[index])
      
    }
    return output
    

  }
  console.log(arrry(arr,4)); */

  function max(ar){
    var max;
    for(var i=0;i<=ar.length-1;i++){
      max = ar[i];
      if(ar[i]<max){
        max=ar[i]
      }
    }
    return max
  }
  console.log(max(arr));
 
  return (
    <div className="App">
       HELLO
    </div>
  );
}

export default App;
