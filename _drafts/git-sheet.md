###### Git常用命令概览

### 阅读帮助
-   `<repository>` 远程版本库
-   `<url>` 版本库地址，通常以如下三种类型开头：`git@ git:// https://`
-   `<refspec>` 指定版本，包括`branch tag`以及Hash标识

### 创建版本库
-   `git init` 打开文件夹后执行本命令将初始化本地版本库，会在当前文件夹下生成一个 .git 文件夹 \#\#\#\# 提高
-   `git clone <url>` 克隆远程版本库

### 缓存
-   `git add .` 缓存所有文件（包括已跟踪的文件和新的文件）

#### 提高

-   `git add <file>` 缓存指定文件
-   `git add -u` 缓存改动过的文件（已跟踪）
-   `git status` 查看状态
-   `git diff` 查看变更内容

### 提交

-   `git commit -m <msg>` 提交缓存的文件，`<msg>`为提交的备注，必须填写

#### 提高

-   `git commit --amend` 撤销最后一次提交（修改）
-   `git log` 查看提交历史
-   `git log -p <file>` 查看指定文件的提交历史
-   `git blame <file>` 以列表方式查看指定文件的提交历史

### 上传到远程版本库

-   `git push <name> <branch>` 上传代码及快速合并，将仓库复制到远端服务器

#### 提高

-   `git push <name> :<branch/tag-name>` 删除远程分支或标签
-   `git push --tags` 上传所有标签

### 从服务器合并代码

-   `git fetch` 从默认远程版本库获取代码，`git fetch <name>`从指定远程库获取代码
-   `git merge <branch>` 合并指定分支到当前分支
-   `git pull` 从默认远程版本库获取代码并合并，相当于`git fetch`后再执行`git merge <refspec>`
-   `git pull <name> <refspec>` 下载代码及快速合并

#### 提高

-   `git remote` 远程版本库信息
-   `git remote -v` 远程版本库详细信息，相当于`git remote --verbose`
-   `git remote show <name>` 指定远程版本库更详细的信息
-   `git remote add <name> <url>` 添加新的远程版本库
-   `git remote set-url <name> <url>` 设置远程版本库的新地址

### 撤消

-   `git reset --hard HEAD` 撤消工作目录中所有未提交文件的修改内容
-   `git checkout HEAD <file>` 撤消指定的未提交文件的修改内容
-   `git revert <commit>` 撤消指定的提交

### 分支与标签

-   `git branch` 列出所有本地分支
-   `git branch <branch>` 创建新分支
-   `git branch -d <branch>` 删除本地分支
-   `git checkout <branch>` 切换到指定分支

-   `git tag` 列出所有本地标签
-   `git tag <tag>` 基于最新提交创建标签
-   `git tag -d <tag>` 删除标签
-   `git checkout <tag>` 切换到指定标签

-   `git checkout -b <branchname> <origin/branchna>` 在本地创建一个要合并的原创分支

### 文件操作

-   `git mv <old> <new>` 文件改名
-   `git rm <file>` 删除文件
-   `git rm --cached <file>` 停止跟踪文件但不删除

### 其他

#### Git pull 冲突解决办法

-   `git stash` 暂存本地改动，可通过`git stash list`查看已暂存的列表，git pull之后通过`git stash pop`恢复
-   `git reset --hard` 不保留本地改动


