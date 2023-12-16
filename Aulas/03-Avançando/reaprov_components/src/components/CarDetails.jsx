import React from 'react'

const CarDetails = ({brand, modelo, novo}) => {
  return (
    <div>
        <ul>
            <li>{brand} {modelo} {novo} <span> {novo ? <i> - Esse é novo</i> : <strong> - Esse é usado</strong>}</span></li>
              
        </ul>  
    
    </div>
  )
}

export default CarDetails