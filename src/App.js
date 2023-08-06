import "./App.css";
import { useEffect, useState } from "react";

import api from './Api/posts'

function App() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await api.get("https://dummyjson.com/quotes");
        setPosts(responce.data);
        console.log(responce.data.quotes.map(item=>console.log(item)));
      } catch (err) {
        if(err.responce){
         console.log(err.responce.status);
        }
        console.log(err.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App " style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      
      {
      posts && ( posts.quotes.map((item)=>{return(<div key={Math.random()} className="card border border-danger" style={{width:" 18rem"}}>
        <div className="card-body">
          <p className="card-text">
           {item.quote}
          </p>
          <h5 className="card-title">Auther: {item.author}</h5>
          <h3></h3>
        </div>
      </div>)}))
      }
    </div>
  );
}

export default App;
