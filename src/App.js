import "./App.css";
import { useEffect, useState } from "react";

import axios from "axios";

import Table from "./components/Table";

function App() {
  const [data, setData] = useState();



    



  const fetchData = async () => {
    try {
      const responce = await axios
        .get(
          "https://f68370a9-1a80-4b78-b83c-8cb61539ecd6.mock.pstmn.io/api/v1/get_market_dat"
        )
        .then((data) => data.data.data.reverse().splice(0,7));
      console.log(responce);
      setData(responce);
    } catch (err) {
      if (err.responce) {
        console.log(err.responce.status);
      }
    }
  };
  useEffect(() => {
    fetchData();
    return () => {
      console.log("Hello");
    };
  }, []);

  return (
    <>
      {data && (
          <Table data={data}></Table>
      )
            
      }
    </>
  );
}

export default App;
