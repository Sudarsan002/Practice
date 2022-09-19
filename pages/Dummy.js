import React,{useState} from "react"

function App() {
  const [showText, setShowText] = useState(false)
  const handleMouseEnter = e => {
    e.target.style.background = "black"
    setShowText(true)
  }
  const handleMouseLeave = e => {
    e.target.style.background = "white"
    setShowText(false)
  }

  return (
    <div className="App">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="button"
      >
        Hover over me
      </button>
      {showText && <p className="message">Now you can see me!</p>}
    </div>
  )
}

export default App
