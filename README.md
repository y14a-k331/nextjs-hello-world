# Next.js Hello World with Language Switcher

このプロジェクトは、AI支援ツール「Cursor」を活用して開発された Next.js アプリケーションです。

## 開発の特徴

- Cursorによるコード生成と提案を活用
- GitHubのIssueとPull Requestによる開発フロー管理
- AIとの対話による迅速な機能実装

## 実装された機能

- 言語切り替え機能
  - 英語（Hello World）と日本語（こんにちは）の切り替え
  - インタラクティブな言語選択ボタン
  - 選択中言語のビジュアルフィードバック

## 開発履歴

### Issues
- #1: 言語切り替え機能の追加提案
  - 非英語話者への配慮としてJP/EN切り替えボタンの実装を提案

### Pull Requests
- #3: 言語切り替え機能の実装
  - `feature/add-language-switcher` ブランチでの開発
  - `useState`を使用した言語状態管理
  - Tailwind CSSによるUIスタイリング

## 技術スタック

- Next.js 14
- TypeScript
- Tailwind CSS
- pnpm（パッケージマネージャー）

## ドキュメント

プロジェクトの詳細な説明は `doc/slides.md` にMarpスライド形式で記載されています。
