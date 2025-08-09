# プロジェクト構成メモ

## ディレクトリ概要（ルート）

- app/: Next.js App Router のアプリ本体。ページ、レイアウト、スタイルなどを配置。
- public/: 静的ファイル（画像・フォントなど）。`/` 配下でそのまま配信される。
- docs/: プロジェクトのドキュメント置き場。
- .next/: Next.js のビルド出力（自動生成・コミット不要）。
- node_modules/: 依存パッケージ（自動生成・コミット不要）。
- .git/: Git の管理情報。

## 主要ファイル（ルート直下）

- package.json: パッケージ情報とスクリプト・依存関係を定義。
  - scripts: `dev`（開発サーバ）、`build`（ビルド）、`start`（本番起動）、`lint`（Lint）。
- package-lock.json: 依存関係のバージョンを固定するロックファイル。
- tsconfig.json: TypeScript 設定。`strict: true`、`paths` に `@/*` エイリアス定義など。
- next.config.ts: Next.js の設定（必要に応じてカスタマイズ）。
- next-env.d.ts: Next.js と TypeScript の型補助（自動生成）。
- eslint.config.mjs: ESLint 設定（`next/core-web-vitals`, `next/typescript` を拡張）。
- .gitignore: Git で無視するファイル/ディレクトリの設定。
- README.md: セットアップや実行方法の簡易説明。

## app/ 配下の主なファイル

- app/layout.tsx: ルートレイアウト。全ページ共通の HTML 構造・`metadata`・グローバル CSS を適用。
  - `import "./globals.css"` によりグローバルスタイルを読み込む。
- app/page.tsx: ルート `/` のページコンポーネント（ホームページ）。
- app/globals.css: グローバルスタイル。`layout.tsx` から読み込まれる。
- app/favicon.ico: サイトのファビコン（任意。削除するとアイコンが表示されなくなる）。
- app/page.module.css: ページ単位の CSS Modules（現状どこからも import されていないため未使用。削除検討可）。

## public/ 配下の主なアセット

- globe.svg / next.svg / vercel.svg / window.svg / file.svg: サンプルの SVG アセット。不要であれば削除可。

## 開発メモ

- 開発サーバ起動: `npm run dev`
- ビルド: `npm run build`
- 本番起動: `npm run start`
- Lint: `npm run lint`
