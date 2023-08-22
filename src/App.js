import './App.css';
import { useEffect, useState } from 'react';
import Class from './Class';

function App() {

    var ob1 = {name:"viswa"};

    function abc(location){
      console.log("Hello "+this.name+ " i am from "+location);
    }
    var bind2 = abc.bind(ob1)
    bind2("London")
    bind2("Hyderabad")

 
 
   
  return (
    <div className="App">
      <Class></Class>
    </div>
  );
}

export default App;
