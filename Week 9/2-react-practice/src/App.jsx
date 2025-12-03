import { useState, useEffect } from "react";

function App() {
  return <div>
    <Timer />
  </div>
}

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000)
  }, []);

  return <div>{seconds} seconds elapsed</div>
}

export default App