import "./App.css";
import { useEffect, useState } from "react";

import api from './Api/posts'

function App() {
  const [data, setData] = useState();
  const Api = "https://api.themoviedb.org/3/discover/movie"
  const image = "https://images.tmdb.org/t/p/w500"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await api.get(Api,{
          params:{
            api_key:'e5c140e5d7cddcc37ecdcf27a8535994'
          }
        });
        console.log(responce.data.results)
        setData(responce.data.results);
        // console.log(responce.data.quotes.map(item=>console.log(item)));
      } catch (err) {
        if(err.responce){
         console.log(err.responce.status);
        }
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App " style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      
      {
        data && data.map(item=>{
          return(<img key={item.id} src={image+item.backdrop_path} alt="" />)
        })
      }
    </div>
  );
}

export default App;
