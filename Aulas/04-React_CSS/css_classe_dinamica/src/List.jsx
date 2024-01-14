/* eslint-disable react/prop-types */
import '../src/assets/List.css'
const List = ({ marca, modelo }) => {
  return (
    <div className={marca === 'ford' ? 'blue_text' : 'red_text'}>
        <h1>{marca}</h1>
        <p>{modelo}</p>
        
    </div>
  )
}

export default List