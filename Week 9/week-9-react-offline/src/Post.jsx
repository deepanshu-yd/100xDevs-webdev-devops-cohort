// Constant style
const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 20,
};

// Post Component
 export function PostComponent({name, subtitle, time, image, description}) {
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