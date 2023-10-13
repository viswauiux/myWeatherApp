import React, { useState } from 'react'
import TableHeader from "./TableHeader";
import Open from "./Open";
import Close from "./Close";

function Table({data}) {
    const [currentpage,setCurrentPage] = useState(1)

    const recordPerPage = 7;
    const lastIndex = currentpage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = data.slice(firstIndex,lastIndex);
    const nPage = Math.ceil(data.length/recordPerPage)

    const red = "red"
    const green = 'green'

    console.log(records);
    function nextPage(){
        if(currentpage!==nPage){
            setCurrentPage(currentpage + 1)

        }

      }
    function prevPage(){
        if(currentpage!==1){
            setCurrentPage(currentpage - 1)

        }
      }
  return (
      <>
      <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
        <table >
          <thead>
            <tr>
              <th>Date</th>
              {records.map((item) => {
                  return (
                      <TableHeader key={item.volume}  date={item.date}></TableHeader>
                      );
                    })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Open</th>
              {records.map((item,index) => {
                  return (records[index-1]?.open<item.open?
                    <Open key={item.volume} color={green} open={item.open}></Open>:
                    <Open key={item.volume} color={red} open={item.open}></Open>
                    
                    );
                })}
            </tr>
            <tr>
            <th>Close</th>
              {records.map((item,index) => {
                  return (records[index-1]?.close<item.close?
                    <Close key={item.volume} color={green} close={item.close}></Close>:
                    <Close key={item.volume} color={red} close={item.close}></Close>
                    );
                })}
            </tr>
          </tbody>
        </table>
       <div style={{display:'flex',justifyContent:'center'}}>
        
        <button onClick={()=>prevPage()}>Previous</button>
        <button onClick={()=>nextPage()}>Next</button>
        </div>
        </div>
        </>
  )
}

export default Table