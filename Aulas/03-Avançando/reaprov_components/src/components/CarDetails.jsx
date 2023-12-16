import React from 'react'

const CarDetails = ({brand, modelo, novo}) => {
  return (
    <div>
        <ul>
            <li>{brand} {modelo} {novo} <span> {novo && ' - Esse é novo'}</span></li>
              
        </ul>  
    
    </div>
  )
}

export default CarDetails