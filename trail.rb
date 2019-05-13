require 'dm-core'
require 'dm-migrations'



class Trail
    include DataMapper::Resource
    property :id, Serial
    property :trail_name, String
    property :date_hiked, Date
    property :trail_rating, Float
    property :view_rating, Float
    property :trail_conditions, Text
end

DataMapper.finalize

get '/trails' do
    @trails = Trail.all
    erb :allTrails
end

get '/trails/new' do
    @trail = Trail.new
    erb :add_trail
end

get '/trails/:id' do
    @trail = Trail.get(params[:id])
    erb :show_trail
end

post '/trails' do
  trail = Trail.create(params[:trail])
  redirect to("/trails/#{trail.id}")
end

put '/trails/:id' do
  trail = Trail.get(params[:id])
  trail.update(params[:trail])
  redirect to("/trails/#{trail.id}")
end

get '/trails/:id/edit' do
    @trail = Trail.get(params[:id])
    erb :edit_trail
end

delete '/trails/:id' do
    Trail.get(params[:id]).destroy

    redirect to('/trails')
end