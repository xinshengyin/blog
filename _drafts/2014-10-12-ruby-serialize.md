---
title: ruby对象的序列化
layout: post
category: ruby
published: false
---



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
