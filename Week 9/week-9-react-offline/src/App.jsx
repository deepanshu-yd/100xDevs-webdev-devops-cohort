import { useState } from "react";
function App() {
  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <ToggleMessage />
      <ToggleMessage />
      <ToggleMessage />
    </div>
  );
}

const ToggleMessage = () => {
  let [notificationCount, setNotificaitonCount] = useState(0);

  console.log("re-render");

  function increment() {
    setNotificaitonCount(notificationCount + 1);
  }

  return (
    <div>
      <button onClick={increment}>
        Increase count
      </button>
      {notificationCount}
    </div>
  );
};

export default App;