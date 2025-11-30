import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  setInterval(increaseCount, 1000);

  return <div>
    {count}
  </div>
}

export default App