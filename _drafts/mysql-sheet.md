---
layout: post
title: Mysql数据库编码
published: false
---


### MySQL中默认字符集的设置有四级：

-   服务器级（Server），
-   数据库级（Db）:
-   修改配置文件： [mysqld] default-character-set=utf8

-   表级（Table）：`show full columns from <tablename>;`
-   字段级。
-   注意前三种均为默认设置，并不代码你的字段最终会使用这个字符集设置。
