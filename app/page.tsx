"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  async function handleSend() {
    const res = await fetch("/api/rewrite", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setOutput(data.output);
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>AI Mediator</h1>

      <textarea
        placeholder="Say what you feel..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
        style={{ width: "100%" }}
      />

      <button onClick={handleSend}>Rewrite</button>

      <h3>AI Version:</h3>
      <p>{output}</p>
    </div>
  );
}
