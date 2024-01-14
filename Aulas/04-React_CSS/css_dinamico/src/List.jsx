/* eslint-disable react/prop-types */
// import styles from '../src/List.module.css'

const List = ({ name, age }) => {
  return (
    <div style={age > 18 ? {color: 'green'} : {color: 'brown'}}>
        <h4 >{name}</h4>
        <p>{age}</p>
        <hr />

    </div>
  )
}

export default List