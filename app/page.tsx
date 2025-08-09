"use client"; // このファイルがクライアントサイドであることを明示(デフォルトはサーバーコンポーネントになる)

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [message, setMessage] = useState("Hello World");
  return (
    <main>
      <h1>Home ページ</h1>

      {/* 状態管理 */}
      <h1>{message}</h1>
      <button onClick={() => setMessage("こんにちは")}>メッセージ変更</button>

      {/* ページ遷移 */}
      <Link href="/about">Aboutページへ</Link>

      {/* 動的セグメント: `app/products/[id]/page.tsx` の `[id]` が URL パラメータになる */}
      <ul>
        <li>
          <Link href="/products/1">/products/1</Link>
        </li>
        <li>
          <Link href="/products/2">/products/2</Link>
        </li>
      </ul>
    </main>
  );
}
