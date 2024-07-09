import {useState, useEffect} from 'react'

const List = ({ getItems}) => {
    const [ count, setCount] = useState(0)
    const [ items, setItems ] = useState([])

    useEffect(() => {

        console.log("Buscando items do db... ", count + 1)
        setItems(getItems)

    }, [getItems])
    
  return (
    <div>
        
        

        {items && items.map((item, index) => (
            <p key={index}>{item}</p>
        ))}



    </div>
  )
}

export default List