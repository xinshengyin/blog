# Git高级技巧之忽略文件

## 前言

前段时间新参与公司的一个项目，由于服务器 ruby 版本管理用的是 rvm，我在本地用的是 rbenv，这两个 ruby 版本管理软件都用到了`.ruby-version`作为配置文件，但是语法不一样。
我的需求是在本地改动`.ruby-version`这个文件，但是让 git 忽略我在本地的改动。
首先我想到的是使用`.gitignore`配置文件，但是使用`.gitignore`会将`.ruby-version`这个文件删除，这显然不是我想要的结果。
那怎么解决这个问题呢？

## git 忽略文件的两个类型

git 忽略文件的类型分为：临时忽略，永久忽略两个类型。`.gitignore`实际是属于永久忽略一个文件。

### git 临时忽略文件
命令：`git update-index --assume-unchanged <file>`

我先在项目下运行 git status，结果是这样的：

```bash
On branch master
Your branch is up-to-date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   .ruby-version

no changes added to commit (use "git add" and/or "git commit -a")
```

然后我运行命令：`git update-index --assume-unchanged .ruby-version`

gitignore只能忽略那些原来没有被track的文件，所以修改.gitignore是无效的。
正确的做法是在每个clone下来的仓库中手动设置不要检查特定文件的更改情况。
% git update-index --assume-unchanged /path/to/file
缺点就是每个新的仓库都必须手动设置一次。幸运的是，这样的设置每个仓库只要进行一次就够了。
