###### ruby开发环境

### Ruby依赖包
-   `build-essential` C/C++编译环境,依赖：gcc / g++ / make /dpkg-dev
-   `openssl libssl-dev` 为网络通信提供安全及数据完整性的一种安全协议
-   `git-core` Git版本管理系统
-   `libreadline6-dev` `libreadline6`自动安装。 Readline Dev on Ubuntu 12.04 LTS，`libreadline-gplv2-dev`貌似不用装
-   `libyaml-dev libxml2-dev libxslt1-dev` yaml/xml/xslt语言，nokogiri dependencies
-   `tklib` Packages required for compilation of some stdlib modules
-   `nodejs` js v8引擎，千万不要安装`node`否则会出现让你很爽的问题
-   `mysql-server` mysql数据库，依赖安装：`mysql-client`，`libmysql-ruby`干嘛的？ \> 终端下的mysql是client，通过client登录server。一般都是程序直接连接server

### gem编译依赖

-   `zlib1g zlib1g-dev` 数据压缩
-   `libsqlite3-dev` `sqlite3`依赖库
-   `libmysqlclient-dev` `gem install mysql2`依赖库

### 可选工具

-   `curl` curl是利用URL语法在命令行方式下工作的文件传输工具。
-   `autoconf automake`
-   `libtool`
