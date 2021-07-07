class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :picture, :latitude, :longitude, :travel_season, :travel_length, :travel_locale, :travel_classification, :budget, :credits, :premium
end
