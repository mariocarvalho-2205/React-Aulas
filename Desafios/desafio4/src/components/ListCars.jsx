import styles from './ListCars.module.css'

const ListCars = ({ marca, modelo, ano }) => {

  function Ano (ano) {
    if (ano >= 2020) {
      return styles.semi_novo
    } else if ( ano < 2020 && ano > 2015 ) {
      return styles.usado
    } else {
      return styles.antigo
    }
  }

  return (
    <div className={styles.container}>
      <div className={Ano(ano)}>
        <h1>{marca}</h1>
        <p>{modelo}</p>
        <p>{ano}</p>
      </div>
    </div>
  );
}

export default ListCars