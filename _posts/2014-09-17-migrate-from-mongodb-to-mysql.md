---
title: 从mongodb向mysql迁移数据
layout: post
category: database
---

## 数据迁移指南

### 从mongodb导出csv格式数据

- 命令：`mongoexport`
#### 参数
- `-d`: 指定数据库，`-d status_dev`
- `-c`: 指定collicitons，`-c users`
- `--csv`: 导出为csv格式
- `-f`: 指定导出的列，csv必须，`-f user_key,token,user_behavior._id`
- `-o`: 指定导出文件及位置，`-o ~/work/users.csv`

完整示例：`mongoexport -d status_dev -c users --csv -f user_key,token,user_behavior._id -o ~/work/users.csv`


### 导入csv格式数据至mysql

```sql
load data infile '~/work/users.csv'
into table users
fields terminated by ',' optionally enclosed by '"' escaped by '"'
lines terminated by '\r\n';
```

里面最关键的部分就是格式参数

```sql
fields terminated by ',' optionally enclosed by '"' escaped by '"'
lines terminated by '\r\n'
```
这个参数是根据RFC4180文档设置的，该文档全称Common Format and MIME Type for Comma-Separated Values (CSV) Files，其中详细描述了CSV格式，其要点包括：

(1)字段之间以逗号分隔，数据行之间以\r\n分隔；

(2)字符串以半角双引号包围，字符串本身的双引号用两个双引号表示。
