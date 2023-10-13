import React from 'react'
import TableHeader from "./TableHeader";
import Open from "./Open";
import Close from "./Close";

function Table({data}) {


    function nextPage(){
        console.log();
      }
    function prevPage(){
        console.log();
      }
  return (
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
        <button onClick={()=>nextPage()}>Next</button>
        <button onClick={()=>prevPage()}>Previous</button>
        </>
  )
}

export default Table