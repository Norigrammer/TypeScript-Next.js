<h1 align="center">一美Group Website</h1>

一美Groupの公式ウェブサイトです。4つの主要事業（スーツ販売、不動産、AIコンサルティング、SNSマーケティング）を紹介し、お客様の多様なニーズに応えるサービスを提供しています。

参考画像: 一美Group Webサイト - トップページ<br>
<img width="647" height="540" align="center" alt="一美GroupWebサイト_トップページ" src="https://github.com/user-attachments/assets/79a82301-0133-4950-b47e-381d0cf0f81e" />

## 技術スタック

- **フレームワーク**: [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- **UI/スタイル**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **アニメーション**: [Framer Motion](https://www.framer.com/motion/)
- **メール送信**: [Resend](https://resend.com/)
- **アイコン**: [Lucide React](https://lucide.dev/)
- **配信**: [Vercel](https://vercel.com/)

## 主な機能

- レスポンシブデザイン（モバイル/デスクトップ対応）
- 4事業のサービス紹介ページ
- お問い合わせフォーム（メール送信機能付き）
- 会社情報・採用情報ページ
- SEO最適化

## プロジェクト構成

```
src/
├── app/                    # App Router ページ
│   ├── api/               # API Routes
│   │   └── contact/       # お問い合わせAPI
│   ├── company/           # 会社情報
│   ├── contact/           # お問い合わせ
│   ├── legal/             # 法務ページ
│   │   ├── privacy/       # プライバシーポリシー
│   │   └── terms/         # 利用規約
│   ├── recruit/           # 採用情報
│   └── services/          # 事業紹介
│       ├── ai-consulting/ # AIコンサルティング
│       ├── real-estate/   # 不動産
│       ├── sns-marketing/ # SNSマーケティング
│       └── suits/         # スーツ販売
├── components/
│   ├── layout/            # レイアウトコンポーネント
│   ├── sections/          # セクションコンポーネント
│   └── ui/                # UIコンポーネント (shadcn/ui)
└── lib/                   # ユーティリティ
```

## セットアップ

### 必要条件

- Node.js 18.x 以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/Norigrammer/hitomi-company-website.git
cd hitomi-company-website

# 依存関係をインストール
npm install
```

### 環境変数の設定

`.env.example` をコピーして `.env.local` を作成し、必要な値を設定してください。

```bash
cp .env.example .env.local
```

```env
# Resend API Key
# https://resend.com/api-keys から取得
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Email Settings
COMPANY_NAME=一美Group
COMPANY_EMAIL=info@example.com
FROM_EMAIL=noreply@example.com
```

## 開発

```bash
# 開発サーバーを起動
npm run dev
```

[http://localhost:3000](http://localhost:3000) でアクセスできます。

## ビルド

```bash
# プロダクションビルド
npm run build

# ビルド結果を起動
npm run start
```

## コマンド一覧

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | プロダクションビルド |
| `npm run start` | ビルド結果を起動 |
| `npm run lint` | ESLint を実行 |

## コーディング規約

- インデント: 2スペース
- ファイル命名: kebab-case
- パス指定: 相対パスを使用

## ページ一覧

| パス | ページ名 |
|------|----------|
| `/` | トップページ |
| `/services/suits` | スーツ販売 |
| `/services/real-estate` | 不動産事業 |
| `/services/ai-consulting` | AIコンサルティング |
| `/services/sns-marketing` | SNSマーケティング |
| `/company` | 会社情報 |
| `/recruit` | 採用情報 |
| `/contact` | お問い合わせ |
| `/legal/privacy` | プライバシーポリシー |
| `/legal/terms` | 利用規約 |

## ライセンス

このプロジェクトは非公開です。無断での複製・配布を禁じます。
