# Set up
- 拡張機能に`Paste Image`(mushan.vscode-paste-image) と `Marp for VS Code`(marp-team.marp-vscode) を追加してください。
- `npm install`

# How to
- `make new`で新規のスライドのプロジェクトを作成します。
- `npm run dev`でスライドのレイアウトを確認することができます。
- `make resize PROJECT=プロジェクト名` で `/src/{プロジェクト名}/images/`下の画像ファイルがすべて`896x504`にリサイズされます。
- `npm run pdf` や `npm run pptx`でPDFファイルやpptxファイルを出力することができます。

# Notes
- `Marp for VS Code`のエクスポート機能からPDFファイルやpptxファイルをプロジェクト別に出力することもできますが、cssのスタイルが反映されません。
