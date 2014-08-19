```ruby
{
  "CONTENT_LENGTH"=>"56",
  "CONTENT_TYPE"=>"application/x-www-form-urlencoded; charset=UTF-8",
  "GATEWAY_INTERFACE"=>"CGI/1.1",
  "PATH_INFO"=>"/users/login",
  "QUERY_STRING"=>"",
  "REMOTE_ADDR"=>"127.0.0.1",
  "REMOTE_HOST"=>"localhost",
  "REQUEST_METHOD"=>"POST",
  "REQUEST_URI"=>"http://localhost:9292/users/login",
  "SCRIPT_NAME"=>"",
  "SERVER_NAME"=>"localhost",
  "SERVER_PORT"=>"9292",
  "SERVER_PROTOCOL"=>"HTTP/1.1",
  "SERVER_SOFTWARE"=>"WEBrick/1.3.1 (Ruby/1.9.3/2013-06-27)",

  "HTTP_ACCEPT"=>"application/json",
  "HTTP_CACHE_CONTROL"=>"no-cache",
  "HTTP_PARAMS"=>"ssss",  # 自定义参数
  "HTTP_HOST"=>"localhost:9292",
  "HTTP_CONNECTION"=>"Keep-Alive",
  "HTTP_USER_AGENT"=>"Apache-HttpClient/4.2.5 (java 1.5)",

  "rack.version"=>[1, 2],
  "rack.input"=>#<Rack::Lint::InputWrapper:0x007fdea747bcc8 @input=#<StringIO:0x007fdea746ba58>>,
  "rack.errors"=>#<Rack::Lint::ErrorWrapper:0x007fdea747bc28 @error=#<IO:<STDERR>>>,
  "rack.multithread"=>true,
  "rack.multiprocess"=>false,
  "rack.run_once"=>false,
  "rack.url_scheme"=>"http",

  "HTTP_VERSION"=>"HTTP/1.1",
  "REQUEST_PATH"=>"/users/login",
  "rack_ext.logger"=>nil,
  "rack.session"=>{"warden.user.default.key"=>BSON::ObjectId('533295e571696e03da000000')},
  "rack.session.options"=>{:path=>"/", :domain=>nil, :expire_after=>nil, :secure=>false, :httponly=>true, :defer=>true, :renew=>true, :sidbits=>128, :secure_random=>SecureRandom, :drop=>false},
  "warden"=>Warden::Proxy:70297132981000 @config={:default_scope=>:default, :scope_defaults=>{}, :default_strategies=>{:_all=>[:password]}, :intercept_401=>true, :failure_app=>UserApi},
  "rack.routing_args"=>{:route_info=>version=, method=POST, path=/users/login(.:format)},

  "api.endpoint"=>#<Grape::Endpoint:0x007fdea70b91a8>,
  "api.format"=>:json,
  "rack.request.cookie_hash"=>{},
  "rack.request.query_string"=>"",
  "rack.request.query_hash"=>{},
  "rack.request.form_input"=>#<Rack::Lint::InputWrapper:0x007fdea747bcc8 @input=#<StringIO:0x007fdea746ba58>>,
  "rack.request.form_hash"=>{"user"=>{"mobile"=>"12345674555", "password"=>"12345678"}},
  "rack.request.form_vars"=>"user%5Bmobile%5D=12345674555&user%5Bpassword%5D=12345678"}

  #<Grape::Endpoint:0x007fdea70b91a8
  @settings=[{
               :declared_params=>[],
               :validations=>[],
               :format=>:json,
               :default_error_formatter=>Grape::ErrorFormatter::Json,
               :content_types=>{:json=>"application/json"},
               :befores=>[#<Proc:0x007fdea3d27b50@/Users/qin/work/event_api/app/api/root_api.rb:10>],
               :mount_path=>"/"}, 
{
  :declared_params=>[], 
  :validations=>[], 
  :format=>:json, 
  :default_error_formatter=>Grape::ErrorFormatter::Json, 
  :content_types=>{:json=>"application/json"}
}, 
{
  :namespace=>#<Grape::Namespace:0x007fdea5aee8c8 @space="users", @options={}>, 
  :validations=>[], 
  :declared_params=>[]
}
], 

@options={:method=>["POST"], :path=>[:login], :route_options=>{:description=>"用户登录"}}, 
@source=#<Proc:0x007fdea5df60e8@/Users/qin/work/event_api/app/api/user_api.rb:28>, 
@block=#<Proc:0x007fdea3d97590@/Users/qin/.rbenv/versions/1.9.3-p448/lib/ruby/gems/1.9.1/gems/grape-0.6.1/lib/grape/endpoint.rb:31>, 
@namespace="/users", 
@routes=[version=, method=POST, path=/users/login(.:format)], 
@env={...}, 
@header={"Access-Control-Allow-Origin"=>"*", "Access-Control-Request-Method"=>"*"}, @request=#<Grape::Request:0x007fdea70846d8 @env={...}>, 
@cookies=#<Grape::Cookies:0x007fdea7200728 @cookies={}, @send_cookies={}>>
```