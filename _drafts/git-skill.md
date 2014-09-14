# Git的一些小技巧

## 忽略文件


gitignore只能忽略那些原来没有被track的文件，所以修改.gitignore是无效的。
正确的做法是在每个clone下来的仓库中手动设置不要检查特定文件的更改情况。
% git update-index --assume-unchanged /path/to/file
缺点就是每个新的仓库都必须手动设置一次。幸运的是，这样的设置每个仓库只要进行一次就够了。
