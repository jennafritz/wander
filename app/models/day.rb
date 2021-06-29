class Day < ApplicationRecord
    has_many :activities
    belongs_to :itinerary
end
