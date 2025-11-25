import { useState, useEffect } from "react";

// Create a component that has a count state
// And logs "Count updated to: {count}" whenever the count changes

export function Assignment3() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("");

    useEffect(() => {
        console.log("Count updated to:", count);
    }, [count]);

    return (
        <div>
            <h2>Assignment 3: useEffect (Dependency Array)</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <br />
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Type something..."
            />
            <p>Typing in the input box should NOT trigger the effect.</p>
        </div>
    );
}
