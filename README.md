# ELB × EC2 オートスケーリンググループ × RDS（マスター・スレーブ） × express サーバー

## 構成

### 高可用性

-   EC2 オートスケーリンググループで自動スケーリング

-   RDS はプライベートサブネットにマルチ AZ 構成（マスター・スレーブ）で配置

-   単一障害点の排除

### セキュアアーキテクチャ

-   RDS はプライベートサブネットに配置し、EC2 からのアクセスのみ許可

-   セキュリティグループの設定でアクセス制限

## サーバーを起動

インスタンスコネクトなどで ssh 接続し、以下の手順を実行する

```
1. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

2. . ~/.nvm/nvm.sh && nvm install node

3. touch index.mjs create.mjs setup.mjs

4. npm init -y

5. npm install express axios mysql2

6. vimエディタなどでスクリプトを編集する

7. create.mjs と setup.mjs を実行して、データベースをセットアップする

8. node index.mjs でサーバーを起動する

9. curl ${RDSHostName} で [{"id":1,"name":"Sample User","email":"sample@email.com"}]が返却されれば成功
```
