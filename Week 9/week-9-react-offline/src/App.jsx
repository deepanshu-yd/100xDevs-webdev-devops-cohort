import { useState } from "react"
function App () {
  return (
    <div style={{background: "#dfe6e9", height: "100vh"}}>
      <ToggleMessage />
      <ToggleMessage />
      <ToggleMessage />
    </div>
  )
}

const ToggleMessage = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={ () => { setVisible (!isVisible)}}>
        Toggle Message
        </button>
        {isVisible && <p>This Message is conditionally rendered!</p>}
    </div>
  );
};

export default App;