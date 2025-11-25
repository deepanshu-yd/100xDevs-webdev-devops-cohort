import { useState } from 'react';
import './App.css';
import { Assignment1 } from './components/Assignment1';
import { Assignment2 } from './components/Assignment2';
import { Assignment3 } from './components/Assignment3';

function App() {
  const [selectedAssignment, setSelectedAssignment] = useState(1);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>React Hooks Assignments</h1>
      <p>Select an assignment to view:</p>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setSelectedAssignment(1)} style={{ margin: '0 10px', padding: '10px' }}>Assignment 1</button>
        <button onClick={() => setSelectedAssignment(2)} style={{ margin: '0 10px', padding: '10px' }}>Assignment 2</button>
        <button onClick={() => setSelectedAssignment(3)} style={{ margin: '0 10px', padding: '10px' }}>Assignment 3</button>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        {selectedAssignment === 1 && <Assignment1 />}
        {selectedAssignment === 2 && <Assignment2 />}
        {selectedAssignment === 3 && <Assignment3 />}
      </div>
    </div>
  );
}

export default App;
;
