// function App() {
//   return (
//     <div style={{ background: "#dfe6e9", height: "100vh" }}>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <div>
//           <div>
//             <PostComponent />
//             <br />
//           </div>
//           <div>
//             <PostComponent />
//             <br />
//           </div>
//           <div>
//             <PostComponent />
//             <br />
//           </div>
//           <div>
//             <ProfileCard />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const style = {
//   width: 200,
//   backgroundColor: "white",
//   borderRadius: 10,
//   borderColor: "gray",
//   borderWidth: 1,
//   padding: 20,
// };

// function PostComponent() {
//   return (
//     <div style={style}>
//       <div style={{ display: "flex" }}>
//         <img
//           src="https://avatars.githubusercontent.com/u/93039894?s=400&u=e35e3041fbfc9e93e8ecb7015bbd67300f32ee4b&v=4"
//           style={{
//             width: 30,
//             height: 30,
//             borderRadius: 20,
//           }}
//         />
//         <div style={{ fontSize: 10, marginLeft: 10 }}>
//           <b>Deepanshu Yadav</b>
//           <div>100 followers</div>
//           <div>10 min ago</div>
//         </div>
//       </div>
//       <div style={{ fontSize: 12 }}>
//         Here's how to make $1000 in just one month. Remember it's all
//         hardwork...
//       </div>
//     </div>
//   );
// }

// function ProfileCard() {
//   return (
//     <div style={style}>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <img
//           src="https://avatars.githubusercontent.com/u/93039894?s=400&u=e35e3041fbfc9e93e8ecb7015bbd67300f32ee4b&v=4"
//           style={{
//             width: 50,
//             height: 50,
//             borderRadius: 40,
//             marginBottom: 15,
//           }}
//         />
//       </div>

//       <div
//         style={{ display: "flex", justifyContent: "center", marginBottom: 15 }}
//       >
//         <div>
//           <div>
//             <b>Deepanshu Yadav</b>
//           </div>
//           <div style={{ display: "flex", justifyContent: "center" }}>
//             <div style={{ fontSize: 14 }}>Software Developer</div>
//           </div>
//         </div>
//       </div>
//       <hr style={{ opacity: 0.3, width: "100%" }}></hr>

//       <div>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: 5,
//             marginTop: 15,
//           }}
//         >
//           <div style={{ fontSize: 14 }}>Profile Views</div>
//           <div style={{ fontSize: 14, color: "blue" }}>400,000</div>
//         </div>

//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <div style={{ fontSize: 14 }}>Post Impressions</div>
//           <div style={{ fontSize: 14, color: "blue" }}>50,000</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// props
// function App () {
//   return (
//     <div>
//       <Greeting name="Deepanshu"/>
//     </div>
//   )
// }

// function Greeting (props) {
//   return (
//     <h1>Hello, {props.name}! </h1>
//   )
// }

// export default App;


// multiple props
function App() {
  return (
    <UserCard name="deepanshu" age={21} isOnline={true} />
  )
}

function UserCard({name, age, isOnline}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}

export default App;
