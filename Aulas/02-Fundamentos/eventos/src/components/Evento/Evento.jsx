const Evento = () => {
     const handleMyClick = (e) => {
        console.log('clique' + e.target)
        
     }
    return (
        <div>
            <button onClick={handleMyClick}>Buttom</button>
            <button onClick={() => console.log('outra função')}>outra função</button>
            <button onClick={() => {
                if(true) {
                    console.log('nunca faça isso')
                }
            }}>nao faça isso</button>
        </div>
    )
}

export default Evento