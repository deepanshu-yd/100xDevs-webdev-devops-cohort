import { useEffect, useState } from "react"

function App () {
  const [count, setCount] = useState(1);

  function increaseCount () {
    setCount(currentValue => currentValue + 1);
  }

  useEffect(function(){
    console.log("above setInterval")
    setInterval(increaseCount, 1000);
  }, [])

  return <div>
    {count}
  </div>
}

export default App