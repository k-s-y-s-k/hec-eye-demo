# hec-eye-demo-frontend

## SLA

### Browser

- safari:latest
- chrome:latest


### Size

- PC
    - 1920 x 1080 (any)
- TABLET
    - 1,668 x 2,388 (11 inch)
    - 2,778 x 1,284 12 inch


## Requirements

* Node.js 14.13.x
* Yarn v1.x

## Installation

### Node.js

Node.js v14.xをマシンへインストールします。
次のいずれかの方法でのインストールをおすすめします。

* [公式インストーラー](https://nodejs.org/dist/latest-v12.x/)
* [nodebrew](https://github.com/hokaccha/nodebrew)
* [nvm](https://github.com/nvm-sh/nvm)

```shell script
$ node -v
v14.13.0
```

### Yarn

Node.jsのパッケージマネージャー Yarn (v1.x) をインストールします。
環境によってインストール方法が異なります。

> https://yarnpkg.com/lang/ja/docs/install/

```shell script
# for macOS
$ brew install yarn

# for Windows (with Chocolatey)
$ choco install yarn
```

なお、 `npm install -g yarn` でインストールされたYarnはパッケージの整合性チェックが脆弱なため、必ず推奨される方法でインストールしてください。

### NPM Packages

Nuxtアプリの実行に必要なnpmパッケージをインストールします。

```shell script
$ yarn install
```

### VSCodeで入れて欲しいプラグイン
VSCodeで開発する場合は以下のプラグインを入れておくことをオススメします。

+ [MarkDown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
+ [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
+ [editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
+ [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
+ [stylelint-plus](https://marketplace.visualstudio.com/items?itemName=hex-ci.stylelint-plus)
+ [todo-highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)

```sh
code --install-extension yzhang.markdown-all-in-one
code --install-extension streetsidesoftware.code-spell-checker
code --install-extension editorconfig.editorconfig
code --install-extension dbaeumer.vscode-eslint
code --install-extension stylelint.vscode-stylelint
code --install-extension esbenp.prettier-vscode
code --install-extension wayou.vscode-todo-highlight
```

## Development Server

開発サーバーを起動するには、次のコマンドを実行します。

```shell script
$ yarn dev
```

http://localhost:4050 もしくは ローカルIPの4050番ポート で開発サーバーが起動します。

## Build

frontendアプリをビルドします。
そして、ビルドされたfrontendアプリを起動します。

```shell script
$ yarn build
```

## npm-scripts

| コマンド | 効果 |
|:--:|:---|
| start | 開発環境で起動します。 |
| build | 青果物をdistへ生成。 |
| lint:js | TypeScriptのコードを規約通りに記述されているか精査を実施する |
| fix:js | TypeScriptのコードを規約通りに整形を行う |

