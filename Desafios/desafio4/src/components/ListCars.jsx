import styles from './ListCars.module.css'

const ListCars = ({ marca, modelo, ano }) => {
  return (
    <div className={styles.container}>
      <div className={styles.div_listcars}>
        <h1>{marca}</h1>
        <p>{modelo}</p>
        <p>{ano}</p>
      </div>
    </div>
  );
}

export default ListCars