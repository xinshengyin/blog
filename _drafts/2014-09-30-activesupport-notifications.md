---
title: ActiveSupport宝藏之Notifications
layout: post
category: ruby
---

`ActiveSupport::Notifications`可以让你自由的定制你想要的日志。

想在rails程序中加入日志，可以使用`Rails.logger`, 如：

```ruby
logger.info "#{@user.id}"
```

如果说，`Rails.logger`是添加日志记录的一把好武器，下面我们介绍的`ActiveSupport::Notifications`则是定制日志的核武器。
在rails内部，`ActiveRecord，ActionController`均是使用`ActiveSupport::Notifications`来实现的日志功能。
