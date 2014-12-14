---
title: Rails日志实现探索（1）
layout: post
category: ruby
---

### 概述
在Rails中，日志的设计采用的是“消息-订阅”机制，由两部分组成：

消息发送由`ActiveSupport::Notifications`实现；
消息订阅由`ActiveSupport::LogSubscriber`实现。


可以让你自由的定制日志，用于监测系统的运行状况。

在rails内部，`ActiveRecord，ActionController`均是使用`ActiveSupport::Notifications`来实现日志功能。

想在rails程序中加入日志，可以使用`Rails.logger`, 如：

```ruby
Rails.logger.info "日志内容"
```
