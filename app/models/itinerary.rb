class Itinerary < ApplicationRecord
    has_many :user_itineraries
    has_many :users, through: :user_itineraries
    has_many :days
    has_many :photos
end
