// Parent Component
function App() {
  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            <Greeting name="Deepanshu" />
          </div>
          <div>
            <PostComponent name="Deepanshu" subtitle="100 followers" time="22m ago" image={"https://avatars.githubusercontent.com/u/93039894?s=400&u=e35e3041fbfc9e93e8ecb7015bbd67300f32ee4b&v=4"} description={"How to get a Job in 2025? Here's a set of all the resources and techniques you would want to know to prepare yourself for a job..."}/>
            <br />
          </div>
          <div>
            <PostComponent name="Harkirat" subtitle="Promoted" image={"https://avatars.githubusercontent.com/u/93039894?s=400&u=e35e3041fbfc9e93e8ecb7015bbd67300f32ee4b&v=4"} description={"Subscribe to my blog post and be one step ahead in tech..."}/>
            <br />
          </div>
          <div>
            <ProfileCard />
          </div>
        </div>
      </div>
    </div>
  );
}

// Constant style
const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 20,
};

// Post Componenet
function PostComponent({name, subtitle, time, image, description}) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={image}
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
          }}
        />
        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <b>{name}</b>
          <div>{subtitle}</div>
          {time !== undefined && <div style={{display: "flex", alignItems: "center"}}>
            <div>{time}</div>
            <img src={"https://imgs.search.brave.com/4xJhyAYkaMqUaYQQaIpfSdJCujYqRbfxzA_BvTgb36A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFFVndVVldZSUwu/anBn"} style={{width: 10, height: 10, marginLeft:5}}></img>
          </div>}
        </div>
      </div>
      <div style={{ fontSize: 12, marginTop: 5}}>
        {description}
      </div>
    </div>
  );
}

// Profile Card Component
function ProfileCard() {
  return (
    <div style={style}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://avatars.githubusercontent.com/u/93039894?s=400&u=e35e3041fbfc9e93e8ecb7015bbd67300f32ee4b&v=4"
          style={{
            width: 50,
            height: 50,
            borderRadius: 40,
            marginBottom: 15,
          }}
        />
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 15 }}
      >
        <div>
          <div>
            <b>Deepanshu Yadav</b>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ fontSize: 14 }}>Software Developer</div>
          </div>
        </div>
      </div>
      <hr style={{ opacity: 0.3, width: "100%" }}></hr>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 5,
            marginTop: 15,
          }}
        >
          <div style={{ fontSize: 14 }}>Profile Views</div>
          <div style={{ fontSize: 14, color: "blue" }}>400,000</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontSize: 14 }}>Post Impressions</div>
          <div style={{ fontSize: 14, color: "blue" }}>50,000</div>
        </div>
      </div>
    </div>
  );
}

function Greeting(props) {
  return (
    <h1>Hello, {props.name}!</h1>
  )
}

export default App;