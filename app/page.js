export default function Home() {
  return (
    <main style={{
      display: "flex",
      minHeight: "100vh",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      fontFamily: "Arial",
      background: "#0f172a",
      color: "white",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "42px", color: "#22c55e" }}>
        PoseFit AI 🚀
      </h1>

      <p style={{ fontSize: "18px" }}>
        AI Fitness + Fashion Try-On Platform
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          background: "#22c55e",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer"
        }}
        onClick={() => alert("App is working!")}
      >
        Start
      </button>
    </main>
  );
}
