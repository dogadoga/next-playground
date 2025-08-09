"use client";
import { useEffect, useState } from "react";

export default function About() {
  const [message, setMessage] = useState("loading...");

  useEffect(() => {
    fetch("/api/hello")
      .then((r) => r.json()) // fetch のレスポンスrをjson()に変換
      .then((d) => setMessage(d.message)) // jsonをstate更新関数setMessageに渡す
      .catch(() => setMessage("error")); // fetchやJSON変換で失敗した場合エラーメッセージを表示
  }, []);

  return (
    <main>
      <h1>About</h1>
      <p>{message}</p>
    </main>
  );
}
