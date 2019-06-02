require 'sinatra'
require './trail'
require './photos'

configure :development do
    DataMapper.setup(:default, "sqlite3://#{Dir.pwd}/development.db")
end

configure :production do
  DataMapper.setup(:default, ENV['DATABASE_URL'])
end

get '/' do
    erb :home
end

get '/admin' do
    erb :admin
end