const Challenger = () => {
    const a = 5
    const b = 5
    
  const handleSoma = () => {
    const Total = a + b
    console.log(`O total da soma é ${Total}`)
  }

  return (
    <div>
        <h1>Challenger</h1>
        <h2>A = {a}</h2>
        <h2>B = {b}</h2>
        <button onClick={handleSoma}>Soma</button>
        
    </div>
  )
}

export default Challenger