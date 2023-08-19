import React from "react";

function Class() {
  var ar1 = [
    {
      name:"viswa",
      location:"hyderabad"
    },
    {
      name:"Sharon",
      location:"neredmet"
    },
    {
      name:"Vani",
      location:"hyderabad"
    }
  ];
   var ar2  = ar1.some((item)=>item.location==="hyderabad")
  console.log(ar2);
  return <div>Class</div>;
}

export default Class;
