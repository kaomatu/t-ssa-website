# T-SSA 公式サイト

T-SSA（Team Sanaru Super Athlete）の集客用・静的ホームページです。Next.jsで静的ファイルを出力し、Firebase Hostingで公開します。データベースやサーバー側の処理は使いません。

## ローカルで確認する

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## Firebaseに公開する

Firebaseプロジェクトを作成した状態で、プロジェクトのルートで次を実行します。

```bash
npx firebase login
npx firebase use --add
npm run deploy
```

`npm run build` により、Firebaseへアップロードされる静的ファイルが `out/` に生成されます。Firebase Hostingの公開フォルダ指定は、同梱の `firebase.json` に設定済みです。

## 公開前に確認・差し替える内容

- 問い合わせ先メールアドレス（`app/page.tsx` の `CONTACT_EMAIL`）
- 正式ロゴ（現在は仮のTマーク）
- トップ写真（`public/images/hero/` の5枚はAI生成のダミー画像。実際の活動写真で同名のJPEGに差し替え可能）
- Googleフォームの申込みURL（開設後、体験参加ボタンのリンク先を差し替え）
- コーチ紹介・活動内容など、運営開始後の情報

## 後からブログを追加する場合

Googleドキュメントで記事を作成し、Google Apps ScriptでMarkdownと画像をGitHubへ連携する形にすると、記事公開ごとにGitHub Actionsでサイトを自動更新できます。初期サイトにはデータベースを追加する必要はありません。
