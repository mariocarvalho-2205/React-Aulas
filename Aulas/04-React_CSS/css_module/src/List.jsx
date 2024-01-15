/* eslint-disable react/prop-types */
import styles from  './List.module.css'

const List = ({ nome, idade}) => {

    function ageClass ( idade ) {
        if (idade > 30 && idade <= 50) {
            return styles.itemverde
        } else if ( idade < 18){
            return styles.itemrosa
        } else {
            return styles.itemlaranja
        }
    }

  return (
    <div >
        {/* <h2 className={idade > 18 ? styles.blueList : styles.redList}>{nome}</h2>
        <p>{idade}</p> */}

        <div className={ageClass(idade)}>
            <h3>{nome}</h3>
            <h4>{idade}</h4>
        </div>
    </div>
  )
}

export default List