---
marp: true
theme: default
paginate: true
---

# Next.js Hello World アプリケーション
## 多言語対応機能の実装

---

# アプリケーション概要

- Next.js 14を使用した簡単なWebアプリケーション
- TypeScriptとTailwind CSSを採用
- シンプルな言語切り替え機能を実装

---

# 実装された機能

- 言語切り替え（日本語/英語）
- インタラクティブなUI
  - 選択中言語のハイライト表示
  - クリックによる即時切り替え
- レスポンシブデザイン

---

# プルリクエスト対応

1. Issue #1: 言語切り替え機能の追加
   - ブランチ: `feature/add-language-switcher`
   - 主な変更:
     - useState による言語状態管理
     - 言語切り替えボタンの実装
     - 多言語メッセージの管理

---

# 技術スタック

- **フレームワーク**: Next.js 14
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **状態管理**: React useState
- **バージョン管理**: Git/GitHub

---

# 今後の展望

- さらなる言語サポートの追加
- 言語設定の永続化
- より洗練されたUIの実装 