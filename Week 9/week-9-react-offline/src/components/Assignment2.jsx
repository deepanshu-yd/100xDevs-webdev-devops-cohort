import { useEffect, useState } from "react";

// Create a component that logs "Component Mounted" when it mounts
// And "Component Unmounted" when it unmounts

export function Assignment2() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component Mounted");
        return () => {
            console.log("Component Unmounted");
        };
    }, []);

    return (
        <div>
            <h2>Assignment 2: useEffect (Mount/Unmount)</h2>
            <p>Check the console logs!</p>
            <p>Counter to force re-render: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
