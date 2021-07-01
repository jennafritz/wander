class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :picture, :travel_season, :travel_length, :travel_locale, :travel_classification, :budget, :credits
end
