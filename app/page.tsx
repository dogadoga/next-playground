"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Hello World");
  return (
    <main>
      <h1>{message}</h1>
      <button onClick={() => setMessage("こんにちは")}>メッセージ変更</button>
    </main>
  );
}
