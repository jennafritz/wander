class Day < ApplicationRecord
    has_many :activities, dependent: :destroy
    belongs_to :itinerary
end
