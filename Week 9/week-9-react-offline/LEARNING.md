# Understanding React Hooks: useState and useEffect

## 1. useState
`useState` is a Hook that lets you add React state to function components.

### Syntax
```javascript
const [state, setState] = useState(initialValue);
```
- **state**: The current state value.
- **setState**: A function that updates the state.
- **initialValue**: The initial value of the state.

### Example
```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## 2. useEffect
`useEffect` lets you perform side effects in function components. Side effects include data fetching, subscriptions, or manually changing the DOM.

### Syntax
```javascript
useEffect(() => {
  // Your code here (effect)

  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]);
```

### Key Concepts
1.  **No Dependency Array**: Runs after every render.
    ```javascript
    useEffect(() => {
      console.log("Runs on every render");
    });
    ```
2.  **Empty Dependency Array (`[]`)**: Runs only once (on mount).
    ```javascript
    useEffect(() => {
      console.log("Runs only on mount");
    }, []);
    ```
3.  **With Dependencies (`[prop, state]`)**: Runs on mount and whenever a dependency changes.
    ```javascript
    useEffect(() => {
      console.log("Runs when count changes");
    }, [count]);
    ```
4.  **Cleanup Function**: Runs when the component unmounts or before the effect runs again.
    ```javascript
    useEffect(() => {
      const timer = setInterval(() => console.log("Tick"), 1000);
      return () => clearInterval(timer); // Cleanup
    }, []);
    ```

## Assignments
Go to `src/components` and check `Assignment1.jsx`, `Assignment2.jsx`, and `Assignment3.jsx` to practice!
