import React, { useState } from 'react'

function TableHeader({date}) {
    const [d] = useState({
        date: new Date(date).getDate(),
        month: new Date(date).getMonth()+1,
        year: new Date(date).getFullYear(),
})
 
    const [completeDate] = useState(Object.values(d).join('/'))

  return (
   <>
   <th>{completeDate}</th>
   </>
  )
}

export default TableHeader