
const Event = () => {
    
    const handleEvent = () => {console.log('saiu no clique')}
    
    const RenderEvent = (x) => {
        if (x) {
            return <h2>Renderizando se True</h2>
            
        } else {
            return <h2>renderizando de False</h2>
            
        }
    }

    return (
        <div>
            <button onClick={handleEvent}>Event</button>
            {RenderEvent(true)}
            {RenderEvent(false)}

        </div>
    )
}

export default Event