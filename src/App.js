import "./App.css";
import { useEffect, useState } from "react";

import axios from "axios";
import TableHeader from "./components/TableHeader";
import Open from "./components/Open";
import Close from "./components/Close";

function App() {
  const [data, setData] = useState();
  const [sorted, setSorted] = useState();

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
        <>
        <table >
          <thead>
            <tr>
              <th>Date</th>
              {data.map((item) => {
                return (
                  <TableHeader key={item.volume} date={item.date}></TableHeader>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Open</th>
              {data.map((item) => {
                return (
                  <Open key={item.volume} open={item.open}></Open>
                );
              })}
            </tr>
            <tr>
            <th>Close</th>
              {data.map((item) => {
                return (
                  <Close key={item.volume} close={item.close}></Close>
                );
              })}
            </tr>
          </tbody>
        </table>
        <button>Next</button>
        <button>Previous</button>
        </>
      )
            
      }
    </>
  );
}

export default App;
