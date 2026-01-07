# プロジェクト設定

## アーキテクチャ

- **フレームワーク**: Next.js（App Router, TypeScript）
- **UI/スタイル**: Tailwind CSS + shadcn/ui（アクセシブルで拡張容易）
- **アニメーション**: Framer Motion（控えめで上質な動き）
- **コンテンツ**: MDX or Headless CMS（Sanity/Contentful/Strapi）
- **画像最適化**: next/image（自動最適化・レスポンシブ）
- **SEO**: next-seo + App Router の metadata
- **配信**: Vercel（高速CDNとSSR/SSGの相性が良い）
- **分析/フォーム**: Vercel Analytics/Plausible、Resend/SendGrid 連携

## コーディング規約
- インデント: 2スペース
- ファイル命名: kebab-case
- 絶対パスではなく相対パスを使ってください

## よく使うコマンド
npx expo start    // Expo起動
npx expo start -c    // Expoキャッシュクリア起動
