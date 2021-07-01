class DaySerializer < ActiveModel::Serializer
  attributes :id, :name, :number, :itinerary_id
  has_many :activities
end
