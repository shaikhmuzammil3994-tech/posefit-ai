export default function Home() {
  return (
    <main style={{
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      fontFamily: "Arial",
      background: "#0f172a",
      color: "white"
    }}>
      <h1 style={{ fontSize: "40px", color: "#22c55e" }}>
        PoseFit AI 🚀
      </h1>

      <p>Build Fixed Successfully</p>

      <button
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          background: "#22c55e",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer"
        }}
        onClick={() => alert("Working!")}
      >
        Start
      </button>
    </main>
  );
}
