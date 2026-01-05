# Vite ベースのテンプレートサイト

このリポジトリは、HTML と CSS、Vite を使った軽量なテンプレートサイト用の準備です。

現在このワークスペースには以下のファイルのみ作成しています。

- `README.md`
- `.gitignore`

その他のソースファイル（`index.html`, `src/` 配下の JS/CSS など）は作成していません。必要であれば別途作成します。

## 目的

- Vite を使ったシンプルな静的テンプレート（HTML + CSS）を素早く立ち上げるためのベースを提供します。

## 想定する最小ファイル構成（参考）

- `index.html` — サイトのエントリ HTML
- `src/main.js` — Vite 用エントリ（必要に応じて）
- `src/style.css` — 基本スタイル
- `dist/` — ビルド出力（Git 管理対象外）

> 注: 上のファイルはまだ作成していません。必要があれば作成します。

## 必要条件

- Node.js (推奨: 16 以上)
- npm または yarn

## 初期セットアップ（このリポジトリで初めて Vite を使う場合）

ターミナルで以下を実行します（ワークスペースのルートで実行してください）。

```bash
# Vite プロジェクトを現在ディレクトリに初期化（テンプレートに "vanilla" を使用）
npm create vite@latest . -- --template vanilla

# 依存をインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build
```

## 備考

- このリポジトリにはまだ HTML/CSS の実ファイルは含まれていません。まずはどのファイルを用意するか指定してください（例: `index.html` と `src/style.css` を作成する、など）。
- 作成を許可いただければ、`index.html` と `src/style.css` を作成して基本レイアウトを用意できます。

---

作業したファイル:

- `README.md` — 本ファイル
- `.gitignore` — Git 無視設定（同ディレクトリに作成済み）

---

## SCSS
SCSSの設定方法になります。  

package.json
```
"devDependencies": {
  "sass": "^1.97.1"
}
```

jsファイル ( `main.js` をリネームしたい場合はエントリーポイントを変える)  
main.js
```
// src/main.js
import './style.scss';
```

htmlファイル
```
<link rel="stylesheet" href="/src/style.scss">
```