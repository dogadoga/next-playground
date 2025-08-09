"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [message, setMessage] = useState("Hello World");
  return (
    <main>
      <h1>Home ページ</h1>
      <h1>{message}</h1>
      <button onClick={() => setMessage("こんにちは")}>メッセージ変更</button>
      <Link href="/about">Aboutページへ</Link>
    </main>
  );
}
