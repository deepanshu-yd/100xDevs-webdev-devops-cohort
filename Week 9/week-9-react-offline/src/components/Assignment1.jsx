import { useState } from "react";

// Create a Counter component using useState
// It should have a count state variable initialized to 0
// And two buttons to increment and decrement the count

export function Assignment1() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2>Assignment 1: useState</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}
