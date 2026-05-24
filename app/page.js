"use client";

import AutoUpload from "@/components/AutoUpload";

export default function Page() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>👕 PoseFit AI</h1>

      <p>Upload photo + fabric → generate outfit preview</p>

      <h3>🧍 User Photo</h3>
      <AutoUpload />

      <h3 style={{ marginTop: 30 }}>🧵 Fabric Image</h3>
      <AutoUpload />

      <button
        style={{
          marginTop: 30,
          padding: "12px 24px",
          borderRadius: "8px",
          border: "none",
          background: "black",
          color: "white",
          cursor: "pointer",
        }}
      >
        Generate Outfit
      </button>

      <div style={{ marginTop: 40 }}>
        <h3>👔 Generated Outfit</h3>
        <p>No output yet</p>
      </div>
    </main>
  );
          }
