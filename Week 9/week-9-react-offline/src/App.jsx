import { useState } from "react";
import { PostComponent } from "./Post";

function App() {
  function addPost() {}

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}>Add Post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <PostComponent
            name="Deepanshu"
            subtitle="100 followers"
            time="22m ago"
            image={"https://avatars.githubusercontent.com/u/93039894?s=400&u=e35e3041fbfc9e93e8ecb7015bbd67300f32ee4b&v=4"}
            description={"How to get a Job in 2025? Here's a set of all the resources and techniques you would want to know to prepare yourself for a job..."}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
