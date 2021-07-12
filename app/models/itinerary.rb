class Itinerary < ApplicationRecord
    has_many :user_itineraries
    has_many :users, through: :user_itineraries
    has_many :days, dependent: :destroy
    has_many :photos, dependent: :destroy
    has_many :reviews, dependent: :destroy
end
