class ItinerarySerializer < ActiveModel::Serializer
  attributes :id, :destination, :latitude, :longitude, :name, :description, :season, :length, :locale, :classification, :budget
  # has_many :user_itineraries
  # has_many :users
  # has_many :days
  # has_many :activities
  # has_many :photos
end
