import React, { useState } from 'react'

function TableHeader({date}) {
    const [d] = useState([
         new Date(date).getDate(),
         new Date(date).getMonth(),
         new Date(date).getFullYear(),
    ])

    const [completeDate] = useState(d.join('/'))
    console.log(completeDate)

  return (
   <>
   <th>{completeDate}</th>
   </>
  )
}

export default TableHeader