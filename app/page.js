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

      <p style={{ fontSize: "18px" }}>
        AI Fitness App is now Live
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          background: "#22c55e",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "16px"
        }}
        onClick={() => alert("Welcome to PoseFit AI!")}
      >
        Start Workout
      </button>
    </main>
  );
}
