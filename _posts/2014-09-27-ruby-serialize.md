---
title: ruby对象的序列化
layout: post
category: ruby
published: false
---


```ruby
value = ["123456", 2014-04-09 16:15:03 +0800]
serialize_value = Marshal.dump(value)  # => "\x04\b[\aI\"\v123456\x06:\x06ETIu:\tTime\r(\x8D\x1C\x801\x173<\a:\voffseti\x02\x80p:\tzoneI\"\bCST\x06;\x00T"
serialize_value = YAML.dump(value)  # => "---\n- '123456'\n- 2014-04-09 16:15:03.202545000 +08:00\n"
serialize_value = JSON.dump(value)  # => "[\"123456\",\"2014-04-09 16:15:03 +0800\"]"
```
2. 使用`Base64-encoded`对序列化后的对象进行字节编码，方便数据传输，在ruby中得示例用法为：

```ruby
encoded_value = Base64.strict_encode64(serialize_value)
```
3. 为编码的内容加密，加密使用的salt为每个用户随机生成的signature，生成一个digest摘要，使用`SHA1`加密：

```ruby
signature = 'aaa'
digest = OpenSSL::HMAC.hexdigest(SHA1, signature, encoded_value)
```
4. 拼接序列化的内容和加密摘要，拼接格式为 `encoded_value--digest`，示例结果：

```ruby
"BAhbB0kiCzEyMzQ1NgY6BkVUSXU6CVRpbWUNKI0cgDEXMzwHOgtvZmZzZXRpAoBwOgl6b25lSSIIQ1NUBjsAVA==--88dd7a936efa412c32891a55165b46f52e7b10af"
```
