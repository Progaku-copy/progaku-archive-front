# Progaku Archive アプリ
このリポジトリはProgakuのアーカイブ用アプリです。

## 開発環境
1. node.js をインストール(方法は何でもいいです)
2. yarn をインストール
3. リポジトリをクローン
4. ターミナルで、progaku-archive-front に移動する
5. yarn 実行
6. yarn dev 実行
7. 表示された http://localhost:3000 にアクセス
8. src/app/page の内容が表示されていれば完了です

### その他の設定
コード整形は以下のツールを使用しますので、適宜プラグインのインストールをお願いします。

- ESLint
- Prettier


## 開発フロー
基本的な開発のフローについては[こちら](https://github.com/Progaku-copy/progaku-archive/blob/main/docs/getting-started/team_dev_flow.md)を参照してください。
バックエンドの方のドキュメントになりますが、大筋は同じです。  
新規コンポーネントを作成する際は以下のフローで行なってください。
1. ターミナルコマンド `yarn plop` 実行
2. `components` か `features` を選択
3. 作成したいコンポーネントの名前を入力
4. 選択したディレクトリ以下に、入力した名前のコンポーネントディレクトリと indexファイル, storiesファイル が生成されます

## ディレクトリ構成
今後必要に応じて更新していく予定ですが基本は以下です。

src/  
┣ app/　　　　　　# Next.jsのapp router  
┣ features/　　　　　　# 画面のタブごとに切る(レイアウト含む)  
┃　┣ Header/  
┃　┃　┣ Icon/　　　　　　# この機能のみで使用されるコンポーネント  
┃　┃　┃　┣ index.tsx  
┃　┃　┃　┗ Icon.stories.tsx  
┃　┃　┗ index.tsx  
┃　┣ MemoList/  
┃　　　┣ MemoOverview/  
┃　　　┃　┣ index.tsx  
┃　　　┃　┗ MemoOverview.stories.tsx  
┃　　　┗ index.tsx  
┃  
┗ components/　　　　　　# featuresを跨いで汎用的に使用されるコンポーネント  
　　┣ Button/  
　　┃　┣ index.tsx  
　　┃　┗ Icon.stories.tsx  
　　┣ Text/  
　　┃　┣ index.tsx  
　　┃　┗ Icon.stories.tsx  
　　┣ Title/  
　　　　┣ index.tsx  
　　　　┗ Icon.stories.tsx  
