import React from "react"

export default function Rating({children}){

    const roundedValue = Math.round(children)

    const stars = '★'.repeat(roundedValue) + '☆'.repeat(5 - roundedValue)

    return(

    <div style={{ fontSize: '2em', color: '#ffd700' }}>
      {stars}
    </div>

    )
}